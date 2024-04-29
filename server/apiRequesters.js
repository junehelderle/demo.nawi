import axios from 'axios'
import Airtable from 'airtable';

export async function callDonorBox(donorBoxApiKey, userEmail) {
    console.log('Calling DonorBox API...', !!donorBoxApiKey);
    try {
        const response = await axios.get('https://donorbox.org/api/v1/campaigns', {
            auth: {
                username: userEmail,
                password: donorBoxApiKey
            }
        })

        const campaigns = response.data
        let nawiCampaign = null
        for (let index = 0; index < campaigns.length; index++) {
            const element = campaigns[index];
            if (element.name == 'nawi') {
                nawiCampaign = element
            }
        }
        return Number(nawiCampaign.total_raised)
    } catch (error) {
        console.error('Error fetching from DonorBox:', error.message, error.response?.data);
        return error.message;
    }
}

export async function callAirtable(airtableApiKey, airtableBaseID) {
    console.log('Calling Airtable API...', !!airtableApiKey);

    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: airtableApiKey
    });
    const base = Airtable.base(airtableBaseID);

    try {
        let totalAmount = await new Promise((resolve, reject) => {
            let sum = 0;
            base('Donations').select({
                fields: ["Amount"]
            }).eachPage(function page(records, fetchNextPage) {
                records.forEach(record => {
                    sum += record.fields.Amount;
                });
                fetchNextPage();
            }, function done(err) {
                if (err) {
                    console.error('Error fetching from Airtable:', err);
                    reject(err);
                } else {
                    resolve(sum);
                }
            });
        });
        return totalAmount;
    } catch (error) {
        console.error('Error fetching from Airtable:', error);
        return 0;
    }
}

export async function callGlobalGiving(globalGivingApiKey) {
    console.log('Calling GlobalGiving API...', !!globalGivingApiKey);
    try {
        const response = await axios.get('https://api.globalgiving.org/api/public/projectservice/themes', {
            params: {
                api_key: globalGivingApiKey
            },
            headers: {
                'Accept': 'application/json'
            }
        });
        const totalAmount = 0.0;
        console.log('Amount from GlobalGiving:', totalAmount);
        return totalAmount;
    } catch (error) {
        console.error('Error fetching from GlobalGiving:', error.message);
        return 0;
    }
}
