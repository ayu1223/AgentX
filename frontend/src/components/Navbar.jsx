function Navbar({ onHome }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        borderBottom: "1px solid #e88a25",
        background: "#020617"
      }}
    >
      <h2
        onClick={onHome}
        style={{
          margin: 0,
          cursor: "pointer"
        }}
      >
        AgentX
      </h2>

      <span
        style={{
          color: "#94a3b8",
          fontSize: "14px"
        }}
      >
        AI Agent Builder
      </span>
    </nav>
  );
}

export default Navbar;