import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r =>r.json())
    .then(listings => setListings(listings))
  }, [])

function handleDeleteListing(id) {
  const updatedListingsArray = listings.filter(listing => listing.id !== id)
  setListings(updatedListingsArray)
}

const filteredListings = listings.filter(listing => {
  return listing.description.toLowerCase().includes(search.toLowerCase())
})

console.log(filteredListings)

  const listingsCards = filteredListings.map(listingObj => {
    return <ListingCard 
    key={listingObj.id} 
    listing={listingObj}
    handleDeleteListing={handleDeleteListing}/>
  })

  return (
    <main>
      <ul className="cards">
        {listingsCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
