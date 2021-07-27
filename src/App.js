import { useState } from 'react';
import items from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';

const uniqueCategories = new Set(items.map(item => item.category));
let allCategories = ['all', ...uniqueCategories];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    let newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
