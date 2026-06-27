import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";

function ReportLayout({ title, children }) {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        background: "#ffffff",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,.15)",
      }}
    >
      <ReportHeader />

      <div
        style={{
          padding: "30px",
          color: "#16213E",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "25px",
            color: "#16213E",
            borderLeft: "6px solid #FFC107",
            paddingLeft: "15px",
          }}
        >
          {title}
        </h2>

        {children}
      </div>

      <ReportFooter />
    </div>
  );
}

export default ReportLayout;