const insert = document.querySelector('#insert');

let tableHTML = `
  <table border="1" style="color:white; text-align:center;">
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
  </table>
`;

insert.innerHTML = tableHTML;
const table = insert.querySelector('table');

window.addEventListener('keydown', (e) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  `;
  table.appendChild(row); // 👈 Adds new row instead of replacing
});
