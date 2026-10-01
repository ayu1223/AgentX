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
        `${result.filename} uploaded · ${result.chunks} chunks`
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
    <div className="file-upload">
      <label className="file-picker">
        <input
          type="file"
          accept=".pdf,.txt"
          onChange={(event) => {
            setFile(
              event.target.files[0] || null
            );
            setError("");
            setMessage("");
          }}
        />

        <span>
          {file
            ? file.name
            : "Choose PDF or TXT"}
        </span>
      </label>

      <button
        type="button"
        className="secondary-button"
        onClick={handleUpload}
        disabled={!file || loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {message && (
        <span className="upload-success">
          {message}
        </span>
      )}

      {error && (
        <span className="upload-error">
          {error}
        </span>
      )}
    </div>
  );
}

export default FileUpload;