
import EditForm from './widgets/EditForm'
const EditPost = (props) => {
 const close = () => {
   props.setCloseDisplayEditForm();
 };
 
  return (
    <>
      <div className="flex items-center justify-between  bg-white px-4 p-4">
        <div className="md:w-3/4">
          <EditForm
            updatePostAfterSubmitEditPost={props.updatePostAfterSubmit}
            post={props.post}
          ></EditForm>
        </div>
        <div className="md:w-1/3 mb-4">
          <button
            onClick={close}
            className="bg-red-800 px-3 py-2 font-bold text-white rounded"
          >
            colse
          </button>
        </div>
      </div>
    </>
  );
}

export default EditPost;