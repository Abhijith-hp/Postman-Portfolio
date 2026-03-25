import "./tabbar.css";

const TabsBar = ({ activeTab, setActiveTab }) => {
  const tabs = ["Params", "Authorization", "Headers", "Body", "Pre-request", "Tests"];

  return (
    <div className="tabs-bar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabsBar;
