import mongoose from 'mongoose';
import UserModel from '../models/User.model.js'




export const registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        const user = await new UserModel({name,email,password}).save();
        // res.send("data sent");
        res.status(201).send({ message: 'User registered successfully', user });


    } catch (error) {
        console.log("Error in backend",error);
        console.log("registaration failed");
        res.status(500).send({ message: 'Registration failed' });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'Email not found' });
        }

        // Compare the password provided by the user with the password stored in the database
        if (user.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        // If the passwords match, you can consider it a successful login

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
        });

    } catch (error) {
        console.log("Login failed", error);
        res.status(500).send({ message: "Login failed" });
    }
}

export const findloginUser = async (req, res) => {
    try {
        // const data = await UserModel.find({});
        const { name } = req.query;
        let users;

        if (name) {
            // Filter users by name if name parameter is provided
            users = await UserModel.find({ name });
        } else {
            // If name parameter is not provided, return all users
            users = await UserModel.find({});
        }
        // res.json(data);
        res.json(users);
    } catch (error) {
        console.error("Error finding users:", error);
        res.status(500).json({ success: false, message: "Failed to find users" });
    }
}
