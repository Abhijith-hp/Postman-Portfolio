import { useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./requestbar.css";

const methodColorMap = {
  GET: "var(--pm-get)",
  POST: "var(--pm-post)",
  PUT: "var(--pm-put)",
  DELETE: "var(--pm-delete)",
  PATCH: "var(--pm-patch)",
};

const RequestBar = ({ url, setUrl, onSend, method, loading }) => {
  useContext(AuthContext);

  useEffect(() => {
    if (!url) setUrl("http://localhost:8080/api/health");
  }, []);

  const handleSend = () => {
    onSend(url);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="request-bar-container">
      <div className="request-bar-inner">
        {/* Method selector */}
        <div
          className="method-select"
          style={{ color: methodColorMap[method] || "var(--pm-get)" }}
        >
          <span className="method-label">{method || "GET"}</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* URL input */}
        <input
          type="text"
          className="url-input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter request URL"
          spellCheck={false}
        />

        {/* Send button */}
        <button
          className={`send-btn ${loading ? "loading" : ""}`}
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? (
            <span className="spinner" />
          ) : (
            "Send"
          )}
        </button>

        {/* Save button */}
        <button className="save-btn" title="Save request">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export { RequestBar };
