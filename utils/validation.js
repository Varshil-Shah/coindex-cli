const validation = {
  isRequired(value) {
    return value === '' ? 'This value is required' : true;
  },
};

module.exports = validation;
