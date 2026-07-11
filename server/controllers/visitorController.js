const Visitor = require("../models/Visitor");
const jwt = require("jsonwebtoken");

exports.createVisitor = async (req, res) => {
  try {
    const { name, phone, email, purpose, hostName, hostEmail } = req.body;

   const visitor = await Visitor.create({
  name,
  phone,
  email,
  purpose,
  hostName,
  hostEmail,
  status: "pending",
  createdBy: req.user.id,
});

const approvalToken = jwt.sign(
  { id: visitor._id },
  process.env.JWT_SECRET,
  { expiresIn: '12h' }
);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};