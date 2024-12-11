const { MailtrapClient } = require("mailtrap");
const dotenv = require('dotenv');
dotenv.config();


const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  endpoint:process.env.MAILTRAP_ENDPOINT
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "sweta raj patel",
};
console.log(mailtrapClient);

// const recipients = [
//   {
//     email: "swetarajpatel2803@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

  module.exports = {sender, mailtrapClient}
