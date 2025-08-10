import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "73abf56b9f6c3ca9a148ea3677032fbf";

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        throw new Error("City not found");
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchWeather}
          disabled={loading}
          className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded disabled:bg-blue-300"
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {weather && (
        <div className="bg-white p-6 rounded shadow w-80 text-center">
          <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
          <p className="text-xl mb-2">
            {weather.main.temp}°C | {weather.weather[0].description}
          </p>
          <img
            className="mx-auto"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
