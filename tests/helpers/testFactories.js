import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'
const createLikeButtonPresenterWithRestaurant = async (movie) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        movie
    })
}
export { createLikeButtonPresenterWithRestaurant }
