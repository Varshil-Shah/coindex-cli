#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('key', 'Manage API key --- Get at https://nomics.com')
  .command('check', 'Get crypto coin information')
  .parse(process.argv);
