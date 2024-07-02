import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const senderPassword = process.env.SENDER_PASSWORD;
const senderEmail = process.env.SENDER_EMAIL;
const emailTo = process.env.EMAIL_TO;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

export const sendEmail = async () => {
  const contactName = "x";
  const contactEmail = "x@x.de";
  const contactMessage = "kkkks";
  await transporter.sendMail({
    from: senderEmail,
    to: emailTo,
    subject: "[hannahnier] Neue Nachricht von meinem Kontaktformular",
    text: `Hello`,
    html: `<b>Name</b>: ${contactName}; <br><b>Email:</b> ${contactEmail}<br> <b>Message</b> ${contactMessage}`,
  });
};
