/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import {useState} from "react";

export default function Searchbox({updateInfo}){
    let [city, setCity] = useState("");
    let [error , setError] = useState(false);
   const Api_Url = "http://api.openweathermap.org/data/2.5/weather";
   const Api_Key  = "8e263e11895ee283aaf9164bd9d21ed3";

   let getWeatherInfo = async ()=>{
    try{
    let response =  await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);

    let result = {
        city : city,
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;}
    catch(err){
        throw err;
    }
   };

    

    let handleChange = (evt)=>{
     setCity(evt.target.value);
    }
    
    let handleSubmit = async (evt)=>{
        try{
     evt.preventDefault();
     console.log(city);
     setCity("");
     let newInfo = await getWeatherInfo();
     updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    }
    return(
        <div className='searchbox'>
           
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/>
            <br />
            <br />
            <Button variant="contained" type = "submit" endIcon={<SendIcon />}>
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such Place Exist in our API! </p>  }
      </form>
        </div>
    );
}