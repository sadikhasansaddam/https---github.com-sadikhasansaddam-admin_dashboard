document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('medicines');
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');
  
    function populateTable(filteredData) {
      table.innerHTML = ''; // Clear existing rows
      filteredData.forEach(medicine => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${medicine.medicine_id}</td>
          <td>${medicine.medicine_name}</td>
          <td>${medicine.generic_name}</td>
          <td>${medicine.quantity}</td>
        `;
        table.appendChild(row);
      });
    }
  
    function filterData(searchTerm, filterValue) {
      let filteredData = medicineData.filter(medicine => {
        const idMatch = medicine.medicine_id.toLowerCase().includes(searchTerm.toLowerCase());
        const nameMatch = medicine.medicine_name.toLowerCase().includes(searchTerm.toLowerCase());
        const genericMatch = medicine.generic_name.toLowerCase().includes(searchTerm.toLowerCase());
        const quantityMatch = medicine.quantity.toString().includes(searchTerm.toLowerCase());
        if (filterValue === 'lowStock') {
          return (idMatch || nameMatch || genericMatch || quantityMatch) && medicine.quantity < 50;
        } else if (filterValue === 'outOfStock') {
          return (idMatch || nameMatch || genericMatch || quantityMatch) && medicine.quantity === 0;
        } else {
          return idMatch || nameMatch || genericMatch || quantityMatch;
        }
      });
      populateTable(filteredData);
    }
  
    // Initial population of the table
    populateTable(medicineData);
  
    // Event listeners for search and filter
    searchInput.addEventListener('input', () => {
      filterData(searchInput.value, filterSelect.value);
    });
  
    filterSelect.addEventListener('change', () => {
      filterData(searchInput.value, filterSelect.value);
    });
  });  