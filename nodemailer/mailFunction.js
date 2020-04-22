const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'power.immigration.booking@gmail.com',
    pass: process.env.PASSWORD
  }
});

const sendMail = function(data) {
  var mailOptions = {
    from: 'power.immigration.booking@gmail.com',
    to: 'oliviapower.02@gmail.com',
    subject: "A New Appointment Has Been Requested!",
    text: `A client has requested`,
    html:`<div style="background-color:lightgrey; padding:2rem;">
    <h2><b>Client Information</b></h2>
    <h3>First Name: ${data.fName}<br/></h3>
    <h3>Last Name: ${data.lName}<br/></h3>
    <h3>Email: ${data.email}<br/></h3>
    <h3>Phone: ${data.phone}<br/></h3>
    <h3>Date of Birth: ${data.dob}<br/></h3>
    <h3>Citizenship: ${data.cit}<br/></h3>
    <h3>Residency: ${data.res}</h3>
    </div>`
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = { sendMail };