import { sendEmail } from "./sendEmail.js";

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
  console.log("controller.js: req.body.contactName:", req.body.contactName);
  console.log("controller.js: req.body.contactEmail:", req.body.contactEmail);
  console.log(
    "controller.js: req.body.contactMessage:",
    req.body.contactMessage
  );

  try {
    await sendEmail(contactName, contactEmail, contactMessage)
      .then(() => res.status(200).json({ msg: "message was sent" }))
      .catch((e) => next(e));
  } catch (e) {
    console.log("controller.js: error in catch block: ", e);
    next(e);
  }
};
