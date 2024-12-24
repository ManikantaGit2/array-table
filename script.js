   // Sample array of objects
   const data = [
    { id: 1, name: 'Mani', age: 32, city: 'Guntur' },
    { id: 2, name: 'Suresh', age: 34, city: 'Vijayawada' },
    { id: 3, name: 'Padmaja', age: 28, city: 'Aadanki' },
    { id: 4, name: 'Triveni', age: 30, city: 'Chowdavaram' },
    { id: 5, name: 'Durga Prasad', age: 22, city: 'Thummalapalem' }
  ];

  // Create the table element
  const table = document.createElement('table');
  
 // Create table header
 const headerRow = document.createElement('tr');
 for (const key in data[0]) {
   const th = document.createElement('th');
   th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
   headerRow.appendChild(th);
 }
 table.appendChild(headerRow);

 // Create table rows
 for (let i = 0; i < data.length; i++) {
   const row = document.createElement('tr');
   for (const key in data[i]) {
     const td = document.createElement('td');
     td.textContent = data[i][key];
     row.appendChild(td);
   }
   table.appendChild(row);
 }

 // Append the table to the container
 const tableContainer = document.getElementById('tableContainer');
 tableContainer.appendChild(table);