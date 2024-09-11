import CONFIG from '../../globals/config'

const createMovieDetailTemplate = (movie) => `
  <div class="content">
    <aside>
      <figure>
          <img loading="lazy" class="movie__poster lazyload" src="${CONFIG.BASE_IMAGE_URL + movie.pictureId}" alt="${movie.name}" />
      </figure>
    </aside>
    <div class="movie__info">
      <h2>${movie.name}</h2>
      <h3>‎</h3>

      <h3>Information</h3>
      <h4>City</h4>
      <p>${movie.city}</p>
      <h4>Adress</h4>
      <p>${movie.city}</p>
      <h4>Rating</h4>
      <p>⭐️${movie.rating}</p>
      <h3>Overview</h3>
      <p>${movie.description}</p>
    </div>
  </div>
  <div>
    <div class="foodAndBeverageContainer">
        <div class="foodContainer" id="foodContainer">
          <h3 class="foodTitle">Food</h3>
        </div>
        <div class="foodContainer" id="beverageContainer">
          <h3 class="foodTitle">Beverage</h3>
        </div>
    </div>

    <h3>‎</h3>

    <section class="daftarrestoran">
        <h2>Reviews</h2>
        <div class="restaurant_list">
        </div>
    </section>
  </div>
`

const createMovieItemTemplate = (movie) => `
    <article class="restaurant">
        <img class="lazyload" loading="lazy" src="${CONFIG.BASE_IMAGE_URL + movie.pictureId}" alt="${movie.name}">
        <h4>Rating: ⭐️${movie.rating}</h4>
        <h3><a id="${movie.id}" href="/#/detail/${movie.id}">${movie.name}</a></h3>
        <p>${movie.description.slice(0, 201)}.....</p>
    </article>
`
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     ♡
  </button>
`
// < i class="fa fa-heart-o" aria - hidden="true" ></i >
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    ❤️
  </button>
`
// < i class="fa fa-heart" aria - hidden="true" ></i >
export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
