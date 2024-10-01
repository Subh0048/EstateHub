import "./Profile.scss";
import List from "../../components/list/List";
import Chat from "../../components/Chat/Chat";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {

  const{updateUser,currentUser} =useContext(AuthContext)
  const navigate = useNavigate();

  

 

  const handleLogout = async () => {
    try {
       await apiRequest.post("/auth/logout");
      updateUser(null)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Profilepage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>user information</h1>
           
            <button>update profile</button>
           
           
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar||"/noavatar.jpg"}
                alt=""
              />
            </span>
            <span>Username:<b>{currentUser.username}</b></span>
            <span>
              E-mail:<b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>create new post</button>
          </div>
          <List />
          <div className="title">
            <h1>saved Lists</h1>
            <div>
                
            </div>
          </div>
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">

            <Chat/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
