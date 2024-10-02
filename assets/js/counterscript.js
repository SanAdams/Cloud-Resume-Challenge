document.addEventListener("DOMContentLoaded", function() {  
    fetch('https://mhk03kw3wg.execute-api.us-east-1.amazonaws.com/early_dev', {
        method: 'POST',  
        headers: {
            'Content-Type': 'application/json',
        },
        body: "{\"stat_name\": \"visitor_count\"}" 
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('visitor-counter').textContent = `You are visitor: ${response.quantity}`;
    })
    .catch(error => console.error('Error:', error));
});

