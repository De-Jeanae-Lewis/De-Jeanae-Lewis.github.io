// Close load
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader-container').style.display = 'none';
        window.location.href = 'index.html';
    }, 3000);
});