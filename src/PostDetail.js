import React, { useContext, useState } from "react";
import PostStore from "./PostStore";

const PostDetail = () =>{
    const data = useContext(PostStore);
    const [postDetail, setPostDetail] = useState(null);

    if(data.selectedPostId === null)
    {
        console.log("empty ha");
    }
    else{
        data.postList.map((postitem)=>{
            if(data.selectedPostId === postitem.items){
                setPostDetail(postitem);
            }
             });
    }
    
    
    if (postDetail === null)
    {
        return <div> No Data Selected</div>
    }

    return( <div>
        <div>{postDetail.items}</div>
        <div>{postDetail.price}</div>
        <div>{postDetail.quantity}</div>
        <div>{postDetail.description}</div>

    </div>
    );
  }

  export default PostDetail;