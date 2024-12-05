import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer"

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to getusers" });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to getuser" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  let updatepassword = null;
  try {
    if (password) {
      updatepassword = await bcrypt.hash(password, 10);
    }

    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...inputs,
        ...(updatepassword && { password: updatepassword }),
        ...(avatar && { avatar }),
      },
    });

    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to updateuser" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  try {
    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to deleteuser" });
  }
};

export const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId;

  try {
    const savedPost = await prisma.savePost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId,
        },
      },
    });

    if (savedPost) {
      await prisma.savePost.delete({
        where: {
          id: savedPost.id,
        },
      });
      res.status(200).json({ message: "Post removed from saved list" })
    } else {
      await prisma.savePost.create({
        data: {
          userId: tokenUserId,
          postId,
        },
      });
      res.status(200).json({ message: "Post saved" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete users!" });
  }
};

export const profilePosts = async (req, res) => {
  const tokenUserId = req.params.userId;
  try {
    const userPosts = await prisma.post.findMany({
      where: { userId: tokenUserId },
    });

    const saved = await prisma.savePost.findMany({
      where:{userId:tokenUserId},
      include:{
        post:true,
      }


    });

    const savedposts = saved.map((item)=>item.post)
    res.status(200).json({userPosts,savedposts});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to get profileposts" });
  }
};

export const notification = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const number = await prisma.chat.count({
      where: {
        userIDs: {
          hasSome: [tokenUserId],
        },
        NOT: {
          seenBy: {
            hasSome: [tokenUserId],
          },
        },
      },
    });
    res.status(200).json(number);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to get profileposts" });
  }
};
export const sendmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    
    const transporter = nodemailer.createTransport({
      service: "gmail", // or another email service
      auth: {
          user: process.env.MYEMAIL, // Your email
          pass: process.env.EMAILPASSWORD,  // Your email password
      },
  });

  const mailOptions = {
    from: email,
    to:process.env.STOREMAIL, // Where you want to receive emails
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
};
await transporter.sendMail(mailOptions);

    
    res.status(200).json({message:"email send successfully"});
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({  error: `Failed to send email. Details: ${error.message}` });
  }
};
