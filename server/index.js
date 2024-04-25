import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import { findloginUser, loginUser, registerUser } from './routes/Routes.js';
// import { Form } from './routes/Routes.js';


dotenv.config();

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// app.post('/personDetails',Form);
app.post('/registerUserDetails',registerUser);

app.get('/findLoginUser',findloginUser);

app.post('/loginUser',loginUser);
// app.post('/user/new',newUser);


//rest api
app.get('/', (req, res) => {
    res.send("form test");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgRed.white);
})