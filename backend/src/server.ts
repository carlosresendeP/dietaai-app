import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

import { routes } from "./routes";

const app = Fastify({logger: true});

app.setErrorHandler((error, request, reply) => {
  request.log.error(error);
  reply.status(400).send({message: error.message});
});

const start = async () => {
    app.register(cors)
    app.register(routes);


    try {
        await app.listen({
            // port: Number(process.env.PORT) || 3000,
            // host: process.env.HOST
            port: 3333,
            host: '0.0.0.0'
        })

        console.log(`Server is running on http://localhost:3333`)

    }catch (error) {
        console.error(error);
    }
}

start()