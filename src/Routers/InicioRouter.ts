import { FastifyInstance } from "fastify";

export default async function routes(app: FastifyInstance) {
  // Home
    app.get("/", async (req, res:any) => {
    return res.sendFile("../public/html/index.html");
    });


}
