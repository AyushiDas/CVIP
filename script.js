document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".recommended-section");
    sections.forEach(function (section) {
        const movieList = section.querySelector(".movie-list");
        const prevBtn = section.querySelector(".prevBtn");
        const nextBtn = section.querySelector(".nextBtn");
        let scrollAmount = 0;
        const scrollStep = 200;

        prevBtn.addEventListener("click", function () {
            scrollAmount -= scrollStep;
            if (scrollAmount < 0) {
                scrollAmount = 0;
            }
            movieList.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        });

        nextBtn.addEventListener("click", function () {
            scrollAmount += scrollStep;
            const maxScroll = movieList.scrollWidth - movieList.clientWidth;
            if (scrollAmount > maxScroll) {
                scrollAmount = maxScroll;
            }
            movieList.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        });
    });

    document.getElementById('myListButton').addEventListener('click', function () {
        const targetSection = document.getElementById('my-list-section');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
