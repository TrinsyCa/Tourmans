document.addEventListener("DOMContentLoaded", async function() {
    document.addEventListener("keydown", async function(event) {
        if(event.key === 'Escape') {
            if(clockLock === true) {
                contentClock(null);
            }
            if(dateFilter.classList.contains("active")) {
                closetableMode();
            }
        }
    });
});