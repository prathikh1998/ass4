document.addEventListener('DOMContentLoaded', function() {
    const queryForm = document.getElementById('query-form');
    const chartContainer = document.getElementById('chart-container');

    queryForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const attribute = document.getElementById('attribute').value;
        const interval = document.getElementById('interval').value;

        // Send query data to the server
        fetch('/query', {
            method: 'POST',
            body: new URLSearchParams({
                'attribute': attribute,
                'interval': interval
            })
        })
        .then(response => response.json())
        .then(chartData => {
            // Generate the chart using the received data
            renderChart(chartData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function renderChart(data) {
        // Replace this with your preferred charting library (e.g., D3.js, Google Charts)
        // Example using Chart.js
        const chart = new Chart(chartContainer, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Chart Data',
                    data: data.values,
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
