
import "./tabbar.css"
const TabsBar = ({activeTab,setActiveTab}) => {
const tabs = [
    "Docs",
    "Params",
    "Authorization",
    "Headers",
    "Body",
    "Scripts",
    "Settings"
  ];
  return (
    <ul className="nav nav-tabs postman-tabs justify-content-center">
     {tabs.map(tab=>(
        <li className =  "nav-item" key={tab}>
          <button
            className={`nav-link ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        </li>
     ))}
    </ul>
  );
};

export default TabsBar;
