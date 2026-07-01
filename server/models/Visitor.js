const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    purpose: { type: String, required: true },
    hostName: { type: String, required: true },
    hostEmail: { type: String, required: true },
    status: { type: String, default: 'pending', enum: ['pending', 'approved', 'denied'] },
    qrCode: { type: String },
    passCode: { type: String, unique: true },
    entryTime: { type: Date },
    exitTime: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Visitor', visitorSchema);