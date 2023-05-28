
const os = require('os');

// arch()  cpu architecture
console.log(os.arch()); // x64 bit

// platform()
// console.log(os.platform());

if(os.platform() === 'darwin')
{
    console.log('You are on a mac');
}
else if (os.platform() === 'win32')
{
    console.log('you are on a windows');
}
else
{
    console.log('You are on a linux');
}

// cpus()
// console.log(os.cpus());


// freemem() free memory in system

console.log(os.freemem());

console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

//  totalmem()

console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024 } GB`);

// homedir
console.log(os.homedir());

// uptime
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60 ) % 24;
const mins = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(`Uptime: ${days} days ${hours} hours ${mins} mins ${seconds} seconds`);


// hostname()
console.log(os.hostname());








