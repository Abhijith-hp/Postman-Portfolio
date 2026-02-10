import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const RequestContent = ({ activeTab }) => {

  const {register,handleSubmit,formState:{errors}} = useForm()
  const {setAccessToken} = useContext(AuthContext)

   const onSubmit = (data) => {
    console.log("Authorization Form Data:", data);
  };

  const changeAccessToken = (data) => {

    setAccessToken(data.accessToken)
    console.log("Token set:", data.accessToken);
  }
  return (
    <div
      className="border rounded p-3 bg-white"
      style={{ minHeight: "180px" }}
    >
      {activeTab === "Body" && (
        <textarea
          className="form-control"
          rows={6}
          placeholder="Enter request body here..."
        />
      )}

      {activeTab === "Authorization" && (
  <div className="d-flex justify-content-center mt-3">
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%", maxWidth: "420px" }}
    >
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Enter username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <small className="text-danger">Username is required</small>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Reason to Visit</label>
        <textarea
          className="form-control form-control-sm"
          rows={3}
          placeholder="Why are you calling this API?"
          {...register("reasonToVisit", { required: true })}
        />
        {errors.reasonToVisit && (
          <small className="text-danger">
            Reason to visit is required
          </small>
        )}
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary btn-sm">
          Authenticate
        </button>
      </div>
    </form>
  </div>
)}

{activeTab === "Headers" && (
  <div className="d-flex justify-content-center mt-3">
    <form
      onSubmit={handleSubmit(changeAccessToken)}
      style={{ width: "100%", maxWidth: "420px" }}
    >
      <div className="mb-3">
        <label className="form-label">Access Token</label>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Paste access token"
          {...register("accessToken", { required: true })}
        />
        {errors.username && (
          <small className="text-danger">Access token is required</small>
        )}
      </div>


      <div className="text-end">

         <button className="btn btn-primary btn-sm me-2">
          Edit
        </button>
        <button type="submit" className="btn btn-success btn-sm">
          Set
        </button>
      </div>
    </form>
  </div>
)}


      {activeTab !== "Body" && activeTab != "Authorization" &&  activeTab != "Headers" && (
        <div className="text-muted text-center mt-5">
          {activeTab} content goes here
        </div>
      )}
    </div>
  );
};

export default RequestContent;
