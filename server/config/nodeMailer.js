import nodeMailer from "nodemailer";
import { oneFree, onePrem } from "../utils/emails/email.js";
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
      mail = oneFree;
      break;
    case level === 2 && plan === "Premium":
      mail = oneFree;
      break;
    case level === 3 && plan === "Free":
      mail = oneFree;
      break;
    case level === 3 && plan === "Premium":
      mail = oneFree;
      break;
    case level === 4 && plan === "Free":
      mail = oneFree;
      break;
    case level === 4 && plan === "Premium":
      mail = oneFree;
      break;
    case level === 5 && plan === "Free":
      mail = oneFree;
      break;
    case level === 5 && plan === "Premium":
      mail = oneFree;
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
