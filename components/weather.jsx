import { useState, useEffect } from 'react';
import getIP from '../api/ip-api';

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [ip, setIp] = useState("")

    const apikey = import.meta.env.VITE_WEATHER_API;

    useEffect(() => {
        async function ipAPI(){
            const res = await getIP()
            setIp(res)
        }
        ipAPI();
    }, [])

    const myip =  '115.70.185.234'

    useEffect(() => {
        async function getWeather() {
            if (ip != "") {
                try {
                    const response = fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${ip}`)
                    const data = await (await response).json();
                    console.log(data)
                    setWeather(data)
                } catch (error) {
                    console.error(error)
                }
            }
        }
        getWeather();
    }, [ip])


    return <>
        {ip == "" ? 'loading location': (
            <>
             {weather ? weather.location.name: ""}
            </>
        )}
    </>
}