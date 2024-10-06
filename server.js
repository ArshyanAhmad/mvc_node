import { app } from "./app.js";
import { connectDB } from "./db/db.js";
import "dotenv/config";

connectDB() // database connection
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is running on port at ${PORT}`);
})
