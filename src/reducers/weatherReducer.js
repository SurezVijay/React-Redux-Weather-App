const initialState = {
  weather: "Cloudy Weather"
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SunnyWeather":
      return { ...state, weather: "Sunny Weather" };
    case "RaniyWeather":
      return { ...state, weather: "Raniy Weather" };
    default:
      return state;
  }
};

export default weatherReducer;
