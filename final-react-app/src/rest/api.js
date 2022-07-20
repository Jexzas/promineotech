const GROCERIES_ENDPOINT = 'https://62d2f1bdafb0b03fc5ae0e76.mockapi.io/areas';

class CallingAPI {
    // retrieve all areas available
    get = async() => {
        try {
            const resp = await fetch(GROCERIES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error('fetch did not succeed', e);
        }
    }
    // Add items to areas, do not add areas
    put = async(area) => {
        try {
            const resp = await fetch(`${GROCERIES_ENDPOINT}/${area._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(area)
            }
            );
            return await resp.json();
        } catch(e) {
            console.error('area modification did not succeed', e);
        }
    }
    // this is dev code for adding areas, it should not be available in the DOM
    post = async(area) => {
        try {
            const resp = await fetch(`${GROCERIES_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(area)
            });
            return await resp.json();
        } catch(e) {
            console.error('Could not add that area', e);
        }
    }
}

const CallAPI = new CallingAPI();
export default CallAPI;