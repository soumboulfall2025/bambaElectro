import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"
import "dotenv/config"

import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

import dotenv from "dotenv"
dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
})

// Exporter l'instance io si tu veux l’utiliser ailleurs
export { io }

const port = process.env.PORT || 4000

async function main() {
  try {
    await connectDB()
    await connectCloudinary()

    app.use(express.json())
    app.use(cors())

    // Routes API
    app.use("/api/user", userRouter)
    app.use("/api/product", productRouter)
    app.use("/api/cart", cartRouter)
    app.use("/api/order", orderRouter)

    app.get("/", (req, res) => {
      res.send("API Working")
    })

    // Gestion des sockets
    let adminSocketId = null

    io.on("connection", (socket) => {
      console.log("🟢 Nouvelle connexion socket :", socket.id)

      socket.on("register-admin", () => {
        adminSocketId = socket.id
        console.log("👑 Admin connecté :", adminSocketId)
      })

      socket.on("disconnect", () => {
        if (socket.id === adminSocketId) {
          adminSocketId = null
          console.log("👑 Admin déconnecté")
        }
      })
    })

    // Lancement serveur HTTP + WebSocket
    server.listen(port, () => {
      console.log("🚀 Server + WebSocket démarré sur le port : " + port)
    })
  } catch (error) {
    console.error("❌ Erreur au démarrage du serveur :", error)
  }
}

main()
