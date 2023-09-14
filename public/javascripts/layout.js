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

    // Added this so that when the user
    var firstNavLink = document.getElementById("firstNavLink");

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