import { sendEmail } from "./sendEmail.js";

export const sendForm = async (req, res, next) => {
  try {
    await sendEmail()
      .then(() => res.status(200).json({ msg: "message was sent" }))
      .catch((e) => next(e));
  } catch (e) {
    next(e);
  }
};
