require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

//microservice routes
import Auth from "./apiauth";
import Restaurant from "./apiauth/Restaurant";
import Food from "./apiauth/Food";
import Image from "./apiauth/Image";
import order from "./apiauth/order";
import Reviews from "./apiauth/Reviews";

//config
import googleAuthConfig from "./config/google.config";

//database connection
import ConnectDB from "./database/connection";
import passport from "passport";
import { Passport } from "passport";
const cuisine = express();

//application middlewares
cuisine.use(helmet());
cuisine.use(cors());
cuisine.use(express.urlencoded({ extended:false }));

cuisine.use(express.json());
//zomato.use(express.session({secret:"first"}));

cuisine.use(require('express-session')({ secret: 'userdata', resave: true, saveUninitialized: true }));
cuisine.use(passport.initialize());
cuisine.use(passport.session());

//passport Configuration
googleAuthConfig(passport);

//application Routess
cuisine.use("/auth", Auth)
cuisine.use("/restaurant",Restaurant);
cuisine.use("/food",Food);
cuisine.use("/image",Image);
cuisine.use("/order",order);
cuisine.use("/reviews",Reviews);

//console.log(process.env.GOOGLE_CLIENT_ID);
cuisine.get("/", (req, res) => { 
    res.json({ message: "Setup Success" });
 });
 cuisine.listen(5001, () => { 
    ConnectDB().then(() => 
    console.log("Server is Running at 5001"))
    .catch((err) => console.log(err)); 
});
