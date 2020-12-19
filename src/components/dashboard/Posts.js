import React, { useState, useEffect } from "react";
import Post from './Post'
import axios from "axios";
import swal from "sweetalert";
 

const Posts = (props) => {
   const [posts,setPosts] = useState([])
    const allPosts = props.posts;
   
    useEffect(() => {
      setPosts(allPosts);
    }, [allPosts]);
    const token = localStorage.getItem("token");
    const deletPost = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/user/posts/delete/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        }).then((response) =>{
          swal({
            title: "Post",
            text: "Post Has Been Deleted",
            icon: "success",
          });
          // here can delete post without refresh the page
          const newPosts = posts.filter((post) => post.id !==id)
          setPosts(newPosts);
            
        }).catch((err) =>{
            alert("err")
        });
    };
   return (
     <>
       {posts.map((post) => {
         return <Post deletePost={deletPost} key={post.id} post={post}></Post>;
       })}
       
     </>
   );
}
export default Posts;