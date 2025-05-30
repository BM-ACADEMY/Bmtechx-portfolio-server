const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email address'],
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    isRead:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true, 
  }
);
module.exports = mongoose.model('ContactForm', ContactFormSchema);
