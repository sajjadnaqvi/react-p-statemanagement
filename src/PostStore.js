import React, { createContext, useState } from "react";

const PostStore = createContext();

export const PostStoreProvider = ({children}) => {
    const [postList, setPostList] = useState( [
        {
          items : "Milk",
          price : "40",
          quantity : "8",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " 
        },
        {
          items : "Bread",
          price : "20",
          quantity : "8",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " 
        },
        {
          items : "Eggs",
          price : "10",
          quantity : "82",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " 
        },
        {
          items : "Yougart",
          price : "30",
          quantity : "18",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " 
        }
      ]);
  const [selectedPostId,setSelectedPostId] = useState(null);

  return(
      <PostStore.Provider
        value={{postList,setPostList,selectedPostId,setSelectedPostId}}
      >
          {children}
      </PostStore.Provider>
  );
};

export default PostStore;