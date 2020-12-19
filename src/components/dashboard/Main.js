import React, { useState,useEffect } from "react";
import Statics from './partial/Statics'
import Posts from './Posts'
import axios from 'axios'

const Main = () => {
    const [posts,setPosts] = useState([])
    
    const CreatePost = () =>{
      window.location.href = "/create/post"
    }
    useEffect(() => {
     
      const token = localStorage.getItem("token");
       const getPosts = async () => {
         await axios
           .get("http://127.0.0.1:8000/api/user/posts", {
             headers: {
               Authorization: "Bearer " + token,
             },
           })
           .then((response) => {
             const posts = response.data.data;
             setPosts(posts);
           })
           .catch((err) => {
             window.location.href = "/";
           });
       };
       getPosts();
    },[])
  return (
    <>
      <div>
        <div className="flex md:flex-row flex-col container mx-auto">
          <div className="md:w-3/4 mx-10">
            <div className="mt-8">
              <Posts posts={posts}></Posts>
            </div>
          </div>
          <div className="md:w-1/4 mt-8 mx-10">
            <Statics posts={posts}></Statics>
            <div className="text-center">
              <button onClick={() =>CreatePost()} className="mt-4 bg-gray-500 text-white rounded shadow px-3 py-2 font-bold uppercase">create post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;