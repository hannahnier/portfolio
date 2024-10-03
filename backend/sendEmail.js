import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { SENDER_PASSWORD, SENDER_EMAIL, EMAIL_TO } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
});

export const sendEmail = async (contactName, contactEmail, contactMessage) => {
  await transporter.sendMail({
    from: SENDER_EMAIL,
    to: EMAIL_TO,
    subject: "[hannahnier] Neue Nachricht von meinem Kontaktformular",
    text: `Hello`,
    html: `<b>Name</b>: ${contactName} <br><b>Email:</b> ${contactEmail}<br> <b>Message</b> ${contactMessage}`,
  });
};

export const sendConfirmationMail = async (
  contactName,
  contactEmail,
  contactMessage
) => {
  await transporter.sendMail({
    from: SENDER_EMAIL,
    to: contactEmail,
    subject: "[hannahnier] Danke für deine Nachricht / Thanks for your message",
    html: `<p> >>> For English version, please scroll down <<< </p>
    <br>
    <hr>
    <br>
    <h2>Hallo ${contactName},</h2>
    <p>Vielen Dank für deine Nachricht über mein Kontaktformular. Ich habe die Nachricht erhalten und werde sie in Kürze beantworten.</p>
    
    <h3>Deine Nachricht:</h3>
    <b>Name</b>: ${contactName} <br>
    <b>Email</b>: ${contactEmail} <br>
    <b>Nachricht</b>: ${contactMessage} <br>
    
    <br>
    <p>Viele Grüße<br>Hannah</p>
    <br>

    <hr>
    <br>
    <h2>Dear ${contactName},</h2>

    <p>Thank you for your message via my contact form. I have received the message and will get back to you shortly.</p>

    <h3>Your message:</h3>
    <b>Name</b>: ${contactName} <br>
    <b>Email</b>: ${contactEmail} <br>
    <b>Message</b>: ${contactMessage} <br>
    
    <br>
    <p>Best regards<br>Hannah</p>
`,
  });
};
