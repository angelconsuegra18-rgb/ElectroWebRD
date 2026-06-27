import { company } from "../config/company";
import { theme } from "../config/theme";

function ReportHeader() {
  return (
    <div
      style={{
        background: theme.colors.secondary,
        color: theme.colors.white,
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h1 style={{ margin: 0, color: theme.colors.primary }}>
        ⚡ {company.name}
      </h1>

      <p style={{ marginTop: "8px", marginBottom: "15px" }}>
        {company.slogan}
      </p>

      <hr style={{ borderColor: "#ffffff33" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <span>📅 {new Date().toLocaleDateString()}</span>
        <span>🕒 {new Date().toLocaleTimeString()}</span>
        <span>
          📄 {company.reportPrefix}-{Date.now()}
        </span>
      </div>
    </div>
  );
}

export default ReportHeader;