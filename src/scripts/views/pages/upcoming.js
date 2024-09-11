import FavoriteMovieIdb from '../../data/favorite-restaurant-idb'
import { createMovieItemTemplate } from '../templates/template-creator'

const Upcoming = {
  async render() {
    return `
      <section class="daftarrestoran">
        <h2>Your Liked Restaurant</h2>
        <div class="restaurant_list">

        </div>
      </section>
    `
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies()
    const moviesContainer = document.querySelector('.restaurant_list')

    if (movies.length === 0) {
      moviesContainer.innerHTML += '<div class="movie-item__not__found">Tidak ada restaurant untuk ditampilkan</div>'
    } else {
      movies.forEach((movie) => {
        moviesContainer.innerHTML += createMovieItemTemplate(movie)
      })
    }
  }
}

export default Upcoming
