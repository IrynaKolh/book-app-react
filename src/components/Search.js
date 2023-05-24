import React from 'react'

const Search = ({setSearch }) => {
  return (
    <div className="search">
      <input 
          type="text" 
          placeholder="Search Books..."
          onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  )
}

export default Search