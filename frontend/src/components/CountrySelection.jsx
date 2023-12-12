// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

const CountrySelection = () => {
  // state for the country, state, city and it functions are also addded
    let countryData = Country.getAllCountries();

    const[stateData, setStateData] = useState();



    const [country, setCountry] = useState(countryData[0]);
    const [state, setState] = useState();

useEffect(()=>{
    setStateData(State.getStatesOfCountry(country?.isoCode));
},[country])

useEffect(()=>{
    stateData && setState(stateData[0])
},[stateData])


//   const [selectedCountry, setSelectedCountry] = useState("");
//   const countries = Country.getAllCountries();
//   console.log("country", countries);

  // function for the selecting the country
//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//     setSelectedRegion("");
//     setSelectedCity("");
//   };



  // Get states list based on the selected country
//   const [selectedRegion, setSelectedRegion] = useState("");
//   const states = selectedCountry ? State.getStatesOfCountry(selectedCountry)
//     : [];
//     console.log("state",states)
//   const handleStateChange = (e) => {
//     setSelectedRegion(e.target.value);
//     setSelectedCity("");
//   };

  // get selected cities and its function
//   const [selectedCity, setSelectedCity] = useState("");
//   const cities = selectedRegion ? City.getCitiesOfState(selectedCountry?.isoCode,selectedRegion?.isoCode) : [];

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   console.log("cities", cities);

  return (
    <>
      <div className="sm:col-span-3">
      <label
        htmlFor="country"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Country
      </label>
      <div className="mt-2">
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {countryData.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="state"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          State
        </label>
        <div className="mt-2">
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="">Select a state</option>
            {stateData.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          city
        </label>
        <div className="mt-2">
        <select
            id="city"
            // value={selectedCity}
            // onChange={handleCityChange}
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset 
            ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            {/* <option value="">Select a city</option>
            {cities.map((citie) => (
              <option key={citie.isoCode} value={citie.isoCode}>
                {citie.name}
              </option>
            ))} */}
          </select>
        </div>
      </div>
    </>
  );
};

export default CountrySelection;
