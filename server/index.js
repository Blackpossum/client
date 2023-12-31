import  express  from "express";
import * as dotenv from "dotenv";
import cors from "cors";


//routes
import dalleRoutes from './routes/dalle.routes.js';


dotenv.config();

const app = express();
// cors is a midleware
app.use(cors());
app.use(express.json({limit: "50mb"}))  // set payload limit that we can set

// consume route as a midleware 
app.use('/api/v1/dalle',dalleRoutes);



// create demo raw 
app.get('/', (req,res) => {
    res.status(200).json({ message : "hello from DALL.E" })
});

app.listen(8080, ()=> console.log("server is running on port 8080"))
