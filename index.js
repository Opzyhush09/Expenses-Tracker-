const jsonData = [
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }
];

function generateBarChart(data) {
    const barChart = document.querySelector('.bar-chart');
    const labelChart = document.querySelector('.label-chart');

    // Clear existing content in case it's already populated
    barChart.innerHTML = '';
    labelChart.innerHTML = '';

    // Variable to store the currently visible amount label
    let currentlyVisibleLabel = null;

    data.forEach(item => {
        // Create the bar container
        const barContainer = document.createElement('div');
        barContainer.classList.add('bar-container');
        barContainer.style.position = 'relative'; 

        // Create the bar
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${item.amount * 3}px`; 
        bar.dataset.amount = item.amount; 
        
        // Check if the day is Wednesday to add a specific class
        if (item.day === "wed") {
            bar.classList.add('wed-bar'); // Add a specific class for the Wednesday bar
        }

        // Create amount label for the top of the bar
        const amountLabel = document.createElement('span');
        amountLabel.classList.add('amount-label');
        amountLabel.textContent = `$${item.amount.toFixed(2)}`;
        amountLabel.style.position = 'absolute'; 
        amountLabel.style.bottom = '100%'; 
        amountLabel.style.left = '50%'; 
        amountLabel.style.transform = 'translateX(-50%)';
        amountLabel.style.padding = '2px 5px'; 
        amountLabel.style.color = 'black'; 
        amountLabel.style.borderRadius = '3px';
        amountLabel.style.display = 'none'; 

        // Handle click event to show/hide amount label
        bar.addEventListener('click', () => {
            // Hide the currently visible label if it is different from the clicked one
            if (currentlyVisibleLabel && currentlyVisibleLabel !== amountLabel) {
                currentlyVisibleLabel.style.display = 'none'; 
            }
            // Toggle the clicked label
            amountLabel.style.display = amountLabel.style.display === 'none' ? 'block' : 'none';
            // Update the currently visible label
            currentlyVisibleLabel = amountLabel.style.display === 'block' ? amountLabel : null;
        });

        // Append the bar and the label to the bar container
        barContainer.appendChild(bar);
        barContainer.appendChild(amountLabel);
        barChart.appendChild(barContainer);

        // Create label for the day
        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = item.day;
        
        // Append label to the label chart container
        labelChart.appendChild(label);
    });
}

// Call the function to generate the bar chart
document.addEventListener('DOMContentLoaded', () => {
    generateBarChart(jsonData);
});