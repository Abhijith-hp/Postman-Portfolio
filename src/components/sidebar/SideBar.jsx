import { apiList } from "./apiList";

const Sidebar = ({ onSelect }) => {
  return (
    <div
      className="border-end p-2"
      style={{
        width: "260px",
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "#f8f9fa"
      }}
    >
      <input
        type="text"
        className="form-control form-control-sm mb-3"
        placeholder="Search APIs"
      />

      <ul className="list-unstyled">
        {apiList.map((api) => (
          <li
            key={api.name}
            className="p-2 rounded mb-1 api-item"
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(api)}
          >
            <span
              className={`badge me-2 ${
                api.method === "GET" ? "bg-success" : "bg-warning"
              }`}
            >
              {api.method}
            </span>
            <span className="fw-semibold">{api.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
