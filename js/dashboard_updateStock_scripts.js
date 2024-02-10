document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('stockForm');
    const stockDisplay = document.getElementById('stockDisplay');



    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const medicineId = document.getElementById('medicineId').value;
        const quantity = parseInt(document.getElementById('quantity').value);

        console.log('Medicine ID:', medicineId); // Log the medicine ID
        console.log('Medicine Data:', medicineData); // Log the medicine data array

        const medicine = medicineData.find(med => med.medicine_id === medicineId);


        console.log('Found Medicine:', medicine); // Log the found medicine object

        if (!medicine) {
            alert('Medicine not found.');
            return;
        }

        // Update the quantity
        medicine.quantity += quantity;

        // Display the updated information
        const updatedStockInfo = document.createElement('p');
        updatedStockInfo.textContent = `Medicine ID: ${medicineId}, Updated Quantity: ${medicine.quantity}`;
        stockDisplay.appendChild(updatedStockInfo);
    });
});

