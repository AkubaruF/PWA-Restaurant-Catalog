import UrlParser from '../../routes/url-parser'
import TheMovieDbSource from '../../data/therestaurantdb-source'
import { createMovieDetailTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const Detail = {
    async render() {
        return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer">
      </div>
    `
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner()
        const movie = await TheMovieDbSource.detailMovie(url.id)
        const movieContainer = document.querySelector('#movie')
        movieContainer.innerHTML = createMovieDetailTemplate(movie)

        const movieFood = movie.menus.foods
        const movieBeverage = movie.menus.drinks
        const foodContainer = document.querySelector('#foodContainer')
        const beverageContainer = document.querySelector('#beverageContainer')
        movieFood.forEach((Food) => {
            const foodName = document.createElement('p')
            foodName.innerText = Food.name
            foodContainer.append(foodName)
        })
        movieBeverage.forEach((Beverage) => {
            const beverageName = document.createElement('p')
            beverageName.innerText = Beverage.name
            beverageContainer.append(beverageName)
        })

        const reviewList = document.querySelector('.restaurant_list')
        movie.customerReviews.forEach((Review) => {
            const reviewArticle = document.createElement('article')
            reviewArticle.classList.add('restaurant')
            const reviewName = document.createElement('h3')
            reviewName.innerText = Review.name
            const reviewDate = document.createElement('h4')
            reviewDate.innerText = Review.date
            const reviewDescription = document.createElement('p')
            reviewDescription.innerText = Review.review
            reviewArticle.appendChild(reviewName)
            reviewArticle.appendChild(reviewDate)
            reviewArticle.appendChild(reviewDescription)
            reviewList.append(reviewArticle)
        })

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            movie: {
                id: movie.id,
                name: movie.name,
                description: movie.description,
                city: movie.city,
                address: movie.address,
                pictureId: movie.pictureId,
                categories: movie.categories,
                menus: movie.menus,
                rating: movie.rating,
                customerReviews: movie.customerReviews
            }
        })
    }
}

export default Detail
