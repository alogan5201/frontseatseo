const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const nodemailer = require("nodemailer")
const log = function (request, response, next) {
	console.log(`${new Date()}: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
	console.log(request.body); // make sure JSON middleware is loaded before this line
	next();
}
express()
.use(express.json())
.use(express.urlencoded( { extended: false } ))
.use(log)
.post("/ajax/email", function(request, response) {
  // create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "drewthomaslogan5201@gmail.com", // this should be YOUR GMAIL account
			pass: "k5opbSFL!" // this should be your password
		}
	});

	var textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
	var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${request.body.name} <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.message}</p>`;
	var mail = {
		from: "your_account@gmail.com", // sender address
		to: "andrewthomaslogan@gmail.com", // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
		subject: "Mail From Contact Form", // Subject line
		text: textBody,
		html: htmlBody
	};

	// send mail with defined transport object
	transporter.sendMail(mail, function (err, info) {
		if(err) {
			console.log(err);
			response.json({ message: "message not sent: an error occured; check the server's console log" });
		}
		else {
			response.json({ message: `message sent: ${info.messageId}` });
		}
	});
})
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/landing', (req, res) => res.render('pages/landing'))
  .get('/cascade', (req, res) => res.render('pages/cascade'))
  .get('/test', (req, res) => res.render('pages/test'))
  .get('/videos', (req, res) => res.render('pages/videos'))
  .get('/services', (req, res) => res.render('pages/services'))
  .get('/who-we-help', (req, res) => res.render('pages/who-we-help'))
  .get('/seo', (req, res) => res.render('pages/seo'))
  .get('/advertisement', (req, res) => res.render('pages/advertisement'))
  .get('/ppc', (req, res) => res.render('pages/ppc'))
  .get('/directory-listings', (req, res) => res.render('pages/directory-listings'))
  .get('/social-media-marketing', (req, res) => res.render('pages/social-media-marketing'))
  .get('/content-marketing', (req, res) => res.render('pages/content-marketing'))
  .get('/web-design', (req, res) => res.render('pages/web-design'))
 .get('/contact', (req, res) => res.render('pages/contact'))
 .get('/company', (req, res) => res.render('pages/company'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
