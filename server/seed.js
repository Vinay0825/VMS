require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const seedAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true
});

  const hashedPassword = await bcrypt.hash('admin123', 10);

  await User.create({
    fullName: 'Admin User',
    email: 'admin@vms.com',
    password: hashedPassword,
    role: 'admin',
  });

  console.log('Admin user created');
  process.exit();
};

seedAdmin();