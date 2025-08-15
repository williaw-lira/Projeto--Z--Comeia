import fastify from 'fastify'
import 'dotenv/config'

const app = fastify({
    logger: true

});



const port = Number( process.env.PORT )|| 3003;

app.listen({port},(err, address)=>{
    let anddress = port;

    if(err){
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)

})