import { useContext, useState } from "react";
import "./Chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";

function Chat({ chats }) {
  const [chat, setchat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const{socket}= useContext(SocketContext);

  const handleopenchat = async (id, receive) => {
    try {
      const res = await apiRequest("/chats/" + id);
      setchat({ ...res.data, receive });
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const text = formdata.get("text");

    if (!text) return;

    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setchat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
    } catch (error) {
      if (error.response) {
        console.log("API Error:", error.response.data); // Response from server
        console.log("Status Code:", error.response.status); // Status code
      } else if (error.request) {
        console.log("No response received:", error.request); // No response received
      } else {
        console.log("Error setting up request:", error.message); // Error setting up the request
      }
    }
  };

  const testsocket = ()=>{
    socket.emit("test","hi from subham")
  }

  return (
    <div className="chat">

      <button onClick={testsocket}>test io</button>
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor: c.seenBy.includes(currentUser.id)
                ? "white"
                : "#fecd514e",
            }}
            onClick={() => handleopenchat(c.id, c.receive)}
          >
            <img src={c.receive.avatar || "/noavatar.jpg"} alt="" />
            <span>{c.receive.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>

      {chat && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <img src={chat.receive.avatar || "/noavatar.jpg"} alt="" />
              {chat.receive.username}
            </div>
            <span className="close" onClick={() => setchat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatmessage "
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left",
                }}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handlesubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
