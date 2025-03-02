// Close load
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader-container').style.opacity = '0';
        
        setTimeout(() => {
            document.getElementById('loader-container').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
        }, 500);

    }, 2000); 
});

