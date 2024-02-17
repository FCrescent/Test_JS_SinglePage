/*FIRST SAMPLES THAT HELPED UNDERSTAND THE ES6 modules BUG
document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');

    // Create footer element
    const footerElement = document.createElement('footer');
    footerElement.innerHTML = `
        <p>&copy; 2024 Your Amazing Company</p>
    `;

    // Append footer to the app container
    appContainer.appendChild(footerElement);
});