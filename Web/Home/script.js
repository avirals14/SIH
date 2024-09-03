document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('india-map');
    
    // Wait for the SVG to load
    map.addEventListener('load', function() {
        const svgDoc = map.contentDocument;
        
        // Attach event listeners to each state
        svgDoc.querySelectorAll('path').forEach(state => {
            state.addEventListener('click', function() {
                // alert(`You clicked on ${state.getAttribute('title')}`);
                // Implement more logic here
                link = `States/${state.getAttribute('title')}/${state.getAttribute('title')}.html`
                console.log(`${state.getAttribute('title')}`);
                window.location.href = link;
            });

            // Optional: Change color on hover
            state.addEventListener('mouseenter', function() {
                state.style.fill = '#ffcc00';
            });
            state.addEventListener('mouseleave', function() {
                state.style.fill = '';
            });
        });
    });
});
