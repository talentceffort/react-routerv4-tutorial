import React from 'react'

//querystring
const Search = ({ location }) => {
  return (
    <div>
      {new URLSearchParams(location.search).get('keyword')} 검색
    </div>
  )
}

export default Search
