const WeatherCard = ({ cardData }) => {
    return (
        <div className="weather-card">
            <p>Weather at {cardData.location}</p>
        </div>
    );
};

export default WeatherCard;
