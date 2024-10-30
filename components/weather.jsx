import { useState, useEffect } from 'react';
import getIP from '../api/ip-api';
import getWeather from '../api/weather-api';

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [ip, setIp] = useState(null)

    useEffect(() => {
        async function ipAPI(){
            const res = await getIP()
            setIp(res)
        }
        ipAPI();
    }, [])

    useEffect(() => {
        async function weatherAPI(){
            const res = await getWeather(ip)
            setWeather(res)
        }
        weatherAPI()
    }, [ip])

    function WeatherWidget({ location, temperature, icon }) {
        return <div className='weather-widget'>
            <div>
                <p>{location}</p>
                <p>{temperature}&deg;C</p>
            </div>
            <img src={icon} alt="" />
        </div>
    }

    return <>
        {ip == "" ? <p>'loading location'</p>: (
            <>
             {weather != null ? <WeatherWidget 
                                    location={weather.location} 
                                    temperature={weather.temp} 
                                    icon={weather.icon}
                                />
                : ""}
            </>
        )}
    </>
}