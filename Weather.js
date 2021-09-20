import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName : "weather-lightning-rainy",
        gradient : ["#2b5876", "#4e4376"],
        title : "Thunderstorm",
        subtitle : "Thunder, feel the thunder, Lightning and the thunder",
    },
    Rain:{
        iconName : "weather-pouring",
        gradient : ["#2193b0", "#6dd5ed"],
        title : "Rain",
        subtitle : "Anywhere with you feels like, Paris in the rain",
    },
    Snow:{
        iconName : "weather-snowy",
        gradient : ["#003973", "#E5E5BE"],
        title : "Snow",
        subtitle : "Let it snow, let it snow, let it snow",
    },
    Atmosphere:{
        iconName : "weather-fog",
        gradient : ["#7AA1D2", "#CC95C0"],
        title : "Atmosphere",
        subtitle : "There isn't enough love in the atmosphere",
    },
    Clear:{
        iconName : "weather-sunny",
        gradient : ["#ffa751", "#ffe259"],
        title : "Clear",
        subtitle : "Sunny, thank you for the truth you let me see",
    },
    Clouds:{
        iconName : "weather-cloudy",
        gradient : ["#314755", "#26a0da"],
        title : "Clouds",
        subtitle : "Up in the clouds",
    },
    Haze :{
        iconName : "weather-hazy",
        gradient : ["#A5CC82", "#00467F"],
        title : "Haze",
        subtitle : "난 지금 잠수 중이야 상태 메시지 좀 봐줘",
    },
}
export default function Weather({ temp, condition }){
    return (
        <View style={styles.container}>
             <LinearGradient
                // Background Linear Gradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons 
                        name={weatherOptions[condition].iconName}
                        size={96} 
                        color="white"/>
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
        </View>
        
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
    ]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
    },
    halfContainer:{
        flex:1,
        justifyContent: "center",
        alignItems : "center",
    },
    temp:{
        fontSize : 36,
        color: "white",
    },
    title:{
        color : "white",
        fontSize : 44,
        fontWeight: "300",
        marginBottom: 10,
        paddingLeft: 20
    },
    subtitle:{
        color : "white",
        fontWeight: "600",
        fontSize : 24,
        paddingLeft: 20
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems : "flex-start"
    }
})