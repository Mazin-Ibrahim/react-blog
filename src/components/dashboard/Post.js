import React, { useState } from "react";
import EditPost from "./EditPost";
import ShowPost from "./ShowPost"
const Post = (props) => {
 const [displayEditForm,setDisplayEditForm] = useState(false)
 const [post,setPost] = useState(props.post)
    
    const updatePostAfterSubmit = (postAfterUpdate) =>{
      setPost(postAfterUpdate);
    }
    const colseDisplayEdit = () =>{
        setDisplayEditForm(false)
    }
    const deletePostHere = (id) => {
        props.deletePost(id)
    }

    const cutPostBody = (body) =>{
        return body.slice(0,100)
    }
    
   return (
     <>
       <div className="my-4">
         {displayEditForm && (
           <EditPost
             setCloseDisplayEditForm={colseDisplayEdit}
             post={post}
             updatePostAfterSubmit={updatePostAfterSubmit}
           ></EditPost>
         )}
       </div>
       <div className="p-4 shadwo-md bg-white mt-2 rounded">
         <p className="font-bold text-xl text-gray-600 my-2">
           {post.title}
         </p>
         {cutPostBody(post.body)}...
         <div className="border-t mt-2 p-4 flex items-center">
           <button
             onClick={() => deletePostHere(post.id)}
             className="bg-red-500 text-white px-2 py-1  font-semibold shadow rounded mx-4"
           >
             Delete
           </button>
           <button
             onClick={() => setDisplayEditForm(true)}
             className="bg-green-500 text-white px-4 py-1  font-semibold shadow rounded mx-4"
           >
             Edit
           </button>
           <div className="mt-1 mx-2">
             <ShowPost post={post}></ShowPost>
           </div>
         </div>
       </div>
     </>
   );
}

export default Post;