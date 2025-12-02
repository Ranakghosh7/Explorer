import React from 'react';

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="search">
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search movies..." />
      <button type="submit">Search</button>
    </form>
  );
}
