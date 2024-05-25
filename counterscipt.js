document.addEventListener("DOMContentLoaded", function() {
    fetch('YOUR_API_GATEWAY_INVOKE_URL/count')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitor-counter').textContent = `You are visitor number: ${data.count}`;
        })
        .catch(error => console.error('Error:', error));
});
