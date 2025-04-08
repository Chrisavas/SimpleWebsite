// Αν θες να κάνεις fade όταν κάνεις κλικ
document.getElementById('welcome-screen').addEventListener('click', function() {
    this.style.transition = 'opacity 1s ease-out';
    this.style.opacity = '0';
    
    setTimeout(function() {
        // Ανακατεύθυνση στη σελίδα shop.html μετά το fade
        window.location.href = 'shop.html';
    }, 1000); // 1 δευτερόλεπτο για το fade
});

// Αν θες να κάνεις fade όταν γίνεται scroll
window.addEventListener('scroll', function() {
    document.getElementById('welcome-screen').style.transition = 'opacity 1s ease-out';
    document.getElementById('welcome-screen').style.opacity = '0';
    
    setTimeout(function() {
        // Ανακατεύθυνση στη σελίδα shop.html μετά το fade
        window.location.href = 'shop.html';
    }, 1000); // 1 δευτερόλεπτο για το fade
});
