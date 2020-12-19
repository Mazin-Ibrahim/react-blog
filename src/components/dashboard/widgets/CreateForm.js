import axios from 'axios'
import swal from 'sweetalert'
import React, { useState } from "react";
const CreateForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
   const token = localStorage.getItem("token");
    const handelSubmit = (e) =>{
        e.preventDefault();
        const post = {title:title,body:body}
        axios.post("http://127.0.0.1:8000/api/user/posts/store", post, {
          headers: {
            Authorization: "Bearer " + token,
          },
        }).then((response) =>{
            
            swal({
              title: "Post",
              text: "Post Has Been Created",
              icon: "success",
            }).catch((message) =>{
             
            });
        });
    }

    return (
      <>
        <div className="container mx-auto mt-10">
          <div className="flex">
            <div className="w-1/2 mx-auto">
              <div className="bg-white p-4 shadow-md">
                <form onSubmit={handelSubmit}>
                  <div>
                    <div className="my-1 font-bold text-lg text-gray-700">
                      Title
                    </div>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} className="px-2 py-1 w-full bg-gray-200" />
                  </div>
                  <div className="mt-4">
                    <div className="my-1 font-bold text-lg text-gray-700">
                      Body
                    </div>
                    <textarea
                     value={body}
                     onChange={(e) => setBody(e.target.value)}
                      rows="4"
                      cols="50"
                      className="px-2 py-1 w-full bg-gray-200"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                     <button className="bg-blue-600 text-white font-bold px-3 py-1 rounded shadow">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default CreateForm;