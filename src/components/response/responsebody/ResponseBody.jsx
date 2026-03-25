import "./responsebody.css";

const syntaxHighlight = (json) => {
  if (!json) return "";
  const str = typeof json === "string" ? json : JSON.stringify(json, null, 2);
  return str.replace(
    /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls = "json-number";
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? "json-key" : "json-string";
      } else if (/true|false/.test(match)) {
        cls = "json-boolean";
      } else if (/null/.test(match)) {
        cls = "json-null";
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
};

const ResponseBody = ({ response, loading }) => {
  return (
    <div className="response-body">
      {loading && (
        <div className="response-loading">
          <div className="loading-bar">
            <div className="loading-bar-fill" />
          </div>
          <span>Sending request...</span>
        </div>
      )}

      {!loading && !response && (
        <div className="response-empty">
          <div className="empty-illustration">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
          </div>
          <p className="empty-title">Hit Send to get a response</p>
          <p className="empty-subtitle">Select an API from the sidebar and click Send</p>
        </div>
      )}

      {!loading && response && (
        <div className="json-viewer">
          <div className="line-numbers">
            {JSON.stringify(response, null, 2).split("\n").map((_, i) => (
              <div key={i} className="line-num">{i + 1}</div>
            ))}
          </div>
          <pre
            className="json-content"
            dangerouslySetInnerHTML={{ __html: syntaxHighlight(response) }}
          />
        </div>
      )}
    </div>
  );
};

export default ResponseBody;
