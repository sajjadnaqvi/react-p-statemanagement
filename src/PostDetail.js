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
       // data.postList.map((postitem)=>{
           // console.log(postitem.items)
       //     if(data.selectedPostId === postitem.items){
       //         console.log(postitem.items)
              //  setPostDetail(postitem);
        //    }
        //     });
    }
    
   
    
    if (data.selectedPostId=== null)//postDetail === null)
    {
        return <div> No Data Selected</div>
    }

    return( <div>
        { data.postList.map((postitem)=>{
            console.log("running")
            if(data.selectedPostId === postitem.items)
            {
                console.log(postitem.items);

                return(
                    <h1>{postitem.quantit}</h1>
                );
            }
        })
    }
       
    </div>
    );
  }

  export default PostDetail;