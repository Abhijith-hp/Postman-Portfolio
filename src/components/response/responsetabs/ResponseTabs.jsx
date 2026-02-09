const ResponseTabs = () => {
  return (
    <ul className="nav nav-tabs">
      {["Body", "Cookies", "Headers (4)", "Test Results"].map(tab => (
        <li className="nav-item" key={tab}>
          <button className={`nav-link ${tab === "Body" ? "active" : ""}`}>
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ResponseTabs;
