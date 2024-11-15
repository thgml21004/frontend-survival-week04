import React from 'react';

type SearchBoxProps = {
    placeholder: string;
    filterText: string;
    setFilterText: (text: string) => void;
}

export default function SearchBox({
  placeholder, filterText, setFilterText,
}: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // console.log(value);
    setFilterText(value);
  };

  return (
    <div>
      검색
      <input
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
