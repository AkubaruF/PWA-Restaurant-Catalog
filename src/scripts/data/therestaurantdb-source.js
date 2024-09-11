import API_ENDPOINT from '../globals/api-endpoint'

class TheMovieDbSource {
    static async nowPlayingMovies() {
        try {
            const response = await fetch(API_ENDPOINT.NOW_PLAYING)
            const responseJson = await response.json()
            return responseJson.restaurants
        } catch (error) {
            console.log(error)
        }
    }

    static async upcomingMovies() {
        try {
            const response = await fetch(API_ENDPOINT.UPCOMING)
            const responseJson = await response.json()
            return responseJson.results
        } catch (error) {
            console.log(error)
        }
    }

    static async detailMovie(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id))
            const responseJson = await response.json()
            return responseJson.restaurant
        } catch (error) {
            console.log(error)
        }
    }
}

export default TheMovieDbSource
