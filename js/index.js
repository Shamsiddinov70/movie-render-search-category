let KINOLAR = movies.slice(0, 500);
let elForm = document.querySelector('.js-form');
let elSelect = document.querySelector('.js-select');
let elSearch = document.querySelector('.js-search');
let elRatingSelect = document.querySelector('.select-rating');
let elWarapper = document.querySelector('.wrapper');
let elTemplate = document.getElementById('template').content;


let renderMovies = (arr) => {
    elWarapper.innerHTML = null;
    arr.forEach((movie) => {
        let elCard = elTemplate.cloneNode(true)
        let title = elCard.querySelector('.card-title');
        let categories = elCard.querySelector('.card-text');
        let img = elCard.querySelector('.card-img-top');
        let year = elCard.querySelector('.js-year');
        let rating = elCard.querySelector('.js-rating');


        title.textContent = movie.title;
        categories.textContent = movie.categories;
        img.src = movie.bigPoster;
        img.height = "150";
        year.textContent = 'Year' + ' ' + movie.year;
        rating.textContent = 'Rating' + ' ' + movie.imdbRating + '⭐';


        elWarapper.appendChild(elCard)
    });
};



let getMovieGenres = (array) => {
    let categories = []
    array.forEach((item) => {
        item.categories.forEach(category => {
            if (!categories.includes(category)) {
                categories.push(category);
            }
        });
    });

    return categories;
};


let renderCategories = () => {
    let allCategories = getMovieGenres(KINOLAR);
    allCategories.forEach((category) => {
        let elOption = document.createElement('option');

        elOption.textContent = category;
        elOption.value = category;

        elSelect.appendChild(elOption);
    })
};

renderCategories()



let handleFilter = (evt) => {
    evt.preventDefault();

    let filteredMovies = [];
    let selectValue = elSelect.value;

    let elSearchValue = elSearch.value.trim()

    let regex = new RegExp(elSearchValue, 'gi')

    if (selectValue === 'all') {
        filteredMovies = KINOLAR;
    }
    else {
        filteredMovies = KINOLAR.filter((movie) => movie.categories.includes(selectValue));
    }


    let foundMovies = filteredMovies.filter((movie) => movie.title.match(regex));

    lo

    renderMovies(foundMovies);
};


elForm.addEventListener('submit', handleFilter);
renderMovies(KINOLAR);