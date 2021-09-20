import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

//weather API_KEY(openweathermap)
const API_KEY = "e047cfae01ec35ac4abfbdbfc3c7760d";

export default class extends React.Component {
  state = {
    isLoading: true, 
  }
  //weather API로 data 가져오기 함수
  getWeather = async(latitude, longitude) =>{
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  }
  //사용자의 지역 geo 정보 가져오기 함수
  getLocation = async() =>{
    try {
      await Location.requestForegroundPermissionsAsync();
      const { 
        coords : { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();
      console.log("coords: ", latitude, longitude)
      //Send to API to get weather
      this.getWeather(latitude, longitude)
    } catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

