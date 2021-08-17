import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { sunnyWeather, raniyWeather } from "./actions";

export default function App() {
  const weather = useSelector((state) => state.weatherReducer.weather);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React Redux Weather App</h1>
      <h3> {weather} </h3>
      {/* {JSON.stringify(weather)} */}
      <button onClick={() => dispatch(sunnyWeather())}> GetSunny </button>
      <button onClick={() => dispatch(raniyWeather())}> GetRainy </button>
    </div>
  );
}
