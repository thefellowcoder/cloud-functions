let sendgridLib = require('../lib/sendgrid');

const API_KEY = '<YOUR-API-KEY>';

sendgridLib.init(API_KEY);
const resp = sendgridLib.sendEmail('smit.thakkar1@gmail.com',
    'thefellowcoder@gmail.com',
    'Test Email',
    'Sample text',
    '<p>yep, it works!<p>'
);
resp.then(data => console.log(data)); //should print { status: 200 }