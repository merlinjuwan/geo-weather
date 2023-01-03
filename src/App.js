import { useState } from 'react';
import LoadingPage from './Container/LoadingPage.js';
import GeoWeather from './Container/GeoWeather.js';


function App() {
    const [ready, setReady] = useState(false);

    const GoPage = () => {
        window.addEventListener("load", () => {
            setTimeout(() => {
                setReady(true);
            }, 1000);
        });
    }

    return (
    <>
        <div className="App">
            <GoPage />
            {ready ? <GeoWeather /> : <LoadingPage />}
        </div>
    </>
    );
}

export default App;
