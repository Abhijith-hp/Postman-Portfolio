import { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";
import { RequestBar } from "./components/requestbar/RequestBar";
import TabsBar from "./components/tabbar/Tabbar";
import ResponseSection from "./components/response/responsesection/ResponseSection";
import RequestContent from "./components/requestcontent/RequestContent";
import Sidebar from "./components/sidebar/SideBar";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [activeTab, setActiveTab] = useState("Body");
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(null);

  // Resizable panels
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [requestPaneHeight, setRequestPaneHeight] = useState(null);
  const [isDraggingSidebar, setIsDraggingSidebar] = useState(false);
  const [isDraggingResponse, setIsDraggingResponse] = useState(false);
  const mainContentRef = useRef(null);

  // Initialize request pane height
  useEffect(() => {
    if (mainContentRef.current && !requestPaneHeight) {
      const h = mainContentRef.current.offsetHeight;
      setRequestPaneHeight(Math.floor(h * 0.45));
    }
  }, [requestPaneHeight]);

  const handleApiSelect = (api) => {
    setUrl(api.url);
    setMethod(api.method);
    setResponse(null);
    setResponseTime(null);
  };

  const handleSend = async (sendUrl) => {
    setLoading(true);
    const startTime = Date.now();

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
      setResponseTime(Date.now() - startTime);
      setLoading(false);
    }, 500);
  };

  // Sidebar resize handlers
  const handleSidebarMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDraggingSidebar(true);
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const onMouseMove = (e) => {
      const newWidth = Math.max(200, Math.min(500, startWidth + e.clientX - startX));
      setSidebarWidth(newWidth);
    };

    const onMouseUp = () => {
      setIsDraggingSidebar(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [sidebarWidth]);

  // Response resize handlers
  const handleResponseMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDraggingResponse(true);
    const startY = e.clientY;
    const startHeight = requestPaneHeight;

    const onMouseMove = (e) => {
      if (!mainContentRef.current) return;
      const containerH = mainContentRef.current.offsetHeight;
      const newHeight = Math.max(120, Math.min(containerH - 100, startHeight + e.clientY - startY));
      setRequestPaneHeight(newHeight);
    };

    const onMouseUp = () => {
      setIsDraggingResponse(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [requestPaneHeight]);

  return (
    <AuthProvider>
      <div className="app-container">
        {/* Drag overlay to prevent selection during resize */}
        {(isDraggingSidebar || isDraggingResponse) && (
          <div className={`drag-overlay ${isDraggingResponse ? "horizontal" : ""}`} />
        )}

        {/* Header */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 100 }}>
          <div className="app-header">
            <div className="logo">
              <div className="logo-icon">P</div>
              <span>Postman Portfolio</span>
            </div>

          </div>
        </div>

        {/* Body below header */}
        <div className="app-body" style={{ marginTop: 48 }}>
          {/* Sidebar */}
          <div style={{ width: sidebarWidth, flexShrink: 0 }}>
            <Sidebar onSelect={handleApiSelect} />
          </div>

          {/* Sidebar resize handle */}
          <div
            role="separator"
            aria-label="Resize sidebar"
            tabIndex={0}
            className={`resize-handle-vertical ${isDraggingSidebar ? "active" : ""}`}
            onMouseDown={handleSidebarMouseDown}
          />

          {/* Main content */}
          <div className="main-content" ref={mainContentRef}>
            {/* Request pane */}
            <div className="request-pane" style={{ height: requestPaneHeight || "45%" }}>
              <RequestBar
                method={method}
                url={url}
                setUrl={setUrl}
                onSend={handleSend}
                loading={loading}
              />
              <TabsBar activeTab={activeTab} setActiveTab={setActiveTab} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <RequestContent activeTab={activeTab} />
              </div>
            </div>

            {/* Response resize handle */}
            <div
              role="separator"
              aria-label="Resize response panel"
              tabIndex={0}
              className={`resize-handle-horizontal ${isDraggingResponse ? "active" : ""}`}
              onMouseDown={handleResponseMouseDown}
            />

            {/* Response pane */}
            <div className="response-pane" style={{ flex: 1 }}>
              <ResponseSection
                response={response}
                loading={loading}
                responseTime={responseTime}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
