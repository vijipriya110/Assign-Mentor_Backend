import  express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./db.js";
import { taskRouter } from "./Routes/task.js";


//config the env
dotenv.config()

const app = express();
//port
const PORT = process.env.PORT
//middleware
app.use(express.json());
// app.use(cors());

//db connection 
dbConnection()

//routes

app.get("/",(req,res)=>{
    res.send("hi")
})
app.use("/task", taskRouter)

//server listner
app.listen(9090, ()=>console.log("server runnig in localhost", `${9090}`))
