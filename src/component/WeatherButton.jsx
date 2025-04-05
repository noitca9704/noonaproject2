import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = ({cities, setCity, selectedCity}) => {
    
    return (
        <div className='city'>
            <Button variant={`${selectedCity == '' ? "light" : "secondary"}`} onClick={() => setCity('')}>
                <img src="https://cdn-icons-png.flaticon.com/128/16277/16277773.png" alt="서울 이미지" />
                <span>This place</span>
            </Button>
            {cities.map(({name, img}) => (
                <Button variant={`${selectedCity == name ? "light" : "secondary"}`} key={name} onClick={()=>setCity(name)}>
                    <img src={img} alt={`${name} 이미지`} />
                    <span>{name}</span>
                </Button>
            ))}
        </div>
    )
}

export default WeatherButton