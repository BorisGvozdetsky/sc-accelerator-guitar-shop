import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Guitar } from '../../types/guitar';
import Rating from '../rating/rating';

type GuitarProps = {
  guitar: Guitar;
}

function Guitars(props: GuitarProps): JSX.Element {
  const {guitar} = props;
  const {id, name, previewImg, rating, price} = guitar;

  return (
    <div className="product-card"><img src={`img/content/${previewImg.split('/')[1]}`} width="75" height="190" alt={name}/>
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
          <Rating rating={rating}/>
          <span className="rate__count">{rating}</span>
          <span className="rate__message"></span>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`${AppRoute.Product}/${id}`}>Подробнее</Link>
        <a className="button button--red button--mini button--add-to-cart" href="!#">Купить</a>
      </div>
    </div>
  );
}

export default Guitars;
