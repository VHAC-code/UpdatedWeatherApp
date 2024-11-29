// /* eslint-disable no-useless-catch */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import "./SearchBox.css";
// import {useState} from "react";

// export default function Searchbox({updateInfo}){
//     let [city, setCity] = useState("");
//     let [error , setError] = useState(false);
//    const Api_Url = "http://api.openweathermap.org/data/2.5/weather";
//    const Api_Key  = "8e263e11895ee283aaf9164bd9d21ed3";

//    let getWeatherInfo = async ()=>{
//     try{
//     let response =  await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);
//     let jsonResponse = await response.json();
//     // console.log(jsonResponse);

//     let result = {
//         city : city,
//         temp : jsonResponse.main.temp,
//         tempMin : jsonResponse.main.temp_min,
//         tempMax : jsonResponse.main.temp_max,
//         humidity : jsonResponse.main.humidity,
//         feelsLike : jsonResponse.main.feels_like,
//         weather : jsonResponse.weather[0].description,
//     }
//     console.log(result);
//     return result;}
//     catch(err){
//         throw err;
//     }
//    };

    

//     let handleChange = (evt)=>{
//      setCity(evt.target.value);
//     }
    
//     let handleSubmit = async (evt)=>{
//         try{
//      evt.preventDefault();
//      console.log(city);
//      setCity("");
//      let newInfo = await getWeatherInfo();
//      updateInfo(newInfo);
//         }
//         catch(err){
//             setError(true);
//         }
//     }
//     return(
//         <div className='searchbox'>
           
//             <form onSubmit={handleSubmit}>
//             <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/>
//             <br />
//             <br />
//             <Button variant="contained" type = "submit" endIcon={<SendIcon />}>
//         Search
//       </Button>
//       {error && <p style={{color:"red"}}>No such Place Exist in our API! </p>  }
//       </form>
//         </div>
//     );
// }


import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types"; // Import PropTypes

export default function Searchbox({ updateInfo, handleError }) {
  const [city, setCity] = useState("");

  const Api_Url = "http://api.openweathermap.org/data/2.5/weather";
  const Api_Key = "8e263e11895ee283aaf9164bd9d21ed3";

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`
    );
    const jsonResponse = await response.json();

    if (!response.ok || !jsonResponse.main) {
      throw new Error(jsonResponse.message || "City not found");
    }

    return {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
      windSpeed: jsonResponse.wind.speed,
    };
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); // Clear the input field after successful fetch
    } catch (err) {
      handleError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <TextField
        id="city"
        label="City Name"
        variant="outlined"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        fullWidth
        sx={{
          marginBottom: "16px",
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2a5298",
          },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        endIcon={<SendIcon />}
        fullWidth
        sx={{
          backgroundColor: "#2a5298",
          "&:hover": { backgroundColor: "#1e3c72" },
        }}
      >
        Search
      </Button>
    </form>
  );
}

// PropTypes for validating the props
Searchbox.propTypes = {
  updateInfo: PropTypes.func.isRequired, // updateInfo should be a function
  handleError: PropTypes.func.isRequired, // handleError should be a function
};
