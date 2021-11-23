function Counter({ id }) {
  const data = [
    {
      company: "Alfreds Futterkiste",
      contact: "Maria Anders",
      country: "Germany",
    },
    { company: "Alfreds Futterkiste", contact: "Dodge", country: "USA" },
    { company: "Alfreds Futterkiste", contact: "IRK", country: "Iran" },
    { company: "Alfreds Futterkiste", contact: "Toyota", country: "Japan" },
  ];

  return (
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      {data.map((item) => (
        <tr>
          <td>{item.company}</td>
          <td>{item.contact}</td>
          <td>{item.country}</td>
        </tr>
      ))}
    </table>
  );
}

export default Counter;
