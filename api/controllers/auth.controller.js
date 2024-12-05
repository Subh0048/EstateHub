import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

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

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userinfo } = user;
    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json(userinfo);
  } catch (error) {
    console.log("error occur");
    res.status(500).json({ message: "Failed to login" });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "logout successfuly" });
};

export const forgotpassword = async (req, res) => {
  const { email } = req.body;

  try {
    const User = await prisma.user.findUnique({
      where: { email },
    });
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }

    const age = 1000 * 60 * 60;
    const token = jwt.sign(
      {
        id: User.id,
        email: User.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: age }
    );

    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: token,
      },
    });
    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.MYEMAIL, pass: process.env.EMAILPASSWORD },
    });

    const mailOptions = {
      to: User.email,
      from: process.env.MYEMAIL,
      subject: "Password Reset",
      text: `You are receiving this email because you (or someone else) have requested to reset the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      ${process.env.CLIENT_URL}/auth/reset-password/${token}\n\n
      If you did not request this, please ignore this email.\n`,
    };

    res.status(201).json({ message: "Password Reset link sent successfully" });
  } catch (error) {
    res.status(500).json({ message: " Failed to send Password Reset link " });
  }
};

export const resetpassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token,process.env.SECRET_KEY);

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user || user.resetPasswordToken !== token) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Hash the new password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password and clear the reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null, // Clear the token after successful reset
      },
    });

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Error resetting password", error });
  }
};
