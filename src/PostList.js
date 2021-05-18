import React, { useContext } from "react";
import PostStore from "./PostStore";

const PostList = () =>{
    const data = useContext(PostStore);
   // console.log(data);
    
    
    
    return (<div>
      {data.postList.map((postitem,i)=>{
          return(
        <li key={i} className="list-group-item" onClick={()=>{
            data.setSelectedPostId(postitem.items)
            console.log(postitem.items);

        }}>
        {postitem.items}
        </li>
        );
      })}
      </div>);
  }

  export default PostList;
