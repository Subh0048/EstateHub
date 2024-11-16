import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = await apiRequest("/posts?" + query);
  return defer({
    postResponse:postPromise

  })
  
  
};



export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts")
  .catch((error) => {
    console.error("Failed to fetch profile posts:", error.response?.data || error.message);
    throw error; // Re-throw to ensure `defer` handles it correctly
  });

  
  const chatPromise = apiRequest("/chats")
  .catch((error) => {
    console.error("Failed to fetch chats:", error.response?.data || error.message);
    throw error;
  });
 
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
    
    
    
  });
};
