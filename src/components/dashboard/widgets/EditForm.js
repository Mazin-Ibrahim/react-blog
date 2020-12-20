import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

const EditForm = (props) =>{

   const [title,setTitle] = useState(props.post.title)
   const [body,setBody]   = useState(props.post.body)
   const [status,setStatus] = useState(props.post.status)

   
  const  handelSubmit = (e) => { 
     e.preventDefault();
     const post = {
       title:title,
       body:body,
       status:status
     }
   
       
     const id = props.post.id
     const token = localStorage.getItem("token");
     axios.put(`http://127.0.0.1:8000/api/user/posts/update/${id}`, post, {
       headers: {
         Authorization: "Bearer " + token,
       },
     }).then((response) =>{
     swal({
       title: "Post",
       text: "Post Has Been Updated",
       icon: "success",
     });
      props.updatePostAfterSubmitEditPost(response.data);
     });
   }
    return (
      <>
        <div className="p-4">
          <form onSubmit={handelSubmit}>
            <div className="font-bold my-1">Title</div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full bg-gray-300 p-2"
            ></input>
            <div className="font-bold my-1">Status</div>
            <select
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              className="w-full bg-gray-300 mt-2 p-1"
            >
              <option value="active">active</option>
              <option value="unActive">unActive</option>
            </select>
            <div className="font-bold my-1">Body</div>
            <textarea
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="w-full bg-gray-300 mt-2 p-4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-400 rounded mt-2 font-bold text-white px-2 py-2 shadow"
            >
              Update
            </button>
          </form>
        </div>
      </>
    );
}
export default EditForm;