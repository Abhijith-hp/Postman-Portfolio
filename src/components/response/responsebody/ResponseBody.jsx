const ResponseBody = ({ response }) => {
  return (
    <div
      className="border border-top-0 p-3 bg-light"
      style={{ height: "220px", overflowY: "auto" }}
    >
      {!response ? (
        <div className="text-muted text-center mt-5">
          No response yet
        </div>
      ) : (
        <pre className="mb-0">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ResponseBody;
