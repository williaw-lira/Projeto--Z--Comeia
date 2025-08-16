import fastify from "fastify";
import path from "path";
import { fileURLToPath } from "url";
import fastifyStatic from "@fastify/static";

import routes from "./Routers/InicioRouter.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify({ logger: true });

app.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: "/",
});

app.register(routes);

app.listen({ port: 3003 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(` rodando em ${address}`);
});
