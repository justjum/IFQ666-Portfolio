export default async function getWeather(ip) {
    const apikey = import.meta.env.VITE_WEATHER_API;

    if (ip != null) {
        try {
            const response = fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${ip}`)
            const data = await (await response).json();
            console.log(data)
            const res = {
                temp: data.current.temp_c,
                icon: data.current.condition.icon,
                location: data.location.name
            }
            console.log(res)
            return res;
        } catch (error) {
            console.error(error)
        }
    }
}