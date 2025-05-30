const User = require('../model/contactFormModel');

// Create a new user
exports.createContactForm = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ success: true,message:"Contact form sent Successfully", data: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message:"Failed to sent Contact Form ",error: error.message });
  }
};

// Get all users
exports.getAllContactForm = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, message:"Fetched all contact form ",data: users });
  } catch (error) {
    res.status(500).json({ success: false,message:"Failed to fetch", error: error.message });
  }
};

// Get a single user by ID
exports.getContactFormById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    res.status(200).json({ success: true, message:"Fetched contact form ", data: user });
  } catch (error) {
    res.status(500).json({ success: false,  message:"Failed to fetch",error: error.message });
  }
};

// Update a user
exports.updateContactForm = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ success: false, message: 'User not found' });

    res.status(200).json({ success: true, message:"Contact form Updated Successfully", data: updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, message:"Failed to fetch ",error: error.message });
  }
};

// Delete a user
exports.deleteContactForm = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ success: false, message: 'User not found' });

    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message:"Failed to delete",error: error.message });
  }
};
