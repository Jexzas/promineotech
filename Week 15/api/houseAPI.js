const HOUSES_ENDPOINT = 'https://62c8ed860f32635590de3614.mockapi.io/houses/';
class exportedAPI {

    get = async() => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error('fetch did not succeed', e);
        }
    }
    
    put = async(house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            }
            );
            return await resp.json();
        } catch(e) {
            console.error('house modification did not succeed', e);
        }
    }
}

export const HouseApi = new exportedAPI();


// this code is essentially exactly the same as it was in the videos because no matter how I refactored it it did not work unless typed exactly the same as he did. 