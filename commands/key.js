const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API key '.green + 'https://nomics.com',
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);
    if (key) {
      console.log('API key set successfully'.blue);
    }
  },

  show() {
    console.log('Hell from show!');
  },

  remove() {
    console.log('Hell from remove!');
  },
};

module.exports = key;
