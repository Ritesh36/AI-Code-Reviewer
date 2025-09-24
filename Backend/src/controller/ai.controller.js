const aiService = require('../services/ai.service');

exports.reviewCode = (req, res) => {
  const { code } = req.body;
  // Dummy response for testing
  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }
  res.json(`Review for your code: ${code}`);
};