// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

const CountrySelection = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // search
  // eslint-disable-next-line no-unused-vars
  const [searchCountry, setSearchCountry] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [searchRegion, setSearchRegion] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchCity, setSearchCity] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedRegion("");
    setSelectedCity("");
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Get countries list from the country-state-city package
  const countries = Country.getAllCountries();
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchCountry.toLowerCase())
  );
  console.log(countries);
  // Get states list based on the selected country
  const states = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];
  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchRegion.toLowerCase())
  );
  console.log("selectedCountry", selectedCountry);
  console.log("selectedRegi", selectedRegion);

  // Get cities list based on the selected state
  let cities = [];
  if (selectedCountry && selectedRegion) {
    cities = City.getCitiesOfState(selectedCountry, selectedRegion);
  }
  const filteredCity = cities.filter((city)=>
    city.name.toLowerCase().includes(searchCity.toLowerCase())
  );

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
            value={selectedCountry}
            onChange={handleCountryChange}
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="">Select a country</option>
            {filteredCountries.map((country) => (
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
          State/Region
        </label>
        <div className="mt-2">
          <select
            id="state"
            value={selectedRegion}
            onChange={handleRegionChange}
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="">Select a state</option>
            {filteredStates.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* City Dropdown */}
      <div className="sm:col-span-3">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          City
        </label>
        <div className="mt-2">
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="">Select a city</option>
            {filteredCity.map((citi) => (
              <option key={citi.isoCode} value={citi.isoCode}>
                {citi.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CountrySelection;
