
console.log('Footer component loaded');
// Define footer component
class Footer {
    constructor() {
        // Initialize component
    }

    render() {
        const footerElement = document.createElement('footer');
        footerElement.innerHTML = `
            <p>&copy; Amazing Footer</p>
        `;
        return footerElement;
    }
}

// Export the Footer class
export { Footer };
