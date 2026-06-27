import { company } from "../config/company";
import { theme } from "../config/theme";

function ReportFooter() {
  return (
    <div
      style={{
        marginTop: "30px",
        background: theme.colors.dark,
        color: theme.colors.white,
        padding: "20px",
        borderRadius: "10px",
        borderTop: `4px solid ${theme.colors.primary}`,
      }}
    >
      <h3
        style={{
          color: theme.colors.primary,
          marginTop: 0,
        }}
      >
        ⚡ {company.name}
      </h3>

      <p>{company.slogan}</p>

      <hr
        style={{
          borderColor: "#ffffff30",
          margin: "15px 0",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "10px",
        }}
      >
        <p>🌐 {company.website}</p>

        <p>📱 {company.instagram}</p>

        <p>📧 {company.email}</p>

        <p>📞 {company.phone}</p>

        <p>📍 {company.location}</p>
      </div>

      <hr
        style={{
          borderColor: "#ffffff30",
          margin: "15px 0",
        }}
      />

      <small
        style={{
          color: "#CCCCCC",
          display: "block",
        }}
      >
        {company.disclaimer}
      </small>
    </div>
  );
}

export default ReportFooter;