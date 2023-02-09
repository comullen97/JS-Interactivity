console.log('Hello, World!')

const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input');

    const movie = document.createElement('li');

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    const list = document.querySelector("ul");
    list.appendChild(movie);

    inputField.value = ''
}

document.querySelector("form").addEventListener("Submit", addMovie);

function deleteMovie(event) {
  message.textContent = 'Movie deleted!'
  event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
    if(event.target.classList.toggle.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}
