import prisma from "../lib/prisma.js";

export const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId ; // Ensure chatId is correctly passed
  const text = req.body.text;

  // Check if chatId is undefined or invalid
  if (!chatId) {
    return res.status(400).json({ message: "Chat ID is required!" });
  }

  try {
    // Find the chat that matches the ID and user
    const chat = await prisma.chat.findFirst({
      where: {
        id: chatId,
        userIDs: {
          hasSome: [tokenUserId],  // Check if the user is part of the chat
        },
      },
    });

    if (!chat) return res.status(404).json({ message: "Chat not found!" });

    // Create the message associated with the chat
    const message = await prisma.message.create({
      data: {
        text,
        chatId,  // This should now be properly defined
        userId: tokenUserId,
      },
    });

    // Update the chat with the last message and seenBy array
    await prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        seenBy: {
          push: tokenUserId,  // Add the user ID to seenBy
        },
        lastMessage: text,
      },
    });

    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add message!" });
  }
};
