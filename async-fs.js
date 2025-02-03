const {readFileSync, writeFileSync} = require('fs')


console.log('first task')
const first = readFileSync('./content/first.txt', 'utf8', ()=>{});
const second = readFileSync('./content/second.txt', 'utf8');

// console.log({first, second})

writeFileSync(
    './content/canadian-moose-challenge.txt',
    'Loose moose at the boot eh!',
    {flag: 'a'}
)

writeFileSync(
    './content/results-async2.txt',
    `Here are the results: ${first}, ${second}`
)

console.log(readFileSync('./content/result-sync.txt', 'utf8', (error, data)=>{
    if(error){
        console.error(error)
        return
    }
    console.log(data)
}))