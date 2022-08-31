import express from "express"
import { PrismaClient } from "@db"
import { fetchedSuccessfully } from "@starter-project/api-response"
import cors from "cors"

const app = express()

app.use(cors())

const db = new PrismaClient()

db.$connect().then(() => {
  app
    .get("/api", (_, res) => {
      res.send({ message: "Welcome to api!" })
    })
    .get("/users", (_, res) => {
      db.user.findMany().then((users) => fetchedSuccessfully(res, users))
    })

  const port = process.env.PORT || 3333
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`)
  })
  server.on("error", console.error)
})
