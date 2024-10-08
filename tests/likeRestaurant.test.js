import FavoriteMovieIdb from '../src/scripts/data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>'
    }
    beforeEach(() => {
        addLikeButtonContainer()
    })
    it('should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
        expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy()
    })
    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
        expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy()
    })
    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
        document.querySelector('#likeButton').dispatchEvent(new Event('click'))

        const movie = await FavoriteMovieIdb.getMovie(1)
        expect(movie).toEqual({ id: 1 })
        await FavoriteMovieIdb.deleteMovie(1)
    })

    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
        // Tambahkan film dengan ID 1 ke daftar film yang disukai
        await FavoriteMovieIdb.putMovie({ id: 1 })
        // Simulasikan pengguna menekan tombol suka film
        document.querySelector('#likeButton').dispatchEvent(new Event('click'))
        // Tidak ada film yang ganda
        expect(await FavoriteMovieIdb.getAllMovies()).toEqual([{ id: 1 }])
        await FavoriteMovieIdb.deleteMovie(1)
    })

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({})
        document.querySelector('#likeButton').dispatchEvent(new Event('click'))
        expect(await FavoriteMovieIdb.getAllMovies()).toEqual([])
    })
})
