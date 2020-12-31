let sendgridLib = require('../lib/sendgrid');

const API_KEY = process.env.API_KEY;

exports.sendgridCF = async (req, res) => {
    //console.log(JSON.parse(req));
    sendgridLib.init(API_KEY);
    const resp = await sendgridLib.sendEmail('smit.thakkar1@gmail.com',
        'thefellowcoder@gmail.com',
        'Test Email',
        'Sample text',
        '<p>yep, it works!<p>'
    );
    console.log(resp);
    if (resp.status == 200) {
        res.send(`<h1>Email sent successfully</h1>`);
    }
    else {
        console.error(resp.err);
        res.send(`<h1>Failed to send message</h1>`);
    }

};