
import "./tabbar.css"
const TabsBar = ({activeTab,setActiveTab}) => {
const tabs = [
    "Authorization",
    "Headers",
    "Body"
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
