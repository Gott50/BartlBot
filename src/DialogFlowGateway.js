import request from 'request';

export default class DialogFlowGateway {
    static textRequest(query) {
        let headers = {
            'Authorization': 'Bearer 66fef4bc8f73454e9b5cd11dfc7d9c42',
            'Content-Type': 'application/json; charset=utf-8',
        };

        let options = {
            url: `https://api.dialogflow.com/v1/query?v=20170712&query=${query}&
            lang=en&sessionId=b1096f0a-ba57-08fe-de27-ae8cddf17eb7&timezone=Europe/Berlin`,
            method: 'GET',
            headers: headers,
        };

        return new Promise(function (resolve, reject) {
            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                    resolve(body)
                }else reject(error)
            }
            request(options, callback);
        })
    }
}