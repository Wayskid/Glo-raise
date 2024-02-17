import NodeMailer from "../config/nodeMailer.js";
import Founders from "../models/foundersModel.js";

export const getFOunderInfo = async (req, res) => {
  try {
    const { name, email } = req.body;

    const founder = await Founders.findOne({
      name,
      email,
    });

    res.status(201).json(founder);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const addFounder = async (req, res) => {
  try {
    const { name, email, founderInfo, assessmentInfo, score, level, plan } =
      req.body;

    const data = await Founders.create({
      name,
      email,
      founderInfo,
      assessmentInfo,
      score,
      level,
      plan,
    });

    if (plan === "Free") NodeMailer({ name, email, level, plan });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const send_report = async (req, res) => {
  try {
    const { name, email } = req.body;

    const founder = await Founders.findOne({
      name,
      email,
    });

    founder.plan = "Premium"
    await founder.save();

    NodeMailer({
      name: founder.name,
      email: founder.email,
      level: founder.level,
      plan: "Premium",
    });

    res.status(201).json(founder);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
