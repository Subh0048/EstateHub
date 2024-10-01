import "./Profile.scss";
import List from "../../components/list/List";
import Chat from "../../components/Chat/Chat";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Profile() {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
       const res = await apiRequest.post("/auth/logout");
      localStorage.removeItem("user")
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
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>Username: subham sahu</span>
            <span>
              E-mail:<b>subhamsahu@gmail.com</b>
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
