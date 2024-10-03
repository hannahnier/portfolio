import { sendConfirmationMail, sendEmail } from "./sendEmail.js";

export const getUser = async (req, res, next) => {
  try {
    console.log("Ping-Request has happened");
    res.status(200).json({ msg: "server is running" });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

export const sendForm = async (req, res, next) => {
  const { contactName, contactEmail, contactMessage } = req.body;
  try {
    await sendEmail(contactName, contactEmail, contactMessage)
      .then(async () => {
        await sendConfirmationMail(contactName, contactEmail, contactMessage);
        return res
          .status(200)
          .json({ msg: "Message and confirmation email were sent" });
      })
      .catch((e) => next(e));
  } catch (e) {
    console.log("controller.js: error in catch block: ", e);
    next(e);
  }
};
