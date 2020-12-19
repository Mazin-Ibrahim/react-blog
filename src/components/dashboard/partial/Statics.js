 import React, { useState, useEffect } from "react";
const Statics = (props) => {
    const [active,setActive] = useState(0)
    const [unActive,setUnActive] = useState(0)

    const activePost = () => {
      const activePostsFilter = props.posts.filter(post => post.status === "active")
      setActive(activePostsFilter.length);
    }
    const UnActivePost = () => {
      const activePostsFilter = props.posts.filter(
        (post) => post.status === "unActive"
      );
      setUnActive(activePostsFilter.length);
    };
 
    useEffect(() =>{
      activePost();
      UnActivePost();
    })
    return (
      <>
        <div className="bg-white shadow-md p-2 rounded-md">
          <div className="flex justify-between items-center container mx-auto">
            <span className="font-bold text-gray-800 ">Active Post</span>
            <span>{active}</span>
          </div>
          <div className="flex justify-between items-center container mx-auto mt-8">
            <span className="font-bold text-gray-800 ">Un Active Post</span>
            <span>{unActive}</span>
          </div>
 
          <div className="flex justify-between items-center container mx-auto mt-8">
            <span className="font-bold text-gray-800 ">All Post</span>
            <span>{props.posts.length}</span>
          </div>
        </div>
      </>
    );
}

export default Statics;