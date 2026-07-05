// server/routes/visitors.js
const express = require("express");
const router = express.Router();
const { createVisitor, approveVisitor, denyVisitor } = require("../controllers/visitorController");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.post("/", auth, role("security"), createVisitor);
router.get("/approve/:token", approveVisitor);
router.get("/deny/:token", denyVisitor);

module.exports = router;