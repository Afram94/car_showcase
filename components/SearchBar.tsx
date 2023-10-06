"use client"

import React, {useState} from 'react'
import { SearchManufacturer } from './'
import  Image  from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses } : {otherClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();

    /**
 * Handles the search functionality of a form.
 * 
 * @param e - The event object for the form submission.
 */
const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();  // Prevents the form from being submitted in the default manner.

  // Checks if both the manufacturer and model inputs are empty.
  if(manufacturer === "" && model === "") {
      return alert("please fill in the search bar");  // Alerts the user to fill in the search bar.
  }

  // Converts both inputs to lowercase and updates the search parameters accordingly.
  updateSearchParams(model.toLocaleLowerCase(), manufacturer.toLocaleLowerCase());
}

/**
* Updates the search parameters of the current URL based on the provided model and manufacturer.
* 
* @param model - The model value to be set in the search parameters.
* @param manufacturer - The manufacturer value to be set in the search parameters.
*/
const updateSearchParams = (model: string, manufacturer: string) => {
  const searchParams = new URLSearchParams(window.location.search);  // Fetches the current search parameters.

  // Checks if the model is provided and sets/deletes it in the search parameters accordingly.
  if(model){
      searchParams.set("model", model);
  }else {
      searchParams.delete("model");
  }

  // Checks if the manufacturer is provided and sets/deletes it in the search parameters accordingly.
  if(manufacturer){
      searchParams.set("manufacturer", manufacturer);
  }else {
      searchParams.delete("manufacturer");
  }

  // Constructs the new URL with the updated search parameters.
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  // Navigates to the new URL.
  router.push(newPathname);
}


  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer} 
          />

          <SearchButton otherClasses="sm:hidden"/>
        </div>

        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
            alt='car model'
          />
          <input 
            type="text"
            name='model'
            value={model}
            onChange={(e)=> setModel(e.target.value)}
            placeholder='Tiguan'
            className='searchbar__input'
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
            <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar