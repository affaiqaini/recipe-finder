import { useState } from 'react';

export function SearchBar({ onSearch, placeholder = "Search recipes..." }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   shadow-sm text-gray-900"
        aria-label="Search recipes"
      />
      <svg
        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}