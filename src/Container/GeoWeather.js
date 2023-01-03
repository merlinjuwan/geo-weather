import Weather from './GeoWeather/Weather.js';
import { useState } from 'react';

function GeoWeather() {
	const [country, setCountry] = useState('');
	const [region, setRegion] = useState('');
	const [city, setCity] = useState('');
	
	const Geo = () => {
		fetch('https://ipapi.co/json')
		.then((response) => response.json())
		.then((responseData => {
			if(responseData.country || responseData.regionName || responseData.city) {
				setCountry(responseData.country_name);
				setCity(responseData.city);
				setRegion(responseData.region);
			}
		}));
		return (
		<>
			{region ? <Weather city={city} region={region} country={country} /> : <p className="loading-weather">Getting Geolocation and Weather data ...</p>}
		</>
		);
	}
	return (
		<div className="geo-weather-data">
			<Geo />
		</div>
	);
}

export default GeoWeather;