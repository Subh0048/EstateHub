import { Link, useNavigate } from "react-router-dom";
import "./card.scss";
import apiRequest from "../../lib/apiRequest";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


function Card({ item }) {
  let post = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const [saved, setsaved] = useState(post.isSaved);

  const navigate = useNavigate();

  const handleSave = async () => {
    setsaved((prev) => !prev);
    if (!currentUser) {
      navigate("/login");
    }
    try {
      await apiRequest.post("/users/save", { postId:post.id });
      navigate(`/${post.id}`);
    } catch (err) {
      console.log(err);
      setsaved((prev) => !prev);
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt=" " />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">

           <Link to={`/${item.id}`}>
            <div className="icon">
              <img src="/save.png" alt=""  onClick={handleSave}
               style={{
                backgroundColor:saved ? "#fece51":"white",
              }}
              
              
              />
            </div>
            </Link>

            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
