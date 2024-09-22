import { useContext, useEffect, useState } from "react";
import { CONSTANTS } from "../data/Constants";
import useApi from "./useApi";
import { AppContext } from "../context/ContextProvider";
import { convertTemp } from "../utils/helper";

export default function useWeatherApi() {
    const [data, setData] = useState({});
    const { refresh, searchTerm, unit, setLoading, setAlerts } = useContext(AppContext);
    const { get } = useApi();
    // const currentWeather = async (city) => {
    //     try {
    //         let myData = await get(CONSTANTS.FETCH_CURRENT_WEATHER + `&q=${city}`);
    //         setData(myData);
    //     }
    //     catch (err) {
    //         console.log("Error");
    //         throw err;
    //     }
    // }

    //this function updates the data by calling the api to fetch weather forecast and updates the states

    const forecastWeather = async (city, days) => {
        setLoading(true);
        try {
            let myData = await get(CONSTANTS.FETCH_FORECAST + `&q=${city}&days=${days}`);
            console.log("My data forecast: ", myData);
            setData({
                location: myData.location.name,
                weatherType: myData.current.condition.text,
                temp: unit === "celcius" ? myData.current.temp_c : convertTemp(myData.current.temp_c, unit),
                icon: myData.current.condition.icon,
                forecast: myData.forecast.forecastday.slice(1).map((val) => {
                    return {
                        date: val.date,
                        maxTemp: unit === "celcius" ? val.day.maxtemp_c : convertTemp(val.day.maxtemp_c, unit),
                        minTemp: unit === "celcius" ? val.day.mintemp_c : convertTemp(val.day.mintemp_c, unit),
                        icon: val.day.condition.icon
                    }
                })
            });
            setLoading(false);
            // localStorage.setItem("data", JSON.stringify({ ...myData }));
        }
        catch (err) {
            console.log("Error", err);
            let myData = JSON.parse(localStorage.getItem("data"));
            if (myData) {
                setData(myData);
            }
            setLoading(false);
            setAlerts((alerts) => [...alerts, {
                title: err.toString(),
                message: `No data found for the location ${city}.`
            }]);
        }
    }

    //sets localStorage every time data gets updated

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            localStorage.setItem("data", JSON.stringify({ ...data }));
        }
        else {
            localStorage.removeItem("data");
        }
    }, [data]);

    //calls the api initially, when data for a particular city is searched and on refresh operation

    useEffect(() => {
        // currentWeather("Delhi, India");
        if (searchTerm === "") {
            if (!Object.keys(data).length > 0) {
                forecastWeather("New Delhi", 6);
            }
        }
        else {
            forecastWeather(searchTerm, 6);
        }
        // eslint-disable-next-line
    }, [refresh, searchTerm]);

    //checks for unit changes triggered and converts the temperatures as per the given units

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setData(data => ({
                ...data,
                temp: convertTemp(data.temp, unit),
                forecast: data.forecast.map((val, idx) => {
                    return {
                        ...data.forecast[idx],
                        maxTemp: convertTemp(val.maxTemp, unit),
                        minTemp: convertTemp(val.minTemp, unit)
                    }
                })
            }));
        }
        // eslint-disable-next-line
    }, [unit]);

    return { data, setData };
}