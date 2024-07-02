import { sendEmail } from "./sendEmail.js";

export const sendForm = async (req, res, next) => {
  const { contactName, contactEmail, contactMessage } = req.body;
  try {
    await sendEmail(contactName, contactEmail, contactMessage)
      .then(() => res.status(200).json({ msg: "message was sent" }))
      .catch((e) => next(e));
  } catch (e) {
    next(e);
  }
};
