"use client"

import React, {useState} from 'react'
import { SearchManufacturer } from './'

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")

    const handelSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handelSearch}>
        <div className="searchBar__item">
            <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer} />
        </div>
    </form>
  )
}

export default SearchBar