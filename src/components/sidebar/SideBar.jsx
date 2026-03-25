import { useState } from "react";
import { apiList } from "./apiList";
import "./sidebar.css";

const methodColors = {
  GET: "method-get",
  POST: "method-post",
  PUT: "method-put",
  DELETE: "method-delete",
  PATCH: "method-patch",
};

const Sidebar = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [selectedApi, setSelectedApi] = useState(null);
  const [isCollectionOpen, setIsCollectionOpen] = useState(true);

  const filtered = apiList.filter((api) =>
    api.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (api) => {
    setSelectedApi(api.name);
    onSelect(api);
  };

  return (
    <div className="sidebar">
      {/* Sidebar header */}
      <div className="sidebar-header">
        <span className="sidebar-title">Collections</span>
        <button className="sidebar-icon-btn" title="New Collection">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <svg className="search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="sidebar-search-input"
          placeholder="Search APIs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Collection tree */}
      <div className="sidebar-collections">
        <div role="button" tabIndex={0} className="collection-item" onClick={() => setIsCollectionOpen(!isCollectionOpen)} onKeyDown={(e) => e.key === 'Enter' && setIsCollectionOpen(!isCollectionOpen)}>
          <svg
            className={`chevron ${isCollectionOpen ? "open" : ""}`}
            width="10" height="10" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="3"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <svg className="folder-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
          </svg>
          <span className="collection-name">Portfolio APIs</span>
          <span className="collection-count">{apiList.length}</span>
        </div>

        {isCollectionOpen && (
          <ul className="api-list">
            {filtered.map((api) => (
              <li
                role="button"
                tabIndex={0}
                key={api.name}
                className={`api-item ${selectedApi === api.name ? "active" : ""}`}
                onClick={() => handleSelect(api)}
                onKeyDown={(e) => e.key === 'Enter' && handleSelect(api)}
              >
                <span className={`method-badge ${methodColors[api.method] || "method-get"}`}>
                  {api.method}
                </span>
                <span className="api-name">{api.name}</span>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="api-item empty">No matching APIs</li>
            )}
          </ul>
        )}
      </div>

      {/* Bottom section */}
      <div className="sidebar-footer">
        <div className="env-selector">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          <span>No Environment</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
