// Main website functionality: load and display gadgets
import GADGETS from '../data/data-gadgets.js';

document.addEventListener('DOMContentLoaded', () => {
    const gadgetContainer = document.getElementById('gadget-container');

    GADGETS.forEach(category => {
        category.items.forEach(gadget => {
            const gadgetCard = document.createElement('div');
            gadgetCard.className = 'gadget-card';
            gadgetCard.innerHTML = `
                <h3>${gadget.brand} ${gadget.model}</h3>
                <p>Price: $${gadget.price}</p>
                <p>Storage: ${gadget.storage || 'N/A'}</p>
                <p>Battery: ${gadget.battery || 'N/A'}</p>
                <p>Display: ${gadget.display || 'N/A'}</p>
                <p>OS: ${gadget.os || 'N/A'}</p>
            `;
            gadgetContainer.appendChild(gadgetCard);
        });
    });
});