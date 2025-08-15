import fastify from 'fastify'
import 'dotenv/config'

const app = fastify({
    logger: true

});

const port = Number( process.env.PORT )|| 3003;


app.listen()