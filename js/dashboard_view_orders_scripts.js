import ordersData from '../db/order_data.js';

document.addEventListener('DOMContentLoaded', () => {
    const ordersTable = document.getElementById('orders');
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    const ITEMS_PER_PAGE = 10;
    let currentPage = 1;

    function populateOrdersTable(data) {
        ordersTable.innerHTML = `<tr>
            <th>Order ID</th>
            <th>Order Time</th>
            <th>Order Status</th>
            <th>Order Amount</th>
        </tr>`;

        data.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.time}</td>
                <td>${order.status}</td>
                <td>${order.amount}</td>
            `;
            ordersTable.appendChild(row);
        });
    }

    function filterAndPaginate(searchTerm, filterValue) {
        let filteredData = ordersData.filter(order => {
            const idMatch = order.id.toString().includes(searchTerm);
            const timeMatch = order.time.includes(searchTerm);
            const statusMatch = order.status.toLowerCase().includes(searchTerm);
            const amountMatch = order.amount.toString().includes(searchTerm);
            return idMatch || timeMatch || statusMatch || amountMatch;
        });

        if (filterValue !== 'all') {
            filteredData = filteredData.filter(order => order.status === filterValue);
        }

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const pageData = filteredData.slice(startIndex, endIndex);
        populateOrdersTable(pageData);
    }

    function updatePaginationButtons() {
        const totalPages = Math.ceil(ordersData.length / ITEMS_PER_PAGE);
        prevPageButton.style.display = currentPage === 1 ? 'none' : 'inline-block';
        nextPageButton.style.display = currentPage === totalPages || totalPages === 0 ? 'none' : 'inline-block';
    }

    filterAndPaginate('', 'all');
    updatePaginationButtons();

    searchInput.addEventListener('input', () => {
        filterAndPaginate(searchInput.value.toLowerCase(), filterSelect.value.toLowerCase());
        currentPage = 1;
        updatePaginationButtons();
    });

    filterSelect.addEventListener('change', () => {
        filterAndPaginate(searchInput.value.toLowerCase(), filterSelect.value.toLowerCase());
        currentPage = 1;
        updatePaginationButtons();
    });

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            filterAndPaginate(searchInput.value.toLowerCase(), filterSelect.value.toLowerCase());
            updatePaginationButtons();
        }
    });

    nextPageButton.addEventListener('click', () => {
        const totalPages = Math.ceil(ordersData.length / ITEMS_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            filterAndPaginate(searchInput.value.toLowerCase(), filterSelect.value.toLowerCase());
            updatePaginationButtons();
        }
    });
});
