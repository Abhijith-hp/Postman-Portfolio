import ResponseBody from "../responsebody/ResponseBody";
import ResponseTabs from "../responsetabs/ResponseTabs";


const ResponseSection = () => {
  return (
    <div className="mt-4 border-top pt-3">

      {/* Meta */}
      <div className="d-flex align-items-center gap-3 mb-2">
        <span className="badge bg-success">200 OK</span>
        <span className="text-muted">21 ms</span>
        <span className="text-muted">349 B</span>
      </div>

      <ResponseTabs />
      <ResponseBody />
    </div>
  );
};

export default ResponseSection;
