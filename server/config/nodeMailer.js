import nodeMailer from "nodemailer";
import {
  fifthFree,
  fifthPrem,
  fourthFree,
  fourthPrem,
  oneFree,
  onePrem,
  thirdFree,
  thirdPrem,
  twoFree,
  twoPrem,
} from "../utils/emails/email.js";
import dotenv from "dotenv";
dotenv.config();

const NodeMailer = async ({ name, email, level, plan }) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.MAILER_HOST,
    secureConnection: true,
    port: 465,
    auth: {
      user: process.env.GLO_RAISE_EMAIL,
      pass: process.env.GLO_RAISE_PASSWORD,
    },
  });

  let mail;
  switch (true) {
    case level === 1 && plan === "Free":
      mail = oneFree;
      break;
    case level === 1 && plan === "Premium":
      mail = onePrem;
      break;
    case level === 2 && plan === "Free":
      mail = twoFree;
      break;
    case level === 2 && plan === "Premium":
      mail = twoPrem;
      break;
    case level === 3 && plan === "Free":
      mail = thirdFree;
      break;
    case level === 3 && plan === "Premium":
      mail = thirdPrem;
      break;
    case level === 4 && plan === "Free":
      mail = fourthFree;
      break;
    case level === 4 && plan === "Premium":
      mail = fourthPrem;
      break;
    case level === 5 && plan === "Free":
      mail = fifthFree;
      break;
    case level === 5 && plan === "Premium":
      mail = fifthPrem;
      break;
    default:
      mail = "";
      break;
  }

  const info = await transporter.sendMail({
    from: `Glo-Raise <${process.env.GLO_RAISE_EMAIL}>`,
    to: email,
    subject: "Glo_Raise Assessment",
    html: mail({ name }),
  });

  console.log(`Message sent: ${info.messageId}`);
};

export default NodeMailer;
