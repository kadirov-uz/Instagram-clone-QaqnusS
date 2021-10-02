import React, { useState} from "react";
import "./Post.css";
import { BsThreeDots } from "react-icons/bs";

function Post({accountImage, posts}) {
  const  [ previewInfo, setPreviewInfo] = useState(null)
  const handlePreview = () => {
    setPreviewInfo(posts)
  }
  return (
    <div className="post">
      <div className="post_head">
        <img
          src={accountImage}
          alt=""
          onMouseOver={handlePreview}
          onMouseOut={() => setPreviewInfo(null)}
        />
      {previewInfo ?   <div className="preview">
        {previewInfo?.map(image => (
          <img src={image} alt=""></img>
        ))}
      </div> : <></>
    }
        <p>Someone</p>
        <BsThreeDots />
      </div>
      <img
        className="post_image"
        src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
  );
}

export default Post;
