import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RequestBar = ({ onSend }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl("http://localhost:8080/api/health");
  }, []);

  const handleSend = () => {
    onSend(url);
  };

  return (
    <div className="d-flex align-items-center border rounded p-2 bg-white shadow-sm">

      <select
        className="form-select form-select-sm me-2 text-success fw-semibold"
        style={{ maxWidth: "90px", backgroundColor: "#e8f5ee" }}
        disabled
      >
        <option>GET</option>
      </select>

      {/* URL Input */}
      <input
        type="text"
        className="form-control form-control-sm me-2"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      {/* Send Button */}
      <button
        className="btn btn-primary btn-sm px-4"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export { RequestBar };
