import { useEffect, useState } from 'react';
import Input from '../../components/input/Input/Input';

import './SearchPage.css';
import { Category, getIconPath, simplifyText } from '../../utils/items';
import { useQuery } from 'react-query';
import { getCategories } from '../../api/api';
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
  const { data } = useQuery('categories', getCategories);

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
              key={category.id}
              className="item-container"
              to={{ pathname: MAP_PATH, state: { category } }}
              style={{ textDecoration: 'none' }}
            >
              <Button
                onClick={() => null}
                width={210}
                height={210}
                borderRadius={50}
                style={{}}
                data-testid="item-button"
              >
                <Scale className="text-container clear">
                  <img
                    className="item-icon"
                    src={getIconPath(category.name)}
                    alt="Item icon"
                  />
                  <div className="item-text axiforma-medium-blue-18px">
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
      <h1 className="search-title axiforma-bold-blue-70px">
        {'Que cherchez-vous ?'}
      </h1>
      <Input
        setKeyword={setKeyword}
        defaultText="Rechercher"
        width={550}
        style={{ marginTop: 50 }}
        isPassword={false}
        enterHandler={() => null}
      />
      <div className="result-grid">{buttons}</div>
      <LogOut />
    </div>
  );
}
