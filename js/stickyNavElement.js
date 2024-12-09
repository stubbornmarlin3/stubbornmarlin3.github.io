function stickyNavElement(elementId, toElementId){

    window.addEventListener("DOMContentLoaded", ()=>{
        updateElementHeight();
    });
    
    window.addEventListener("resize", ()=>{
        updateElementHeight();
    });

    function updateElementHeight() {
        const toElement = document.getElementById(toElementId);
        const element = document.getElementById(elementId);
        var toElementBottom = toElement.getBoundingClientRect().bottom;
        var elementTop = element.getBoundingClientRect().top;

        element.style.height = `${toElementBottom - elementTop}px`;
    }
}


