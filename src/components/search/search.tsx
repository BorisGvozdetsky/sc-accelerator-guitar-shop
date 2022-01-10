import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchValue } from '../../store/action';
import { getGuitars } from '../../store/guitars-data/selectors';
import { filterGuitarByName } from '../../utils';

function Search(): JSX.Element {
  const guitars = useSelector(getGuitars);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const targetValue = evt.target.value;
    const filteredGuitars = filterGuitarByName(guitars, targetValue);

    setInputValue(targetValue);
    dispatch(setSearchValue(targetValue));

    targetValue.length > 0 && filteredGuitars.length > 0 ? setDropdownOpen(true) : setDropdownOpen(false);
  };

  const handleGuitarClick = (name: string) => {
    setInputValue(name);
    dispatch(setSearchValue(name));
    setInputValue('');
    setDropdownOpen(false);
  };

  return (
    <div className="form-search">
      <form className="form-search__form">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg><span className="visually-hidden">Начать поиск</span>
        </button>
        <input
          className="form-search__input"
          id="search"
          type="text"
          autoComplete="off"
          placeholder="что вы ищите?"
          value={`${inputValue}`}
          onChange={handleInputChange}
        />
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul className={`form-search__select-list ${!dropdownOpen ? 'hidden' : ''}`} style={{zIndex: 1000}}>
        {filterGuitarByName(guitars, inputValue).map((guitar) => (
          <li key={guitar.id} className="form-search__select-item" tabIndex={0}>
            <Link to={`/guitars/${guitar.id}`} onClick={() => handleGuitarClick(guitar.name)} style={{color: 'inherit'}}>{guitar.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
