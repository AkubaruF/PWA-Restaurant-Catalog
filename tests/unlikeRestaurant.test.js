import FavoriteMovieIdb from '../src/scripts/data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

describe('Unliking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>'
    }

    beforeEach(async () => {
        addLikeButtonContainer()
        await FavoriteMovieIdb.putMovie({ id: 1 })
    })

    afterEach(async () => {
        await FavoriteMovieIdb.deleteMovie(1)
    })

    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
        expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy()
    })

    it('should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
        expect(document.querySelector('[aria-label="like this movie"]')).toBeFalsy()
    })

    it('should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
        document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'))
        expect(await FavoriteMovieIdb.getAllMovies()).toEqual([])
    })

    it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
        // Hapus dulu film dari daftar film yang disukai
        await FavoriteMovieIdb.deleteMovie(1)

        // Kemudian, simulasikan pengguna menekan widget batal menyukai film
        document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'))

        expect(await FavoriteMovieIdb.getAllMovies()).toEqual([])
    })
})
