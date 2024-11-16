import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const{currentUser} =useContext(AuthContext)
  const [socket, setsocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:4000"); // Initialize the socket connection
    setsocket(newSocket);

    // Cleanup on unmount
    return () => newSocket.close();
  }, []);

  useEffect(()=>{
    currentUser && socket?.emit("newuser",currentUser.id);

  },[currentUser,socket])

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
