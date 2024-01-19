document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    // Get references to the elements
    const zentDiv = document.querySelector('.zent');
    const zentBgDiv = document.querySelector('.zent-bg');

    // Add event listener for mouseenter
    zentDiv.addEventListener('mouseenter', function () {
        // Change the background on hover
        zentBgDiv.classList.add('fade-in');
        zentBgDiv.classList.add('full-height');
    });

    // Add event listener for mouseleave
    zentDiv.addEventListener('mouseleave', function () {
        //Reset the background on mouse leave
        zentBgDiv.classList.remove('fade-in');
        zentBgDiv.classList.remove('full-height');
    });
    
    const projectcon = document.querySelector('.box');
    const header1 = document.querySelector('.h1-2');
    
    projectcon.addEventListener('mouseenter' , function () {
        header1.classList.add('blue-t-gd-anim')
    });

    projectcon.addEventListener('mouseleave' , function () {

        header1.classList.remove('blue-t-gd-anim')
    });

    header1.addEventListener('mouseenter' , function () {
        header1.classList.add('blue-t-gd-anim')
    });

    header1.addEventListener('mouseleave' , function () {

        header1.classList.remove('blue-t-gd-anim')
    });
});
