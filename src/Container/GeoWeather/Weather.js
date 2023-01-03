import { useState } from 'react';
import { ShowAt, HideAt } from 'react-with-breakpoints';

function Weather(props) {
	const [main, setMain] = useState('');
	const [description, setDescription] = useState('');
	const [pressure, setPressure] = useState('');
	const [humidity, setHumidity] = useState('');
	const [speed, setSpeed] = useState('');
	const [tempC, setTempC] = useState('');
	const [tempF, setTempF] = useState('');
	const [ready, setReady] = useState(false);

	const WeatherInfo = () => {
		if(props.city) {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=8cfeded3df9c9e0ad5c32836132935df`;

			fetch(url)
			.then((response) => response.json())
			.then((responseData => {
				const tempKC = Math.floor(responseData.main.temp - 273);
				const tempKF = Math.floor((9*(responseData.main.temp - 273)/5) + 32);
				setTempC(tempKC);
				setTempF(tempKF);
				setMain(responseData.weather[0].main);
				setDescription(responseData.weather[0].description);
				setPressure(responseData.main.pressure);
				setHumidity(responseData.main.humidity);
				setSpeed(responseData.wind.speed);

				setTimeout(() => {
	                setReady(true);
	            }, 1000);
			}));
		}
	}

	const TempData = () => {
		return (
		<div className="weather-temp-desc">
			<div className="weather-temp-data">
				<p className="weather-temp">
					<span className="temp-celsius">{tempC} &deg;C</span>
					<span className="temp-farenheit">{tempF} &deg;F</span>
				</p>
				<p className="weather-desc">
					<span className="weather-main desc">{main}</span><span>-</span>
					<span className="weather-description desc">{description}</span>
				</p>
			</div>
			<img src={process.env.PUBLIC_URL + '/images/clouds.png'} alt="clouds" />
		</div>
		);
	}

	const TempSubDataDesk = () => {
		return (
		<div className="weather-subdata">
			<div className="weather-pressure">
				<img src={process.env.PUBLIC_URL + '/images/atmospheric.png'} alt="pressure" />
				<p className="weather-pressure-value">{pressure} hPa</p>
				<p className="caption">Pressure</p>
			</div>
			<div className="weather-humidity">
				<img src={process.env.PUBLIC_URL + '/images/humidity.png'} alt="humidity" />
				<p className="weather-humidity-value">{humidity}%</p>
				<p className="caption">Humidity</p>
			</div>
			<div className="weather-wind">
				<img src={process.env.PUBLIC_URL + '/images/wind.png'} alt="wind" />
				<p className="weather-wind-value">{speed} m/s</p>
				<p className="caption">Wind</p>
			</div>
		</div>
		);
	}

	const TempSubDataMob = () => {
		return (
		<div className="weather-subdata">
			<div className="weather-pressure">
				<img src={process.env.PUBLIC_URL + '/images/atmospheric.png'} alt="pressure" />
				<section>
					<p className="weather-pressure-value">{pressure} hPa</p>
					<p className="caption">Pressure</p>
				</section>
			</div>
			<div className="weather-humidity">
				<img src={process.env.PUBLIC_URL + '/images/humidity.png'} alt="humidity" />
				<section>
					<p className="weather-humidity-value">{humidity}%</p>
					<p className="caption">Humidity</p>
				</section>
			</div>
			<div className="weather-wind">
				<img src={process.env.PUBLIC_URL + '/images/wind.png'} alt="wind" />
				<section>
					<p className="weather-wind-value">{speed} m/s</p>
					<p className="caption">Wind</p>
				</section>
			</div>
		</div>
		);
	}

	const GeoLocData = () => {
		return (
		<div className="geolocation-data">
			<section className="geo-section">
				<p className="region-name"><span className="caption">Region ::</span> {props.region}</p>
				<p className="city-name"><span className="caption">City ::</span> {props.city}</p>
				<p className="country-name"><span className="caption">Country ::</span> {props.country}</p>
			</section>
		</div>
		);
	}

	const Data = () => {
		return (
		<>
		<ShowAt breakpoint="mediumAndBelow">
			<div className="mob-data">
				<div className="weather-data">
					<TempData />
				</div>
				<GeoLocData />
				<TempSubDataMob />
			</div>
		</ShowAt>
		<HideAt breakpoint="mediumAndBelow">
			<div className="desk-data">
				<div className="weather-data">
					<TempData />
					<TempSubDataDesk />
				</div>
				<GeoLocData />
			</div>
		</HideAt>
		</>
		);
	}

	return (
	<>
		<WeatherInfo />
		{ready ? <Data /> : <p className="loading-weather">Getting Geolocation and Weather data ...</p>}
	</>
	);
}

export default Weather;
