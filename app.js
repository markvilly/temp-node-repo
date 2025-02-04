const _ = require('lodash')
const {readFile} = require('fs')
const http = require('http')



// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.end('Welcome to Earth')
//     }
//     if(req.url === '/about') res.end('all you need to know about us.')
    
//     res.end(
//         `<h1>Oops!</h1>
//         <p>We cant find the page you are looking for</p>
//         <a href="/">Go back</a>`
//     )
// })

// server.listen('3000')

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)


// async file reading
// console.log('Starting the first task')
// readFile(`./content/first.txt`, 'utf8', (err, result)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(result)
//     console.log('completed first Task')
// })
// console.log('Starting next task')




// Eventloop with callbacks
console.log('First operation')

setTimeout(()=>{
    console.log('Second task')
}, 3000)

console.log('Other tasks')