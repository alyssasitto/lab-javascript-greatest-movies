// The `movies` array from the file `src/data.js`.

// const movies = require('./data');

const movies = require('./data');

// // Iteration 1: All directors? - Get the array of all directors.
// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// // How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(movies) {
//   return movies.map((movie) => movie.director);
// }

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(movies) {
//   const stevenArr = movies.filter(
//     (movie) =>
//       movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
//   );

//   return stevenArr.length;
// }

// // Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(myMovies) {
//   if (!myMovies.length) {
//     return 0;
//   } else {
//     const total = myMovies.reduce((acc, curVal) => {
//       if (curVal.score) {
//         return acc + curVal.score;
//       } else {
//         return acc;
//       }
//     }, 0);
//     console.log(Number((total / myMovies.length).toFixed(2)));
//     return Number((total / myMovies.length).toFixed(2));
//   }
// }

// // Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(myMovies) {
//   const myDramaMovies = myMovies.filter((element) =>
//     element.genre.includes('Drama')
//   );
//   const avg = scoresAverage(myDramaMovies);
//   return avg;
// }

// // console.log(dramaMoviesScore(movies));

// // console.log(dramaMoviesScore(movies));

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(myMovies) {
//   const copy = myMovies.slice();
//   const newArr = copy.sort((a, b) => {
//     if (a.year === b.year) {
//       return a.title.localeCompare(b.title);
//     } else {
//       return a.year - b.year;
//     }
//   });
//   return newArr;
// }

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(myMovies) {
//   const titles = myMovies.map((movie) => movie.title);
//   titles.sort((a, b) => a.localeCompare(b));
//   const top20 = titles.slice(0, 20);
//   return top20;
// }

// // orderAlphabetically(movies);
// // console.log(orderAlphabetically(movies));

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes() {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg() {}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const stevenMovies = moviesArray.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });

  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length < 1) {
    return 0;
  }

  let sum = moviesArray.reduce((total, curVal) => {
    if (!curVal.score) {
      return total;
    } else {
      return (total += curVal.score);
    }
  }, 0);

  sum = (sum / moviesArray.length).toFixed(2);
  return Number(sum);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((movie) => movie.genre.includes('Drama'));
  if (dramas.length < 1) {
    return 0;
  }
  const sum = dramas.reduce((total, curVal) => {
    if (!curVal) {
      return 0;
    } else {
      return (total += curVal.score);
    }
  }, 0);

  let avg = sum / dramas.length;
  return Number(avg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = [...moviesArray];
  const sorted = newArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArr = [...moviesArray];
  newArr.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const titles = newArr.map((movie) => movie.title);

  if (titles.length < 20) {
    return titles;
  } else {
    return titles.splice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArr = [...moviesArray];
  for (let i = 0; i < newArr.length; i++) {
    let duration = newArr[i].duration;

    const hours = duration.slice(duration.indexOf('h') - 1, 1);

    let minutes = duration.slice(duration.indexOf('m') - 2, 5);

    let hoursToMins = hours * 60;

    if (duration.indexOf('min') === -1) {
      newArr[i].duration = hoursToMins;
      return newArr;
    } else {
      let total = hoursToMins + Number(minutes);
      newArr[i].duration = total;
      return newArr;
    }
    // const minutes = duration.slice(duration.indexOf("min") - 1, 1);
  }
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
