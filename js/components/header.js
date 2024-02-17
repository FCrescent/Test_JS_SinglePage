console.log('Header component loaded');
// Define footer component
class Header {
    constructor() {
        // Initialize component
    }

    render() {
        const headerElement = document.createElement('header');
        headerElement.innerHTML = `
        <header>
            <h1>Learning Path Lab</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        `;
        return headerElement;
    }
}

// Export the Footer class
export { Header };
