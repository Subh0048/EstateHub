import "./Profile.scss";
import List from "../../components/list/List";

function Profile() {
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
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default Profile;
