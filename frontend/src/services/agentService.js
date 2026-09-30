import { API_BASE_URL, request } from "./api";


async function createAgent(data) {

  return request(
    "/agents/create",
    {
      method: "POST",
      body: JSON.stringify(data)
    }
  );
}


async function sendMessage(
  agent,
  message
) {

  let endpoint = "/chat";

  if (agent.agent_type === "rag") {
    endpoint = "/rag/chat";
  }

  if (agent.agent_type === "tool") {
    endpoint = "/tool/chat";
  }

  return request(
    endpoint,
    {
      method: "POST",
      body: JSON.stringify({
        message,
        agent_name: agent.name,
        agent_description: agent.description
      })
    }
  );
}


async function uploadDocument(file) {

  const formData = new FormData();

  formData.append("file", file);


  const response = await fetch(
    `${API_BASE_URL}/documents/upload`,
    {
      method: "POST",
      body: formData
    }
  );


  if (!response.ok) {

    let message = "Document upload failed.";

    try {
      const data = await response.json();

      message =
        data.detail ||
        data.message ||
        message;

    } catch {
      // Keep default error message.
    }

    throw new Error(message);
  }


  return response.json();
}


export {
  createAgent,
  sendMessage,
  uploadDocument
};