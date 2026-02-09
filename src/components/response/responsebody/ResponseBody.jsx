const dummyResponse = {
  name: "Bharat Sharma",
  dob: "26/11/1992",
  gender: "Male",
  aadhaar_number: "3306 9998 1453",
  address: "Solan, Himachal Pradesh",
  skills: ["Java", "Spring Boot", "React"],
  experience: {
    backend: "2+ years",
    genai: "Hands-on"
  }
};

const ResponseBody = () => {
  return (
    <div
      className="border border-top-0 p-3 bg-light"
      style={{ height: "220px", overflowY: "auto" }}
    >
      <pre className="mb-0">
        {JSON.stringify(dummyResponse, null, 2)}
      </pre>
    </div>
  );
};

export default ResponseBody;
