console.log('App loaded');

// Import the Footer component
import { Footer } from './components/footer.js';
import { Header } from './components/header.js';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');


    // Function to render a component onto the DOM
    function renderComponent(Component) {
        const component = new Component();
        appContainer.appendChild(component.render());
    }

    // Render the Header component
    renderComponent(Header);

    // Render the Footer component
    renderComponent(Footer);
});

