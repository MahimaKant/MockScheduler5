const skills = [
    {name: 'JAVA-2'},
    {name: 'JAVA'},
    {name: 'PYTHON'},
    {name: 'C++'}
  ];
  
  const searchInput = document.querySelector('.search-input');
  const suggestionsPanel = document.querySelector('.suggestions');
  
  searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    suggestionsPanel.innerHTML = '';
    const suggestions = skills.filter(function(country) {
      return country.name.toLowerCase().startsWith(input);
    });
    suggestions.forEach(function(suggested) {
      const div = document.createElement('div');
      div.innerHTML = suggested.name;
      suggestionsPanel.appendChild(div);
    });
    if (input === '') {
      suggestionsPanel.innerHTML = '';  
    }
  })
  
  
  
  
 /*
 import React from "react";
 import PlacesAutocomplete, {
   geocodeByAddress,
   getLatLng
 } from "react-places-autocomplete";
 
 export default function auto() {
   const [address, setAddress] = React.useState("");
   const [coordinates, setCoordinates] = React.useState({
     lat: null,
     lng: null
   });
 
   const handleSelect = async value => {
     const results = await geocodeByAddress(value);
     const latLng = await getLatLng(results[0]);
     setAddress(value);
     setCoordinates(latLng);
   };
 
   return (
     <div>
       <PlacesAutocomplete
         value={address}
         onChange={setAddress}
         onSelect={handleSelect}
       >
         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
           <div>
             <p>Latitude: {coordinates.lat}</p>
             <p>Longitude: {coordinates.lng}</p>
 
             <input {...getInputProps({ placeholder: "Type address" })} />
 
             <div>
               {loading ? <div>...loading</div> : null}
 
               {suggestions.map(suggestion => {
                 const style = {
                   backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                 };
 
                 return (
                   <div {...getSuggestionItemProps(suggestion, { style })}>
                     {suggestion.description}
                   </div>
                 );
               })}
             </div>
           </div>
         )}
       </PlacesAutocomplete>
     </div>
   );
 }

*/
