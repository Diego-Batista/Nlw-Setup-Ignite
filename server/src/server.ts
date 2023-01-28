import Fastify from "fastify"
import cors from "@fastify/cors"
import { appRoutes } from "./routes"

const app = Fastify()

app.register(appRoutes)

app.register(cors, {
    // origin: ['http://localhost:300']
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running')
})