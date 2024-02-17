// Import other modules
import { someFunction } from './utils.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';

// Initialize your application
document.addEventListener('DOMContentLoaded', () => {
    // Call functions or initialize components
    someFunction();
    const header = new Header();
    const footer = new Footer();
});
