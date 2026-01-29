// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// URL Testing functionality (educational simulation)
document.getElementById('test-btn').addEventListener('click', function() {
    const urlInput = document.getElementById('url-input');
    const resultsDiv = document.getElementById('results');
    
    const url = urlInput.value.trim();
    
    if (!url) {
        resultsDiv.innerHTML = '<p style="color: #e53e3e;">Please enter a valid URL.</p>';
        return;
    }
    
    // Simple URL validation
    try {
        new URL(url);
    } catch {
        resultsDiv.innerHTML = '<p style="color: #e53e3e;">Please enter a valid URL (e.g., https://example.com).</p>';
        return;
    }
    
    // Simulate educational testing results
    resultsDiv.innerHTML = '<p>Analyzing URL... (This is an educational simulation)</p>';
    
    setTimeout(() => {
        const risks = [
            'Check if the website uses HTTPS for secure connections.',
            'Look for clear privacy policies and terms of service.',
            'Be cautious with personal information sharing.',
            'Verify the website\'s legitimacy through trusted sources.',
            'Use strong, unique passwords for any accounts.'
        ];
        
        const randomRisks = risks.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        resultsDiv.innerHTML = `
            <h3>Educational Insights for ${url}:</h3>
            <p>This simulation provides general security awareness tips. Always consult professionals for real security testing.</p>
            <ul>
                ${randomRisks.map(risk => `<li>${risk}</li>`).join('')}
            </ul>
            <p><strong>Remember:</strong> This is for learning purposes only. Do not use this for actual security testing or hacking.</p>
        `;
    }, 1000);
});

// Add some basic animations on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
