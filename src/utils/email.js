// import Nodemailer from 'nodemailer';

function sendEmail(name, email, subject, body) {
  const mailOptions = {
    from: process.env.GMAIL_USER,  // email myself since I don't have the other person's creds
    to: process.env.GMAIL_USER,
    subject,
    text: `${name} sent you the following message from your portfolio. Email them back at ${email}.
    
    ${body}`
  };

  console.log(mailOptions);
  
  // SHOULD BE ON THE SERVER SIDE
  //
  // const transporter = Nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.GMAIL_USER,
  //     pass: process.env.GMAIL_PASS
  //   }
  // });
  //
  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
}

export default sendEmail;