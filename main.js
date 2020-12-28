const movies = [
  {
    title: 'Enola Holmes',
    rating: '77',
    poster: './img/movies/1.jpg',
    releaseDate: '23 Sep 2020',
  },
  {
    title: 'Money Plane',
    rating: '60',
    poster: './img/movies/2.jpg',
    releaseDate: '29 Sep 2020',
  },
  {
    title: 'The Innocence',
    rating: '62',
    poster: './img/movies/3.jpg',
    releaseDate: '10 Jan 2020',
  },
  {
    title: 'Mulan',
    rating: '74',
    poster: './img/movies/4.jpg',
    releaseDate: '04 Sep 2020',
  },
  {
    title: 'Hard Kill',
    rating: '50',
    poster: './img/movies/5.jpg',
    releaseDate: '04 Sep 2020',
  },
  {
    title: 'Secret Society of 2nd',
    rating: '72',
    poster: './img/movies/6.jpg',
    releaseDate: '25 Sep 2020',
  },
  {
    title: 'Ava',
    rating: '60',
    poster: './img/movies/7.jpg',
    releaseDate: '02 Jul 2020',
  },
  {
    title: 'Santana',
    rating: '57',
    poster: './img/movies/8.jpg',
    releaseDate: '28 Aug 2020',
  },
  {
    title: 'Rogue',
    rating: '59',
    poster: './img/movies/9.jpg',
    releaseDate: '20 Aug 2020',
  },
  {
    title: 'Unknown Origins',
    rating: '62',
    poster: './img/movies/10.jpg',
    releaseDate: '28 Aug 2020',
  },
  {
    title: 'Peninsula',
    rating: '71',
    poster: './img/movies/11.jpg',
    releaseDate: '15 Jul 2020',
  },
  {
    title: 'Cats & Dogs 3: Paws Unite',
    rating: '67',
    poster: './img/movies/12.jpg',
    releaseDate: '02 Oct 2020',
  },
  {
    title: 'One Night in Bangkok',
    rating: '72',
    poster: './img/movies/13.jpg',
    releaseDate: '25 Aug 2020',
  },
  {
    title: 'Project Power',
    rating: '66',
    poster: './img/movies/14.jpg',
    releaseDate: '14 Aug 2020',
  },
  {
    title: 'Let It Snow',
    rating: '53',
    poster: './img/movies/15.jpg',
    releaseDate: '22 Sep 2020',
  },
  {
    title: 'Phineas and Ferb',
    rating: '71',
    poster: './img/movies/16.jpg',
    releaseDate: '28 Aug 2020',
  },
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

window.onload = function () {
  const sortedMovies = getSortedMovies(movies);
  getformattedRealeaseDate();
  displayMovies(sortedMovies);
  console.log(movies);
};

// Showing movies
const displayMovies = function () {
  // Clear the moviesGrid
  moviesGrid.innerHTML = '';
  movies.forEach((movie) => {
    moviesGrid.innerHTML += `
    <div class="movie">
      <img
        src="${movie.poster}"
        alt="Reload the Page"
        class="movie__poster"
      />
      <div class="movie__content">
        <div class="movie__rating">
          <img src="./img/tomato.svg" alt="" />
          <p>${movie.rating}</p>
        </div>
        <h2 class="movie__title">${movie.title}</h2>
        <p class="movie__date">${movie.releaseDate}</p>
      </div>  
    </div>`;
  });
};

/* 
  Sorting the array based on
  * @param sortArr 
*/
const getSortedMovies = function (movies, sortArr = 'rating_desc') {
  const [sortBy, sorting] = sortArr.split('_');
  for (let i = 0; i < movies.length - 1; i++) {
    for (let j = i + 1; j < movies.length; j++) {
      if (
        (sorting === 'desc' && movies[i][sortBy] < movies[j][sortBy]) ||
        (sorting === 'asce' && movies[i][sortBy] > movies[j][sortBy])
      ) {
        // const temp = movies[i];
        [movies[i], movies[j]] = [movies[j], movies[i]];
        // movies[j] = temp;
      }
    }
  }
  return movies;
};

searchBTN.addEventListener('click', function () {
  this.classList.add('active');
  const sorting = sortBy.value;
  const sortedMovies = getSortedMovies(movies, sorting);
  displayMovies(sortedMovies);
});

// remove active class after animation ends
searchBTN.addEventListener('animationend', function () {
  this.classList.remove('active');
});

// Get a formatted Date and create a property in movie
const getformattedRealeaseDate = function () {
  movies.forEach((movie) => {
    const [date, month, year] = movie.releaseDate.split(' ');
    const monthIndex = months.indexOf(month) + 1;
    const formattedReleaseDate = `${String(monthIndex).padStart(
      2,
      '0'
    )}/${date}/${year}`;
    movie.formattedReleaseDate = formattedReleaseDate;
  });
};
