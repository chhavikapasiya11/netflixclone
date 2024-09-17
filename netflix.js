
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');


navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-active');
});


document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('nav-links-active');
        }
    });
});
function adjustMoviesLayout() {
    const moviesRows = document.querySelectorAll('.movies-row');

    moviesRows.forEach(row => {
        const movies = row.querySelectorAll('.movie');
        const moviesArray = Array.from(movies);

        if (window.innerWidth <= 768) {
            moviesArray.forEach(movie => {
                movie.style.flexBasis = '48%'; 
            });
        } else if (window.innerWidth <= 1024) {
            moviesArray.forEach(movie => {
                movie.style.flexBasis = '23%'; 
            });
        } else {
            moviesArray.forEach(movie => {
                movie.style.flexBasis = '18%'; 
            });
        }
    });
}


window.addEventListener('resize', adjustMoviesLayout);

window.onload = () => {
    adjustMoviesLayout();
};



document.querySelector('.cta-button').addEventListener('click', () => {
    
    window.location.href = 'signup.html'; 

document.querySelector('.cta-button.secondary').addEventListener('click', () => {
    
    window.location.href = 'signin.html'; 
});
