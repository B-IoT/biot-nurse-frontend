import { useEffect, useState } from 'react';
import Input from '../../components/input/Input/Input';
import ItemButton from '../../components/button/ItemButton/ItemButton';
import PlaceholderButton from '../../components/button/ItemButton/PlaceholderButton';

import './SearchPage.css';
import { Category, simplifyText } from '../../utils/items';
import { useQuery } from 'react-query';
import { getCategories } from '../../api/api';
import LogOut from '../../components/button/LogOut/LogOut';

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
  const [buttons, setButtons] = useState([
    <PlaceholderButton key="PlaceholderButton_init" />,
  ]);
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
            <ItemButton key={category.id} category={category} />
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
