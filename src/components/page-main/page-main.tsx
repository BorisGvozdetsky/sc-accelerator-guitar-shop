import { useSelector } from 'react-redux';
import { getGuitars, getIsDataLoaded } from '../../store/guitars-data/selectors';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import Guitar from '../guitar/guitar';
import Header from '../header/header';
import Pagination from '../pagination/pagination';
import Sort from '../sort/sort';
import Spinner from '../spinner/spinner';

function PageMain(): JSX.Element {
  const guitars = useSelector(getGuitars);
  const isDataLoaded = useSelector(getIsDataLoaded);

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link" href="!#">Каталог</a>
            </li>
          </ul>
          <div className="catalog">
            <Filter/>
            <Sort/>
            {!isDataLoaded ? <Spinner/> :
              <div className="cards catalog__cards">
                {guitars.map((guitar) => <Guitar key={guitar.id} guitar={guitar}/>)}
              </div>}
            <Pagination/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default PageMain;
