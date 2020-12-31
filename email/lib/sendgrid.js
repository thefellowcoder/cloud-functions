
function getMessage(to, from, subject, text, html) {
    return {
        to: to, //'test@example.com'
        from: from, //'test@example.com',
        subject: subject, //'Sending with SendGrid is Fun',
        text: text, //'and easy to do anywhere, even with Node.js',
        html: html //'<strong>and easy to do anywhere, even with Node.js</strong>',
    }
}

module.exports = {
    sgMail: null,
    init: function (apiKey) {
        this.sgMail = require('@sendgrid/mail');
        this.sgMail.setApiKey(apiKey); // set the api-key
    },
    sendEmail: async function (to, from, subject, text, html) {
        const sendgridMessage = getMessage(to, from, subject, text, html);
        const response = await this.sgMail
            .send(sendgridMessage)
            .then(() => {
                console.log('Email sent');
                return { status: 200 };
            })
            .catch((error) => {
                console.error(error);
                return { status: 500, err: error };
            });
        return response;
    }
}
