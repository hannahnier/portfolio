import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { SENDER_PASSWORD, SENDER_EMAIL, EMAIL_TO } = process.env;
console.log(SENDER_PASSWORD, SENDER_EMAIL, EMAIL_TO);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
});

export const sendEmail = async () => {
  const contactName = "x";
  const contactEmail = "x@x.de";
  const contactMessage = "kkkks";
  await transporter.sendMail({
    from: SENDER_EMAIL,
    to: EMAIL_TO,
    subject: "[hannahnier] Neue Nachricht von meinem Kontaktformular",
    text: `Hello`,
    html: `<b>Name</b>: ${contactName}; <br><b>Email:</b> ${contactEmail}<br> <b>Message</b> ${contactMessage}`,
  });
};
