module.exports = function(options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    function productURL(msg, respond) {
        if (msg.productId) {
            var res = "There is no product with id: " + msg.id;
            for (var i = 0; i < mockData.length; i++) {
                if (mockData[i].product_id == msg.productId) {
                    res = mockData[i].product_url;
                    break;
                }
            }
            respond(null, { result: res });
        } else {
            respond(null, { result: '' });
        }
    }


    function productName(msg, respond) {
        if (msg.productId) {
            var res = "There is no product with id: " + msg.id;
            for (var i = 0; i < mockData.length; i++) {
                if (mockData[i].product_id == msg.productId) {
                    res = mockData[i].product_name;
                    break;
                }
            }
            respond(null, { result: res });
        } else {
            respond(null, { result: '' });
        }
    }
    //To DO: add the pattern functions and describe the logic inside the function

}