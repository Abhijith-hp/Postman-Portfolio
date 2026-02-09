import { useState } from "react";
import { RequestBar } from "./components/requestbar/RequestBar";
import TabsBar from "./components/tabbar/Tabbar";
import ResponseSection from "./components/response/responsesection/ResponseSection";
import RequestContent from "./components/requestcontent/RequestContent";

function App() {
  const [activeTab, setActiveTab] = useState("Body");

  const handleSend = (url) => {
    console.log("Sending GET to:", url);
  };

  return (
    <div className="container mt-4">
      <RequestBar onSend={handleSend} />

      <TabsBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="my-3">
        <RequestContent activeTab={activeTab} />
      </div>

      <ResponseSection />
    </div>
  );
}

export default App;
