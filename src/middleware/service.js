import axios from 'axios';

class Service {

    async getEndpoint(url, params) {
        var data = await axios.get(url, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return data;
    }
}
export default new Service()