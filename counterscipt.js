document.addEventListener("DOMContentLoaded", function() {  
    fetch('YOUR_API_GATEWAY_INVOKE_URL', {
        method: 'GET',  
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stat_name: 'visitor_count' }) 
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('visitor-counter').textContent = `You are visitor number: ${data.quantity}`;
    })
    .catch(error => console.error('Error:', error));
});

