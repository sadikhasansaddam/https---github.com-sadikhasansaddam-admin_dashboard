document.addEventListener('DOMContentLoaded', function () {
    const salesChartCanvas = document.getElementById('salesChart').getContext('2d');
    const revenueChartCanvas = document.getElementById('revenueChart').getContext('2d');
    const stockChartCanvas = document.getElementById('stockChart').getContext('2d');

    // Sample data (replace with your actual data)
    let salesData = generateRandomData(7); // Last 7 days
    let revenueData = generateRandomData(7); // Last 7 days
    let stockData = generateRandomData(7); // Last 7 days

    // Create and render charts
    let salesChart = renderChart(salesChartCanvas, salesData, 'line');
    let revenueChart = renderChart(revenueChartCanvas, revenueData, 'bar');
    let stockChart = renderChart(stockChartCanvas, stockData, 'line');

    // Filter options
    const filterOptions = document.querySelectorAll('.filter-option');

    // Add event listener to each filter option
    filterOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedFilter = this.dataset.filter;

            // Update chart data based on the selected filter
            switch (selectedFilter) {
                case 'days':
                    salesData = generateRandomData(1); // Last 24 hours
                    revenueData = generateRandomData(1); // Last 24 hours
                    stockData = generateRandomData(1); // Last 24 hours
                    updateCharts(salesChart, revenueChart, stockChart, salesData, revenueData, stockData);
                    break;
                case 'weeks':
                    salesData = generateRandomData(7); // Last 7 days
                    revenueData = generateRandomData(7); // Last 7 days
                    stockData = generateRandomData(7); // Last 7 days
                    updateCharts(salesChart, revenueChart, stockChart, salesData, revenueData, stockData);
                    break;
                case 'months':
                    salesData = generateRandomData(30); // Last 30 days
                    revenueData = generateRandomData(30); // Last 30 days
                    stockData = generateRandomData(30); // Last 30 days
                    updateCharts(salesChart, revenueChart, stockChart, salesData, revenueData, stockData);
                    break;
                default:
                    // Handle default case
                    break;
            }
        });
    });

    // Function to generate random data for the specified number of days
    function generateRandomData(numDays) {
        const data = [];
        for (let i = 0; i < numDays; i++) {
            data.push(Math.floor(Math.random() * 100)); // Random data, replace with your actual data
        }
        return data;
    }

    // Function to render a chart
    function renderChart(canvas, data, type) {
        return new Chart(canvas, {
            type: type,
            data: {
                labels: Array.from({ length: data.length }, (_, i) => `Day ${i + 1}`),
                datasets: [{
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                // Add chart options here
            }
        });
    }

    // Function to update chart data
    function updateCharts(salesChart, revenueChart, stockChart, salesData, revenueData, stockData) {
        salesChart.data.datasets[0].data = salesData;
        revenueChart.data.datasets[0].data = revenueData;
        stockChart.data.datasets[0].data = stockData;
        salesChart.update();
        revenueChart.update();
        stockChart.update();
    }
});
