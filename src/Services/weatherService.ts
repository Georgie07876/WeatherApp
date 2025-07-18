export interface WeatherData {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        humidity: number
    }
    weather: {
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    }
}

const API_KEY = '32dcd330b3cc00566765949794eb16bc';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';