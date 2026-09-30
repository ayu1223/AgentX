function Loading({ text = "Loading..." }) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        color: "#94a3b8"
      }}
    >
      {text}
    </div>
  );
}

export default Loading;