import { useState } from "react";
import { RequestBar } from "./components/requestbar/RequestBar";
import TabsBar from "./components/tabbar/Tabbar";
import ResponseSection from "./components/response/responsesection/ResponseSection";
import RequestContent from "./components/requestcontent/RequestContent";
import Sidebar from "./components/sidebar/SideBar";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [activeTab, setActiveTab] = useState("Body");
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("");
  const [response, setResponse] = useState(null);

  const handleApiSelect = (api) => {
    setUrl(api.url);
    setMethod(api.method);
  };

  const handleSend = async (url) => {
    console.log("Sending request to:", url);

    const fakeResponse = {
      name: "Bharat Sharma",
      dob: "26/11/1992",
      gender: "Male",
      aadhaar_number: "3306 9998 1453",
      address: "Solan, Himachal Pradesh",
      skills: ["Java", "Spring Boot", "React"],
      experience: {
        backend: "2+ years",
        genai: "Hands-on",
      },
    };

    setTimeout(() => {
      setResponse(fakeResponse);
    }, 500);
  }; // ✅ handleSend properly closed

  return (
    <AuthProvider>
      <div className="d-flex">
        <Sidebar onSelect={handleApiSelect} />

        <div className="flex-grow-1 p-3">
          <RequestBar
            method={method}
            url={url}
            setUrl={setUrl}
            onSend={handleSend}
          />

          <TabsBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="my-3">
            <RequestContent activeTab={activeTab} />
          </div>

          <ResponseSection response={response} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
