export const AGENT_TYPES = {
  CHAT: "chat",
  RAG: "rag",
  TOOL: "tool"
};


export const AGENT_TYPE_LABELS = {
  [AGENT_TYPES.CHAT]: "Chat / Q&A",
  [AGENT_TYPES.RAG]: "Document Q&A / RAG",
  [AGENT_TYPES.TOOL]: "Tool Agent"
};


export const API_ENDPOINTS = {
  CREATE_AGENT: "/agents/create",
  CHAT: "/chat",
  RAG_CHAT: "/rag/chat",
  TOOL_CHAT: "/tool/chat",
  DOCUMENT_UPLOAD: "/documents/upload"
};