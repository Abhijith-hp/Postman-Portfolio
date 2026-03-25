import ResponseBody from "../responsebody/ResponseBody";
import ResponseTabs from "../responsetabs/ResponseTabs";
import "./responsesection.css";

const ResponseSection = ({ response, loading, responseTime }) => {
  const statusCode = response ? 200 : null;
  const statusText = response ? "OK" : null;
  const size = response ? new Blob([JSON.stringify(response)]).size : 0;

  return (
    <div className="response-section">
      {/* Response status bar */}
      <div className="response-status-bar">
        <span className="response-label">Response</span>

        {response && (
          <div className="response-meta">
            <span className="status-badge success">
              {statusCode} {statusText}
            </span>
            <span className="meta-item">
              <span className="meta-label">Time:</span>
              <span className="meta-value">{responseTime || 0} ms</span>
            </span>
            <span className="meta-item">
              <span className="meta-label">Size:</span>
              <span className="meta-value">{size} B</span>
            </span>
          </div>
        )}
      </div>

      <ResponseTabs />

      <div className="response-body-container">
        <ResponseBody response={response} loading={loading} />
      </div>
    </div>
  );
};

export default ResponseSection;
