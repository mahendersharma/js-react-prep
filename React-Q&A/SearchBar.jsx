import React, { useState, useEffect } from 'react';

const items = [
  {
    id: 1,
    name: 'Apple MacBook Pro',
    category: 'Electronics',
    tags: ['laptop', 'apple', 'mac'],
  },
  {
    id: 2,
    name: 'Nike Air Max',
    category: 'Footwear',
    tags: ['shoes', 'nike', 'running'],
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    category: 'Electronics',
    tags: ['headphones', 'sony', 'audio'],
  },
  {
    id: 4,
    name: 'Levi’s Slim Fit Jeans',
    category: 'Clothing',
    tags: ['jeans', 'denim', 'levis'],
  },
  {
    id: 5,
    name: 'Samsung Galaxy S23',
    category: 'Electronics',
    tags: ['smartphone', 'android', 'samsung'],
  },
  {
    id: 6,
    name: 'Puma Running Shoes',
    category: 'Footwear',
    tags: ['puma', 'shoes', 'sports'],
  },
  {
    id: 7,
    name: 'Apple iPhone 15',
    category: 'Electronics',
    tags: ['smartphone', 'apple', 'ios'],
  },
  {
    id: 8,
    name: 'Roadster Cotton T-Shirt',
    category: 'Clothing',
    tags: ['tshirt', 'roadster', 'casual'],
  },
  {
    id: 9,
    name: 'Canon EOS R8 Camera',
    category: 'Electronics',
    tags: ['camera', 'canon', 'photography'],
  },
  {
    id: 10,
    name: 'Dell Inspiron Laptop',
    category: 'Electronics',
    tags: ['laptop', 'dell', 'windows'],
  },
];

function SearchBar() {
  const [search, setSearch] = useState('');
  const [itemSelect, setItemSelect] = useState('');
  const [debbounce, setDebbounce] = useState('');

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebbounce(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  const searchLower = debbounce.toLowerCase();

  const filterData = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  const styles = {
    container: {
      width: '500px',
      margin: '40px auto',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '10px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      border: '1px solid #ccc',
      borderRadius: '5px',
      maxHeight: '300px',
      overflowY: 'auto',
    },
    listItem: {
      padding: '10px',
      borderBottom: '1px solid #eee',
      cursor: 'pointer',
    },
    listItemHover: {
      backgroundColor: '#f5f5f5',
    },
    selected: {
      backgroundColor: '#e6f7ff',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #91d5ff',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search by name, category, or tag..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        style={styles.input}
      />

      {itemSelect && (
        <div style={styles.selected}>
          Selected: <strong>{itemSelect}</strong>
        </div>
      )}

      <ul style={styles.list}>
        {filterData.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setItemSelect(item.name);
              setSearch(item.name);
            }}
            style={styles.listItem}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#f0f0f0')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'white')
            }
          >
            <strong>{item.name}</strong> <br />
            <small>{item.category}</small> <br />
            <span style={{ color: '#888' }}>{item.tags.join(', ')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
