import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./requestcontent.css";

const RequestContent = ({ activeTab }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAccessToken } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log("Authorization Form Data:", data);
  };

  const changeAccessToken = (data) => {
    setAccessToken(data.accessToken);
  };

  return (
    <div className="request-content">
      {activeTab === "Body" && (
        <div className="content-body">
          <div className="body-type-bar">
            <span className="body-type active">raw</span>
            <span className="body-type">form-data</span>
            <span className="body-type">binary</span>
            <span className="body-type">x-www-form-urlencoded</span>
            <span className="body-format-label">JSON</span>
          </div>
          <textarea
            className="body-editor"
            placeholder='{\n  "key": "value"\n}'
            spellCheck={false}
          />
        </div>
      )}

      {activeTab === "Authorization" && (
        <div className="content-form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="form-section-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Authentication</span>
            </div>

            <div className="field-group">
              <label className="field-label">Username</label>
              <input
                type="text"
                className="field-input"
                placeholder="Enter username"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="field-error">Username is required</span>
              )}
            </div>

            <div className="field-group">
              <label className="field-label">Reason to Visit</label>
              <textarea
                className="field-input field-textarea"
                rows={3}
                placeholder="Why are you calling this API?"
                {...register("reasonToVisit", { required: true })}
              />
              {errors.reasonToVisit && (
                <span className="field-error">Reason to visit is required</span>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="action-btn primary">
                Authenticate
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === "Headers" && (
        <div className="content-form-container">
          <form onSubmit={handleSubmit(changeAccessToken)} className="auth-form">
            <div className="form-section-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
              </svg>
              <span>Access Token</span>
            </div>

            <div className="field-group">
              <label className="field-label">Bearer Token</label>
              <input
                type="text"
                className="field-input mono"
                placeholder="Paste access token"
                {...register("accessToken", { required: true })}
              />
              {errors.accessToken && (
                <span className="field-error">Access token is required</span>
              )}
            </div>

            <div className="form-actions">
              <button type="button" className="action-btn secondary">Edit</button>
              <button type="submit" className="action-btn primary">Set Token</button>
            </div>
          </form>
        </div>
      )}

      {activeTab === "Params" && (
        <div className="content-table">
          <div className="table-header">
            <div className="table-cell check-cell">
              <input type="checkbox" className="custom-check" />
            </div>
            <div className="table-cell key-cell">Key</div>
            <div className="table-cell value-cell">Value</div>
            <div className="table-cell desc-cell">Description</div>
          </div>
          <div className="table-row">
            <div className="table-cell check-cell">
              <input type="checkbox" className="custom-check" />
            </div>
            <div className="table-cell key-cell">
              <input type="text" className="table-input" placeholder="Key" />
            </div>
            <div className="table-cell value-cell">
              <input type="text" className="table-input" placeholder="Value" />
            </div>
            <div className="table-cell desc-cell">
              <input type="text" className="table-input" placeholder="Description" />
            </div>
          </div>
        </div>
      )}

      {!["Body", "Authorization", "Headers", "Params"].includes(activeTab) && (
        <div className="content-empty">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          <span>{activeTab} — No content configured</span>
        </div>
      )}
    </div>
  );
};

export default RequestContent;
