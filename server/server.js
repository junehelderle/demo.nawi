import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { callDonorBox, callAirtable } from './apiRequesters.js';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  const envPath = path.resolve(__dirname, '../prod.env');
  dotenv.config({ path: envPath });
  console.log('Running in production mode with env var: ', process.env.NODE_ENV);
} else {
  const envPath = path.resolve(__dirname, '../dev.env');
  dotenv.config({ path: envPath });
  console.log('Running in development mode with env var: ', process.env.NODE_ENV);
}
// DonorBox
const donorBoxApiKey = process.env.ZAPIER_DONORBOX_API_KEY;
const userEmail = process.env.ZAPIER_DONORBOX_USER_EMAIL;

// GlobalGiving
// const globalGivingApiKey = process.env.GLOBAL_GIVING_API_KEY

// Airtable
const airtableApiKey = process.env.AIRTABLE_API_KEY
const airtableBaseID = process.env.AIRTABLE_BASE_ID

const app = express();
app.use(compression())
// Serve static files from the React app build directory - dist
app.use(express.static(path.join(__dirname, '../dist')));

let cachedSum = 0;
app.get('/total_donations', (req, res) => {
  res.json({ total_raised: cachedSum })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  } else {
    res.status(404).send('API endpoint not found');
  }
});

// Recalculate the total donation sum when the server starts, and every three hours after that
updateCachedDonationSumValue()
setInterval((updateCachedDonationSumValue), 7200 * 1000)

function updateCachedDonationSumValue() {
  Promise.all([
    callDonorBox(donorBoxApiKey, userEmail),
    callAirtable(airtableApiKey, airtableBaseID)
  ]).then((values) => {
    const validValues = values.filter(x => x !== undefined).map(x => Number(x) || 0);
    const sum = validValues.reduce((acc, currentValue) => acc + currentValue, 0);
    console.log('Updated sum: ', sum);
    cachedSum = sum;
  }).catch(error => {
    console.error('Error updating cached donation sum:', error);
  });
}



