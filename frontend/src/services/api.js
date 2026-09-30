const API_BASE_URL = "http://localhost:4000";


async function request(
  endpoint,
  options = {}
) {

  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      }
    }
  );


  if (!response.ok) {

    let message = "Request failed.";

    try {
      const data = await response.json();

      message =
        data.detail ||
        data.message ||
        message;

    } catch {
    }

    throw new Error(message);
  }


  return response.json();
}


export { API_BASE_URL, request };