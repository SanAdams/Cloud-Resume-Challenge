document.addEventListener("DOMContentLoaded", function() {  
    fetch('https://mhk03kw3wg.execute-api.us-east-1.amazonaws.com/early_dev', {
        method: 'POST',  
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        body: JSON.stringify({ stat_name: 'visitor_count' }) 
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('visitor-counter').textContent = `You are visitor number: ${response.quantity}`;
    })
    .catch(error => console.error('Error:', error));
});

