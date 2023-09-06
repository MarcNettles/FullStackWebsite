/* Marc Nettles 09/06/2023
 * Scripts for the main layout
 */

// Wait for the page to be loaded
document.addEventListener('DOMContentLoaded', function (){

    // Skip to Main Content Link
    //==========================/
    //--------START-------------/
    var skipLink = document.getElementById("skip_link");

    skipLink.addEventListener("focus", function (e){

        skipLink.classList.remove("sr-only");
        skipLink.classList.remove("sr-only-focusable");

    });
    skipLink.addEventListener("blur", function (e){
        skipLink.classList.add("sr-only");
        skipLink.classList.add("sr-only-focusable");
    });
});