const AREAS_ENDPOINT = 'https://62d2f1bdafb0b03fc5ae0e76.mockapi.io/areas';

class CallsAPI {

    get = async() => {
        try {
            const resp = await fetch(AREAS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error('fetch did not succeed', e);
        }
    }
    
    put = async(area) => {
        try {
            const resp = await fetch(`${AREAS_ENDPOINT}/${area.id}`, {
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
}

export const CallAPI = new CallsAPI();
