import { useState, useCallback } from "react";
import { debounce } from "../utils/debounce";

export function useSearch(initialDelay = 300) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const debouncedSetSearch = useCallback(
    debounce((value) => setDebouncedSearch(value), initialDelay),
    []
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    debouncedSetSearch(e.target.value);
  };

  return { search, debouncedSearch, handleSearchChange };
}