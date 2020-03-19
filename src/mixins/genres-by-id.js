export default {
 methods: {
   getGenresById (id) {
     let cinemaGenres = [];
     id.forEach(i => {
       this.movieGenres.forEach((genres) => {
         if (genres.id === i) {
           cinemaGenres.push(genres.title);
         }
       });
     });
     return cinemaGenres.join(', ');
   },
 }
};