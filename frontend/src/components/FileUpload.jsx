import { useState } from "react";

import { uploadDocument } from "../services/agentService";


function FileUpload({ onUploaded }) {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleUpload = async () => {

    if (!file) {
      setError("Please select a PDF or TXT file.");
      return;
    }

    setError("");
    setMessage("");
    setLoading(true);

    try {

      const result = await uploadDocument(file);

      setMessage(
        `${result.filename} uploaded successfully. ${result.chunks} chunks created.`
      );

      setFile(null);

      if (onUploaded) {
        onUploaded(result);
      }

    } catch (err) {

      setError(
        err.message || "Failed to upload document."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <div>

      <input
        type="file"
        accept=".pdf,.txt"
        onChange={(event) => {
          setFile(event.target.files[0] || null);
          setError("");
          setMessage("");
        }}
      />

      <button
        type="button"
        onClick={handleUpload}
        disabled={!file || loading}
      >
        {loading ? "Uploading..." : "Upload Document"}
      </button>

      {message && (
        <p>{message}</p>
      )}

      {error && (
        <p>{error}</p>
      )}

    </div>
  );
}


export default FileUpload;