function stickyNavElement(elementId, toElementBottom){

    window.addEventListener("DOMContentLoaded", ()=>{
        updateElementHeight();
    });
    
    window.addEventListener("resize", ()=>{
        updateElementHeight();
    });

    function updateElementHeight() {
        const page = document.getElementById(toElementBottom);
        const element = document.getElementById(elementId);
        var pageHeight = Number(window.getComputedStyle(page).height.slice(0,-2));
        var elementTop = Number(window.getComputedStyle(element).top.slice(0,-2));
        element.style.height = `${pageHeight - elementTop}px`;
    }
}


