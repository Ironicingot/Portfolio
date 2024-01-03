(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            if (this.dataset.id === 'home') {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.querySelectorAll('.category-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterPortfolio(category);
    });
});

function filterPortfolio(category) {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block'; // or your preferred display style
        } else {
            item.style.display = 'none';
        }
    });
}

// Example: Toggle the main section when a button is clicked
document.getElementById("yourButtonId").addEventListener("click", function() {
    document.querySelector("main").style.display = 'block';
});


