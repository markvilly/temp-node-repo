const {readFile, writeFile} = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (error, result)=>{

    if(error){
        console.log(error)
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (error, result)=>{
        if(error){
            console.log(error)
            return 
        }

        const second = result
        writeFile('./content/result.txt',
            `Here are the results: ${first} & ${second}`,
            (error, result)=>{
                if(error){
                    console.log(error)
                    return
                }
                console.log('Done with the task')
            }


        )
    })
})

console.log('Start a new task?')

