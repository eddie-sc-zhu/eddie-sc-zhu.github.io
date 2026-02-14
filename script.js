document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.interactive-text');
    const detailCards = document.querySelectorAll('.detail-card');
    const sidebar = document.getElementById('sidebar');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const targetId = el.getAttribute('data-target');

            // Remove active class from all other interactive text
            interactiveElements.forEach(e => e.classList.remove('active'));
            el.classList.add('active');

            // Hide all cards
            detailCards.forEach(card => card.classList.remove('active'));

            // Show target card
            const targetCard = document.getElementById(targetId);
            if (targetCard) {
                targetCard.classList.add('active');
                sidebar.classList.add('visible'); // Show sidebar
            }
        });

        // Add mouseleave logic to the SIDEBAR/Layout? 
        // User said "right bar should only apper when i highlight over smth"
        // This suggests when mouse leaves the text, sidebar should go away?
        // Let's try making it disappear when leaving the text, unless the user moves TO the sidebar (which is tricky without a delay).
        // For strict "highlight over", let's hide it when leaving the text.

        // Mouseleave removed to make sidebar sticky per user request. 
        // Sidebar will only change when another item is hovered.
        /*
        el.addEventListener('mouseleave', () => {
             sidebar.classList.remove('visible');
             el.classList.remove('active');
        });
        */
    });
});

const closeBtn = document.getElementById('close-sidebar');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('visible');
        interactiveElements.forEach(e => e.classList.remove('active'));
    });
}
