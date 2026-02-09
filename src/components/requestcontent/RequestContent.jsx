const RequestContent = ({ activeTab }) => {
  return (
    <div
      className="border rounded p-3 bg-white"
      style={{ minHeight: "180px" }}
    >
      {activeTab === "Body" && (
        <textarea
          className="form-control"
          rows={6}
          placeholder="Enter request body here..."
        />
      )}

      {activeTab !== "Body" && (
        <div className="text-muted text-center mt-5">
          {activeTab} content goes here
        </div>
      )}
    </div>
  );
};

export default RequestContent;
