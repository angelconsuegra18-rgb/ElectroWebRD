function ReportTable({ data }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            style={{
              borderBottom: "1px solid #ddd",
            }}
          >
            <td
              style={{
                padding: "12px",
                fontWeight: "bold",
                width: "40%",
                background: "#f5f5f5",
              }}
            >
              {item.label}
            </td>

            <td
              style={{
                padding: "12px",
              }}
            >
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReportTable;