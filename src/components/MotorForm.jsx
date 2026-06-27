function MotorForm({
  title,
  children,
  buttonText = "Buscar Motor",
  onSubmit,
}) {
  return (
    <div
      style={{
        background: "#18233a",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: "20px",
        padding: "30px",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "34px",
          marginBottom: "30px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "grid",
          gap: "22px",
        }}
      >
        {children}
      </div>

      <button
        onClick={onSubmit}
        style={{
          marginTop: "30px",
          width: "100%",
          height: "56px",
          border: "none",
          borderRadius: "14px",
          background: "#2563eb",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MotorForm;