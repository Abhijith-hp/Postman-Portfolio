export const apiList = [
  {
    name: "Health Check",
    method: "GET",
    url: "http://localhost:8080/api/health"
  },
  {
    name: "Extract Document",
    method: "GET",
    url: "http://localhost:8000/api/v1/extract"
  },
  {
    name: "OCR Upload",
    method: "POST",
    url: "http://localhost:8000/api/v1/ocr/upload"
  },
  {
    name: "Update Profile",
    method: "PUT",
    url: "http://localhost:8080/api/v1/profile"
  },
  {
    name: "Delete Session",
    method: "DELETE",
    url: "http://localhost:8080/api/v1/session"
  },
  {
    name: "Get User Info",
    method: "GET",
    url: "http://localhost:8080/api/v1/user"
  },
  {
    name: "Submit Form",
    method: "POST",
    url: "http://localhost:8080/api/v1/form/submit"
  },
  {
    name: "Patch Settings",
    method: "PATCH",
    url: "http://localhost:8080/api/v1/settings"
  }
];
