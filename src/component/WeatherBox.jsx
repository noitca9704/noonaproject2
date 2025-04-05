import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherBox = ({ weather }) => {
    if (!weather) {
        return (
            <div className="d-flex justify-content-center align-items-center">
             
            </div>
        );
    }
    const descriptionToImage = {
        'clear sky': {
          name: '맑은 하늘',
          icon: 'https://cdn-icons-png.flaticon.com/128/7364/7364834.png'
        },
        'few clouds': {
          name: '구름 조금',
          icon: 'https://cdn-icons-png.flaticon.com/128/728/728069.png'
        },
        'scattered clouds': {
          name: '흩어진 구름',
          icon: 'https://cdn-icons-png.flaticon.com/128/414/414927.png'
        },
        'broken clouds': {
          name: '짙은 구름',
          icon: 'https://cdn-icons-png.flaticon.com/128/4680/4680961.png'
        },
        'shower rain': {
          name: '소나기',
          icon: 'https://cdn-icons-png.flaticon.com/128/1164/1164985.png'
        },
        'rain': {
          name: '비',
          icon: 'https://cdn-icons-png.flaticon.com/128/891/891640.png'
        },
        'thunderstorm': {
          name: '천둥번개',
          icon: 'https://cdn-icons-png.flaticon.com/128/1566/1566365.png'
        },
        'snow': {
          name: '눈',
          icon: 'https://cdn-icons-png.flaticon.com/128/2315/2315309.png'
        },
        'mist': {
          name: '안개',
          icon: 'https://cdn-icons-png.flaticon.com/128/7774/7774309.png'
        },
        'default': {
          name: '날씨 정보 없음',
          icon: 'https://cdn-icons-png.flaticon.com/128/7364/7364834.png'
        }
      };

    const celsius = weather.main.temp;
    const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(1);
    const description = weather.weather[0].description;
    const weatherInfo = descriptionToImage[description] || descriptionToImage['default'];
    return (
        <div className='w_container'>
            <div className='place_name'>
                <div>
                {weather.name}
                
                </div>
                <div className='weather'>
                    <img src={weatherInfo.icon} alt={weatherInfo.name} style={{ width: '100px', marginRight: '10px'}} />{weatherInfo.name}
                </div>
            </div>
            <h2 className='temp'> {celsius} °C / {fahrenheit} °F </h2>
        </div>
    );
};

export default WeatherBox;
