import TheMovieDbSource from '../../data/therestaurantdb-source'
import { createMovieItemTemplate } from '../templates/template-creator'
/* <div class="jumbotron">
    <img src="./images/heros/hero-image_2.jpg" alt="Hero Image"></img>
</div> */
const NowPlaying = {
    async render() {
        return `
        <picture class="jumbotron">
            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
            <img src="./images/heros/hero-image_2-large.jpg" alt="Hero Image">
        </picture>

        <section class="daftarrestoran">
            <h2>Explore Restaurant</h2>
            <div class="restaurant_list">
            </div>
        </section>
    `
    },

    async afterRender() {
        const movies = await TheMovieDbSource.nowPlayingMovies()
        const moviesContainer = document.querySelector('.restaurant_list')
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplate(movie)
        })
    }
}

export default NowPlaying
