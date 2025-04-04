import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = () => {
    
    return (
        <div className='city'>
            <Button variant="light">
                <img src="https://cdn-icons-png.flaticon.com/128/16277/16277773.png" alt="서울 이미지" />
                <span>This place</span>
            </Button>
            <Button variant="light">
                <img src="https://cdn-icons-png.flaticon.com/128/4481/4481011.png" alt="서울 이미지" />
                <span>Seoul</span>
            </Button>
            <Button variant="light">
                <img src="https://cdn-icons-png.flaticon.com/128/4717/4717631.png" alt="뉴욕 이미지" />
                <span>New York</span>
            </Button>
            <Button variant="light">
                <img src="https://cdn-icons-png.flaticon.com/128/5971/5971982.png" alt="도쿄 이미지" />
                <span>Tokyo</span>
            </Button>
            <Button variant="light">
                <img src="https://cdn-icons-png.flaticon.com/128/533/533445.png" alt="런던 이미지" />
                <span>London</span>
            </Button>
        </div>
    )
}

export default WeatherButton