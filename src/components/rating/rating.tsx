type RatingProps = {
  rating: number;
}

const STARS_COUNT = 5;


function Rating(props: RatingProps): JSX.Element {

  const {rating} = props;
  const minRating = Math.floor(rating);
  const ratingStars: string[] = new Array(STARS_COUNT).fill(null);
  return (
    <>
      {ratingStars.slice(0, minRating).map(() => (
        <svg key={Math.random()} width="12" height="11" aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>
      ))}
      {ratingStars.slice(minRating, STARS_COUNT).map(() => (
        <svg key={Math.random()} width="12" height="11" aria-hidden="true">
          <use xlinkHref="#icon-star"></use>
        </svg>
      ))}
    </>
  );
}

export default Rating;
