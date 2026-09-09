import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

function Home() {
  const [city, setCity] = useState("Surat");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);

        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        );

        const data = await response.json();

        setWeather(data);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        );

        const data = await response.json();

        if (data.cod !== 200) {
          throw new Error(data.message);
        }

        setWeather(data);
      } catch (error) {
        setError(error.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="min-h-screen bg-blue-50 px-5 py-16 text-center text-white">
      <h1 className="mb-3 text-4xl font-bold text-yellow-400">Weather App</h1>

      <p className="mb-10 text-slate-500">
        Check the current weather of any city
      </p>

      <SearchBar setCity={setCity} />
      {loading && (
        <p className="mt-8 text-lg font-semibold text-yellow-500">
          Loading weather...
        </p>
      )}

      {error && (
        <p className="mx-auto mt-8 max-w-sm rounded-xl bg-red-100 px-5 py-3 font-medium text-red-600">
          {error}
        </p>
      )}

      {weather && (
        <div className="mx-auto mt-10 max-w-sm rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
          <h2 className="mb-4 text-3xl font-semibold">{weather.name}</h2>

          <div className="text-6xl font-bold text-yellow-500">
            {Math.round(weather.main.temp)}°C
          </div>

          <p className="my-5 text-xl">{weather.weather[0].main}</p>

          <div className="flex justify-around border-t border-slate-200 pt-5">
            <div>
              <span className="text-2xl">💧</span>

              <p className="text-sm text-slate-500">Humidity</p>

              <strong>{weather.main.humidity}%</strong>
            </div>

            <div>
              <span className="text-2xl">💨</span>

              <p className="text-sm text-slate-500">Wind</p>

              <strong>{weather.wind.speed} m/s</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
