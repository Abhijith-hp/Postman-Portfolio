import { useState } from "react";
import "./responsetabs.css";

const ResponseTabs = () => {
  const [activeTab, setActiveTab] = useState("Body");
  const tabs = ["Body", "Cookies", "Headers", "Test Results"];

  return (
    <div className="response-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`response-tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ResponseTabs;
