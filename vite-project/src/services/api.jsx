const API_KEY = "a74fb65e47bd3d0de056d3f99c762021";

export const getWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};