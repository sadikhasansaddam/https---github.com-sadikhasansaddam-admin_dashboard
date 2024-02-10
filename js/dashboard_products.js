// Get references to the buttons
const viewStockButton = document.getElementById('view-stock');
const updateStockButton = document.getElementById('update-stock');
const addProductButton = document.getElementById('add-product');
const removeProductButton = document.getElementById('remove-product');

// Add event listeners to the buttons
viewStockButton.addEventListener('click', () => {
  // Navigate to the view stock page
  window.location.href = '../dashboard_view_stock.html';
});

updateStockButton.addEventListener('click', () => {
  // Navigate to the update stock page
  window.location.href = '../dashboard_updateStock.html';
});

addProductButton.addEventListener('click', () => {
  // Navigate to the add product page
  window.location.href = 'add_product.html';
});

removeProductButton.addEventListener('click', () => {
  // Navigate to the remove product page
  window.location.href = 'remove_product.html';
});

