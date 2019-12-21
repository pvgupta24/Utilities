var nodemailer = require('nodemailer');
var ejs = require('ejs')
var fs = require('fs');
var { data } = require('./data/data');
var { auth } = require('./auth')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth
});


async function sendMails(data) {
  fs.readFile('data/template.ejs', { encoding: 'utf-8' }, function (err, html) {
    if (err) {
      console.log(err);
    } else {
      for (const userData of data) {
        var mailOptions = {
          from: auth.user,
          to: userData.email,
          subject: userData.subject,
          
          // Data can be passed to ejs for rendering the required html
          html: ejs.render(html, {
            template_name: userData.name,
            template_message: userData.message
          })
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response + ' to ' + userData.email);
          }
        });
      }
    }
  });
}


sendMails(data);
