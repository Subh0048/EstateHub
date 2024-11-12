
import DOMPurify from 'dompurify'
import "./singlepage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map";
import apiRequest from "../../lib/apiRequest"
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import {AuthContext} from '../../context/AuthContext'


function SinglePage() {
  let post = useLoaderData()
  
  // const{currentUser }=useContext(AuthContext)
  // const[saved,setsaved]= useState()
  

  const purify = DOMPurify.sanitize;// provide styling to desc 
  // const navigate = useNavigate()
  
  // const handleSave = async ()=>{
  //   setsaved((prev)=>!prev)
  //   if(!currentUser){
  //     navigate("/login")}
  //   try {
  //     await  apiRequest.post("users/save",{postId: post.id})
      

  //     }

      
  //   catch (err) {
  //     console.log(err);
  //     setsaved((prev)=>!prev)
      
      
  //   }
  // }

  
  

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
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{__html:purify(post.postDetail.desc)}}></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
               {
                post.postDetail.utilities === "owner" ?(
                <p>owner is responsible</p>):(
                <p>Tenant is responsible</p>)
               }
              </div>
            </div>

            <div className="feature">
              <img src="./pet.png" alt="" />
              <div className="featureText">
                <span>pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="./fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
               <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>

          <p className="title"> Room size</p>
          <div className="sizes">
            <div className="size">
              <img src="./size.png" alt="" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="./bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="./bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>

          <p className="title">Nearby places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="./pet.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>


            <div className="feature">
              <img src="./fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
            
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/.chat.png" alt="" />
              send message
            </button>
            <button >
              <img src="./save.png" alt="" />
             <p>save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
