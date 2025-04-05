import { useEffect, useState } from 'react'
import './App.css'
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import { ClipLoader } from 'react-spinners';
import 'bootstrap/dist/css/bootstrap.min.css';



// 1. 앱이 실행될 때 현재 위치 기반의 날씨가 보임
// 2. 날씨정보에는 도씨, 섭씨, 화씨 등의 날씨 상태
// 3. 5개의 버튼이 있음(1개는 현재 위치, 4개는 다른 위치)
// 4. 도시 버튼을 클릭 시 도시별 날씨가 나옴
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나옴
// 6. 데이터를 들고오는 동안 로딩 스피너가 돔


function App() {

  const cities = [
    { name: 'Seoul', img: 'https://cdn-icons-png.flaticon.com/128/4481/4481011.png' },
    { name: 'New York', img: 'https://cdn-icons-png.flaticon.com/128/4717/4717631.png' },
    { name: 'Tokyo', img: 'https://cdn-icons-png.flaticon.com/128/5971/5971982.png' },
    { name: 'London', img: 'https://cdn-icons-png.flaticon.com/128/533/533445.png' },
  ];
  const [city, setCity] = useState('');

  const weatherBackgrounds = {
    'clear sky': 'url("https://cdn.pixabay.com/photo/2017/03/05/01/22/clouds-2117447_1280.jpg")',
    'few clouds': 'url("https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319_1280.jpg")',
    'scattered clouds': 'url("https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632_1280.jpg")',
    'broken clouds': 'url("https://cdn.pixabay.com/photo/2019/05/29/09/41/sky-4237062_1280.jpg")',
    'shower rain': 'url("https://cdn.pixabay.com/photo/2017/08/18/13/04/glass-2654887_1280.jpg")',
    'rain': 'url("https://cdn.pixabay.com/photo/2017/08/18/13/04/glass-2654887_1280.jpg")',
    'thunderstorm': 'url("https://cdn.pixabay.com/photo/2016/06/21/19/14/flash-1471724_1280.jpg")',
    'snow': 'url("https://cdn.pixabay.com/photo/2019/10/07/11/26/winter-landscape-4532412_1280.jpg")',
    'mist': 'url("https://cdn.pixabay.com/photo/2016/11/19/15/44/autumn-1839969_1280.jpg")',
    'default': 'url("https://cdn.pixabay.com/photo/2022/04/28/04/12/sun-7161720_1280.jpg")',
  };

  const [weather, setWeather] = useState(null); // #1

  const [loading, setLoading] = useState(true);

  const [apiError, setAPIError] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (city == "") {
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  }, [city]);

  const weatherMain = weather?.weather?.[0]?.description;
  const backgroundStyle = {
    backgroundImage: weatherBackgrounds[weatherMain] || weatherBackgrounds['default'],
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100dvh',
    Width: '100vw'
  };

  return (
    <div style={backgroundStyle}>
      {loading ? (
        <div className='container'>
          <ClipLoader color="#ffffff" loading={loading} size={150} />
        </div>
      ) : !apiError ? (
        <div className='container'>
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} selectedCity={city} />
        </div>
      ) : (
        apiError
      )}
    </div>
  )
}

export default App
