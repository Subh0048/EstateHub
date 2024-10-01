import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //HASH PASSWORD
    const hassedpassword = await bcrypt.hash(password, 10);
    console.log(hassedpassword);

    //CREATE A NEW USER AND SAVE IT IN OUR DB

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hassedpassword,
      },
    });
    console.log(newUser);

    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //CHECK IF THE USER EXIST OR NOT

    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "invalid credentials" });

    //CHECK THE PASSWORD MATCH OR NOT
    const ispasswordvalid = await bcrypt.compare(password, user.password);

    if (!ispasswordvalid)
      return res.status(401).json({ message: "invalid credentials" });

    //GENERATE COOKIE TOKEN AND SEND TO THE USER
    const age = 1000 * 60 * 60 * 24 * 7;

       const token =jwt.sign({
         id:user.id
      },process.env.SECRET_KEY,{expiresIn:age})

        const{ password:userPassword, ...userinfo} =user
    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json(userinfo );
  } catch (error) {
    console.log("error occur");
    res.status(500).json({ message: "Failed to login" });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({message:"logout successfuly"})
};
