import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGuitar } from '../../store/api-action';
import { getGuitar, getIsGuitarError, getIsGuitarLoading } from '../../store/guitars-data/selectors';
import Header from '../header/header';
import NotFound from '../not-found/not-found';
import Rating from '../rating/rating';
import Reviews from '../reviews/reviews';
import Spinner from '../spinner/spinner';

function Product(): JSX.Element {
  const guitar = useSelector(getGuitar);
  const isGuitarLoading = useSelector(getIsGuitarLoading);
  const isGuitarError = useSelector(getIsGuitarError);

  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchGuitar(id));
  },[dispatch, id]);


  const renderGuitar = () => {
    if (isGuitarLoading) {
      return <Spinner />;
    }

    if (guitar) {
      const {name, rating, vendorCode, type, stringCount, price, description, previewImg} = guitar;
      return (
        <>
          <div className="product-container"><img className="product-container__img" src={`../img/content/${previewImg.split('/')[1]}`} width="90" height="235" alt=""/>
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
              <div className="rate product-container__rating" aria-hidden="true"><span className="visually-hidden"><Rating rating={rating}/></span>
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-full-star"></use>
                </svg>
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-full-star"></use>
                </svg>
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-full-star"></use>
                </svg>
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-full-star"></use>
                </svg>
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg><span className="rate__count"></span><span className="rate__message"></span>
              </div>
              <div className="tabs"><a className="button button--medium tabs__button" href="#characteristics">Характеристики</a><a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
                <div className="tabs__content" id="characteristics">
                  <table className="tabs__table">
                    <tbody>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Артикул:</td>
                        <td className="tabs__value">{vendorCode}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Тип:</td>
                        <td className="tabs__value">{type}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Количество струн:</td>
                        <td className="tabs__value">{stringCount} струнная</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="tabs__product-description hidden">{description}</p>
                </div>
              </div>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{price}</p><a className="button button--red button--big product-container__button" href="!#">Добавить в корзину</a>
            </div>
          </div>
          <Reviews/>
        </>
      );
    }
  };
  return (
    <div>
      {isGuitarError ?
        <NotFound /> :
        <div className="wrapper">
          <Header/>
          <main className="page-content">
            <div className="container">
              <h1 className="page-content__title title title--bigger">Товар</h1>
              <ul className="breadcrumbs page-content__breadcrumbs">
                <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
                </li>
                <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
                </li>
                <li className="breadcrumbs__item"><a className="link">Товар</a>
                </li>
              </ul>
              {renderGuitar()}
            </div>
          </main>
        </div>}
    </div>
  );
}

export default Product;
