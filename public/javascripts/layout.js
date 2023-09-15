/* Marc Nettles 09/06/2023
 * Scripts for the main layout
 */

// Wait for the page to be loaded
//==============================================================/
//---------------------START------------------------------------/
document.addEventListener('DOMContentLoaded', function (){

    // Skip to Main Content Link
    //==========================/
    //--------START-------------/
    
    var skipLink = document.getElementById("skip_link");

    skipLink.addEventListener("focus", function (e){ // Listen for it to be focused (e.g. when we tab to it), then remove the sr-only stuff so it becomes visible.
        skipLink.classList.remove("sr-only");
        skipLink.classList.remove("sr-only-focusable");
    });

    skipLink.addEventListener("blur", function (e){ // Listen for it to be unfocused, then put the sr-only stuff back on.
        skipLink.classList.add("sr-only");
        skipLink.classList.add("sr-only-focusable");
    });

    //--------END---------------/
    //==========================/


    // Script for blinking cursor animation
    //====================================/
    //----------------START---------------/

    const blinkingCursor = document.querySelector(".blinkingCursor");

    blinkingCursor.style.opacity = "1";

    function toggleBlinkingCursor(){
        blinkingCursor.style.opacity = blinkingCursor.style.opacity === "0" ? "1" : "0";
    }

    setInterval(toggleBlinkingCursor, 500);
    
    //-----------------END----------------/
    //====================================/


    // Swap active navbar item when clicking on others
    //===================================/
    //----------------START--------------/
    const navLinks = document.querySelectorAll('#navbar .nav-link');
    console.log("navLinks found", navLinks)

    function handleTabClick(event){
        console.log("handling click");
        navLinks.forEach(navLink =>{
            navLink.classList.remove("active");
            console.log("removing active from: ", navLink);
        });

        console.log("adding active to: ", event.target);
        event.target.classList.add("active");

    }

    navLinks.forEach(navLink => {
        navLink.addEventListener("click", handleTabClick);
    });
    
    
    //-----------------END---------------/
    //===================================/

    // Enable Tooltips https://getbootstrap.com/docs/5.2/components/tooltips/
    //===========================/
    //-----------START-----------/
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


    //-----------END-------------/
    //===========================/
});

//==============================================================/
//----------------------END-------------------------------------/