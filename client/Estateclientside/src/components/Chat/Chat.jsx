
import { useState } from "react";
import "./Chat.scss";
function Chat() {

  const[chat,setchat] =useState(true)


  return (
    <div className="chat">
      <div className="messages">
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>subham sahu</span>
          <p>Lorem Impedit....</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>subham sahu</span>
          <p>Lorem Impedit....</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>subham sahu</span>
          <p>Lorem Impedit....</p>
        </div>
        

        
      </div>

      

      { chat && (<div className="chatbox">
        <div className="top">
            <div className="user">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                subham sahu
            </div>
            <span className="close" onClick={()=>setchat(null)}>X</span>
        </div>
        <div className="center">
            <div className="chatmessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            
            <div className="chatmessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea ></textarea>
            <button>send</button>


        </div>
      </div>)}
    </div>
  );
}

export default Chat;
