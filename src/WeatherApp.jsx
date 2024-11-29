// import InfoBox from "./InfoBox";
// import Searchbox from "./SearchBox";
// import { useState } from "react";

// export default function WeatherApp(){
//     const [weatherInfo , setWeatherInfo] = useState({
//         city : "Delhi",
//         feelsLike : 24.84,
//         temp : 25.05,
//         tempMin :25.05,
//         tempMax : 25.08,
//         humidity : 47,
//         weather : "haze",
//     });

//     let updateInfo = (newInfo)=>{
//         setWeatherInfo(newInfo);
//     }

//     return (
//         <div style={{textAlign : "center"}}>
//             <h2>Weather App by Vhac Lib</h2>
//             <Searchbox updateInfo = {updateInfo}/>
//             <InfoBox info = {weatherInfo}/>

//         </div>
//     );
// }


import { useState } from "react";
import InfoBox from "./InfoBox";
import Searchbox from "./SearchBox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";

// Styled Background Component
const BackgroundBox = styled(Box)({
  background: `linear-gradient(to bottom, #1e3c72, #2a5298)`, // Gradient background
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  color: "white",
});

// Styled Card Container
const AppContainer = styled(Paper)({
  padding: "30px",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
  width: "100%",
  maxWidth: "800px",
  animation: "fade-in 1.2s ease-in-out",
});

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.08,
    humidity: 47,
    weather: "haze",
    windSpeed: 5.5,
  });

  const [error, setError] = useState(false);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    setError(false); // Reset error when successful
  };

  const handleError = (hasError) => {
    setError(hasError);
  };

  return (
    <BackgroundBox>
      <AppContainer elevation={4}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#2a5298" }}>
          🌦️ Weather App
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ color: "#555" }}>
          Enter the city to get the current weather information.
        </Typography>
        <Searchbox updateInfo={updateInfo} handleError={handleError} />
        {error && <Typography color="error" align="center" mt={2}>City not found. Please try again.</Typography>}
        <InfoBox info={weatherInfo} />
      </AppContainer>
    </BackgroundBox>
  );
}
