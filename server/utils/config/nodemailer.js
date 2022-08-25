const nodemailer = require('nodemailer');

module.exports = class Email {
	constructor(user, url) {
		this.to = user.email;
		this.firstName = user.name.split(' ')[0];
		this.url = url; // any links
		this.from = `OLX_IITG <${process.env.EMAIL_FROM}>`;
	}

	newTransport() {
		if (process.env.NODE_ENV === 'production') {
			// using Sendgrid for sending real emails
			return nodemailer.createTransport({
				service: 'SendGrid',
				auth: {
					user: process.env.SENDGRID_USERNAME,
					pass: process.env.SENDGRID_PASSWORD,
				},
			});
		}

		return nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: process.env.EMAIL_PORT,
			auth: {
				user: process.env.EMAIL_USERNAME,
				pass: process.env.EMAIL_PASSWORD,
			},
		});
	}

	// Send the actual email
	async send(template, subject) {
		const mailOptions = {
			from: this.from,
			to: this.to,
			subject,
			html, // emails html
		};

		// 3) Create a transport and send email
		await this.newTransport().sendMail(mailOptions);
	}

	async sendWelcome() {
		// email to be sent when a user logins/SIgnups
		await this.send('welcome', 'Welcome to the OLX_IITG!');
	}
};
