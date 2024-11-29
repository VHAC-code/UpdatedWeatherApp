// /* eslint-disable react/prop-types */
// import Card from '@mui/material/Card';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import "./InfoBox.css";
// import Typography from '@mui/material/Typography';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';

// export default function InfoBox({ info }){
//     // let info = {
//     //     city : "Delhi",
//     //     feelsLike : 24.84,
//     //     temp : 25.05,
//     //     tempMin :25.05,
//     //     tempMax : 25.08,
//     //     humidity : 47,
//     //     weather : "haze",
//     // };

//     const Hot_URL = "https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg";
//     const Cold_URL = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
//     const Rain_URL = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";
//     return (
//         <div className="InfoBox">
            
//             <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image= {info.humidity > 80 ? Rain_URL : info.temp > 20 ? Hot_URL : Cold_URL }
//         title="Delhi Weather"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//          {info.city}&nbsp;{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/> }
//         </Typography>
//         <Typography variant="body2" color="text.secondary" component={"span"}>   
//           <p>Temparature : {info.temp}&deg;C</p>
//           <p>Humidity : {info.humidity}</p>
//           <p>Weather : {info.weather}</p>
//           <p>Feels Like : {info.feelsLike}</p>
//           <p>Temp_Min : {info.tempMin}</p>
//           <p>Temp_Max : {info.tempMax}</p>
//         </Typography>
//       </CardContent>
//       {/* above component span is written because of we are using para inside typography so there is error coming in console so for removing that we are using this */}
//     </Card>
//         </div>
//     );
// }





import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const Hot_URL =
    "https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg";
  const Cold_URL =
    "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
  const Rain_URL =
    "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";

  return (
    <div className="InfoBox mt-6">
      <Card
        sx={{ maxWidth: 370 }}
        className="hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
              ? Rain_URL
              : info.temp > 20
              ? Hot_URL
              : Cold_URL
          }
          title={`${info.city} Weather`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}&nbsp;
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 20 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Feels Like: {info.feelsLike}&deg;C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Weather: {info.weather}</p>
            <p>Wind Speed: {info.windSpeed} m/s</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

// Prop validation
InfoBox.propTypes = {
  info: PropTypes.shape({
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    tempMin: PropTypes.number,
    tempMax: PropTypes.number,
    feelsLike: PropTypes.number,
    humidity: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    windSpeed: PropTypes.number,
  }).isRequired,
};
