import { useState } from "react";
import { RequestBar } from "./components/requestbar/RequestBar";
import TabsBar from "./components/tabbar/Tabbar";
import ResponseSection from "./components/response/responsesection/ResponseSection";
import RequestContent from "./components/requestcontent/RequestContent";
import Sidebar from "./components/sidebar/SideBar";

function App() {
  const [activeTab, setActiveTab] = useState("Body");
  const [url, setUrl] = useState("");
  const [method,setMethod] = useState("")

  const handleApiSelect = (api) => {
    setUrl(api.url);
    setMethod(api.method)
  };

  const handleSend = () => {
    console.log("Sending request to:", url);
  };

  return (
    <div className="d-flex">
    
      <Sidebar onSelect={handleApiSelect} />

    
      <div className="flex-grow-1 p-3">
        <RequestBar method={method} url={url} setUrl={setUrl} onSend={handleSend} />
        <TabsBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="my-3">
          <RequestContent activeTab={activeTab} />
        </div>

        <ResponseSection />
      </div>
    </div>
  );
}

export default App;
