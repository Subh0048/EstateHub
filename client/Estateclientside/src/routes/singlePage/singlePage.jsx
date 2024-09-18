import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map"

function SinglePage() {
  let post = singlePostData;

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{post.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listvertical">

          </div>
          <p className="title">Sizes</p>
          <div className="listHorizal">

          </div>
          <p className="title">Nearby places</p>
          <div className="listHorizal">

          </div>
          <p className="title">Location</p>
          <div className="mapcontainer">
            <Map/>
          </div>
            
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
