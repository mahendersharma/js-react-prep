import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [debbounce, setDebbounce] = useState(null);

  useEffect(() => {
    let handleDebbounce = setTimeout(() => {
      setDebbounce(search);
    }, 500);

    return () => clearTimeout(handleDebbounce);
  }, [search]);

  useEffect(() => {
    if (debbounce) {
      console.log('debbounce now working', debbounce);
    }
  }, [debbounce]);
  return (
    <div>
      <input
        type="text"
        placeholder="search debounce..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
