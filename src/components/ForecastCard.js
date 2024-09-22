import { useContext } from "react";
import { Image, SpanHeading, SpanSubHeading, Text } from "./index";
import { weekDays } from "../data/Constants";
import { AppContext } from "../context/ContextProvider";

export default function ForecastCard(props) {
    const { data, ...otherProps } = props;
    const { unit } = useContext(AppContext);
    return (
        <div className="forecast-card" {...otherProps}>
            <SpanHeading>{weekDays[(new Date(data.date)).getDay()]}</SpanHeading>
            <Image src={data.icon} loading="lazy" />
            <>
                <SpanSubHeading>{unit === "celcius" ? `${data.maxTemp} °C` : `${data.maxTemp} °F`}</SpanSubHeading>
                <Text>{unit === "celcius" ? `${data.minTemp} °C` : `${data.minTemp} °F`}</Text>
            </>
        </div>
    )
}