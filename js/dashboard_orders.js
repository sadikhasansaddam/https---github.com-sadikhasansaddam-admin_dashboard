document.addEventListener('DOMContentLoaded', function() {
    const viewOrdersBtn = document.getElementById('viewOrdersBtn');
    const removeOrderBtn = document.getElementById('removeOrderBtn');

    viewOrdersBtn.addEventListener('click', function() {
        // Redirect to the view orders page
        window.location.href = '../dashboard_view_orders.html';
    });

    removeOrderBtn.addEventListener('click', function() {
        // Redirect to the remove order page
        window.location.href = 'remove_order.html';
    });
});
