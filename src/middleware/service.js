// var baseUrl = 'https://localhost:44304/'
var baseUrl = 'http://localhost:53085/'

import axios from 'axios';

class Service {

    async getEndpoint(url, params) {
        url = baseUrl + url;
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