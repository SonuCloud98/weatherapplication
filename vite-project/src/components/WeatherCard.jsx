function WeatherCard({ data }) {
  if (!data || data.cod !== 200) {
    return <p>No data found</p>;
  }

  return (
    <div className="card">
      <h2>{data.name}</h2>
      <h3>{data.main.temp}°C</h3>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} km/h</p>
    </div>
  );
}

export default WeatherCard;