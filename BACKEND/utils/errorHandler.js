const handleError = (res, error) => {
  console.error('Error:', error);
  res.status(400).json({ 
    error: error.message || 'An error occurred' 
  });
};

module.exports = {
  handleError
};