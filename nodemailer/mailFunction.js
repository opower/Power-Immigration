const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'power.immigration.booking@gmail.com',
    pass: '3:TD9`R4An^tw64W'
  }
});

const sendMail = function(data) {
  
  var mailOptions = {
    from: 'power.immigration.booking@gmail.com',
    to: 'oliviapower.02@gmail.com',
    subject: "A Consultaion Has Been Requested!",
    text: `A client has requested`,
    html:`<div style="padding:.5rem; background-color:#7be3d2; font-family:Roboto; color:white; text-align:center"><h1>Power Immigration & Consulting</h1></div>
    <div style="padding:2rem; background-color:#f2f2f2; font-family:Roboto; color:black">
    <h2>Client Information</h2>
    <h3>First Name: ${data.fName}<br/></h3>
    <h3>Last Name: ${data.lName}<br/></h3>
    <h3>Email: ${data.email}<br/></h3>
    <h3>Phone: ${data.phone}<br/></h3>
    <h3>Date of Birth: ${data.dob}<br/></h3>
    <h3>Citizenship: ${data.cit}<br/></h3>
    <h3>Residency: ${data.res}</h3>
    <h3>Status: ${data.status}<h3>
    <h3>Description of Case: ${data.desc}</h3>
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