import { useEffect, useState } from 'react';
import Input from '../../components/input/Input/Input';

import './SearchPage.css';
import { Category, getIconPath, simplifyText } from '../../utils/items';
//import { useQuery } from 'react-query';
//import { getCategories } from '../../api/api';
import LogOut from '../../components/button/LogOut/LogOut';
import { MAP_PATH } from '../../App';
import Button from '../../components/button/Button/Button';
import { Scale } from '../../utils/animations';
import { Link } from 'react-router-dom';

/**
 * The search page where the user can browse the different item categories.
 */
export default function SearchPage() {
  const [categories, setCategories] = useState([] as Category[]);
  //const { data } = useQuery('categories', getCategories);
  const data: Category[] = [
    { id: 0, name: 'Aliment' },
    { id: 1, name: 'Bouteille O2' },
    { id: 2, name: 'Chariot' },
    { id: 3, name: 'ECG' },
    { id: 4, name: 'Electrocoagulation' },
    { id: 5, name: 'Lit' },
    { id: 6, name: 'Module Draeger et CO2' },
    { id: 7, name: 'Ordinateur' },
    { id: 8, name: 'ORL Manche' },
    { id: 9, name: 'Oxygène' },
    { id: 10, name: 'Scialytique' },
    { id: 11, name: 'SMUR' },
    { id: 12, name: 'Ultrason' },
  ]; // delete this

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  const [keyword, setKeyword] = useState('');
  const [buttons, setButtons] = useState([<div />]);
  useEffect(
    () =>
      setButtons(
        categories
          .filter(
            (category) =>
              keyword === '' ||
              simplifyText(category.name).includes(simplifyText(keyword))
          )
          .map((category) => (
            <Link
              key={category.name}
              className="item-container"
              to={{ pathname: MAP_PATH, state: { category } }}
              style={{ textDecoration: 'none' }}
            >
              <Button
                onClick={() => null}
                width={160}
                height={160}
                borderRadius={30}
                blur={5}
                shadowOffset={15}
                surfaceGradient={true}
                style={{}}
                data-testid="item-button"
              >
                <Scale className="text-container clear">
                  <img
                    className="item-icon"
                    src={getIconPath(category.name)}
                    alt="Item icon"
                  />
                  <div className="item-text font-axiforma-medium text-blue text-small">
                    {' '}
                    {category.name}{' '}
                  </div>
                </Scale>
              </Button>
            </Link>
          ))
      ),
    [categories, keyword]
  );

  return (
    <div className="search-page">
      <h1 className="search-title font-axiforma-bold text-blue text-title">
        {'Que cherchez-vous ?'}
      </h1>
      <Input
        setKeyword={setKeyword}
        defaultText="Rechercher"
        width={300}
        style={{ marginTop: 25 }}
        isPassword={false}
        enterHandler={() => null}
      />
      <div className="result-grid">{buttons}</div>
      <LogOut />
    </div>
  );
}
