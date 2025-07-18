require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

const allowedOrigins = [
  "http://localhost:5173",                 // local dev
  "https://week7assignment-vox4.onrender.com", // production
];

app.use(
    cors(
        {
            origin: (origin, cb) => {
                // Allow Postman/curl whoch send no origi
                if (!origin || allowedOrigins.includes(origin)) return
                    cb(null, true);
                    cb(new Error("Not allowed by CORS"));
            },
                credentials: true,
                methods: "GET,PUT,POST,DELETE",
                allowedHeaders: "Content-Type,Authorization",
        }
    ));
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serve running on http://localhost:${PORT}`));