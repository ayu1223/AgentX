function Loading({ text = "Loading..." }) {
  return (
    <div className="loading-row">
      <span className="loading-dots">
        <i />
        <i />
        <i />
      </span>

      <span>{text}</span>
    </div>
  );
}

export default Loading;