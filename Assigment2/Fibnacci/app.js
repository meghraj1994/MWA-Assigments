const child_process = require('child_process');
console.log('Start app');
const newProcess = child_process.spawn('node', ['computation/fibnacci.js'], {
  stdio: 'inherit',
});
console.log('App End');
