class Movie {
    constructor(title, description, date, rating) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.rating = rating;
    }
}

const movies = [
    new Movie('Psycho', 'A classic thriller by Alfred Hitchcock.', 1960, 5),
    new Movie('Toy Story', 'A heartwarming Pixar film.', 1995, 5),
    new Movie('Spirited Away', 'An enchanting anime by Studio Ghibli.', 2001, 5),
    new Movie('Casablanca', 'A classic romance set during WWII.', 1942, 5),
    new Movie('13th', 'A documentary on racial inequality in the US.', 2016, 5),
    new Movie('The Exorcist', 'A terrifying film about a young girl possessed by a demon.', 1973, 5),
    new Movie('Se7en', 'A thriller about a serial killer, directed by David Fincher.', 1995, 5),
    new Movie('Moonlight', 'A moving drama about identity and love.', 2016, 5),
];

function afficher(allMovies) {
    let tableBody = document.getElementById('tbodyMovie');
    tableBody.innerHTML = '';

    for (let y = 0; y < allMovies.length; y++) {
        let movie = allMovies[y];
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.description}</td>
            <td>${movie.date}</td>
            <td>${movie.rating}</td>
            <td><button onclick="deleteMovie(${y})">Remove</button></td>
        `;
        tableBody.appendChild(row);
    }
}

function deleteMovie(index) {
    movies.splice(index, 1);
    afficher(movies);
}

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));
    afficher(filteredMovies);
}

document.getElementById('searchButton').addEventListener('click', searchMovies);

document.getElementById('ajouter').addEventListener('click', function (event) {
    event.preventDefault();

    const title = document.getElementById('titre').value;
    const description = document.getElementById('Description').value;
    const date = document.getElementById('Date').value;
    const rating = document.getElementById('Rating').value;

    if (title && description && date && rating) {
        const newMovie = new Movie(title, description, date, rating);
        movies.push(newMovie);
        afficher(movies);
  
        document.getElementById('myForm').reset();
        document.getElementById('myForm').style.display = 'none';
    }
});

document.querySelector('.movie').addEventListener('click', function () {
    const table = document.querySelector('table');
    table.style.display = table.style.display === 'none' ? 'table' : 'none';
    afficher(movies);
});

document.querySelector('.addmovie').addEventListener('click', function () {
    const form = document.getElementById('myForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});