## VMS Progress

### Done
- Express server + MongoDB Atlas connected
- User.js + Visitor.js models
- Seed: admin@vms.com created
- POST /api/auth/login → JWT working
- middleware/auth.js + middleware/role.js — tested ✅
- utils/emailService.js — Nodemailer sendMail() ✅
- routes/visitors.js — skeleton (POST /, GET /approve/:token, GET /deny/:token) ✅
- controllers/visitorController.js → createVisitor — visitor doc creation
  (server-hardcoded status: "pending") ✅ + approval JWT token generation ✅

### In progress
- controllers/visitorController.js → createVisitor
  - Next: build approve/deny links from approvalToken, call sendMail() to hostEmail,
    res.status(201).json(visitor)

### Next immediate step
- Finish createVisitor (email send + response)
- Then: approveVisitor / denyVisitor controller logic (verify token, update status)

### Stack
Node/Express/MongoDB Atlas/JWT/Nodemailer | Repo: github.com/Vinay0825/VMS
