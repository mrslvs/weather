const WeatherCard = ({ cardData }) => {
    return (
        <div className="weather-card">
            <span>
                Weather at {cardData.location} ({cardData.country})
            </span>
            <p>{cardData.temp}</p>
        </div>
    );

    //             id,
    //             location,
    //             country,
    //             feels_like,
    //             humidity,
    //             pressure,
    //             temp,
    //             temp_min,
    //             temp_max,
    //             sunrise,
    //             sunset,
    //             weather,

    // ==== WEATHER OPTIONS ===
    // Clear: Sky is clear without clouds.
    // Clouds: Clouds are covering part or all of the sky.
    // Rain: Rain is falling.
    // Drizzle: Light rain is falling.
    // Thunderstorm: A thunderstorm is occurring with lightning and thunder.
    // Snow: Snow is falling.
    // Mist: Mist or fog is obscuring the horizon.
    // Smoke: Smoke is obscuring the horizon.
    // Haze: Haze is reducing visibility.
    // Dust: Dust is reducing visibility.
    // Fog: Fog is obscuring nearby objects.
    // Sand: Sand, dust whirling in the air.
    // Squall: Sudden, violent gust of wind, dust, or rain.
    // Tornado: Violent destructive whirling air column.
};

export default WeatherCard;
