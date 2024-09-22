import { lazy, useContext } from "react";
import { Container, OuterCard } from "../components/index";
import useWeatherApi from "../hooks/useWeatherApi";
import { AppContext } from "../context/ContextProvider";
const Card = lazy(() => import("../components/Card"));
const ForecastCard = lazy(() => import("../components/ForecastCard"));

export default function MainPage() {
    const { data } = useWeatherApi();
    const { loading, unit } = useContext(AppContext);
    return (
        <Container>
            {!loading && <>
                <OuterCard
                    title={data.location}
                    subtitle={data.weatherType}
                    info={unit === "celcius" ? `${data.temp} °C` : `${data.temp} °F`}
                    image={data.icon}
                />
                <Card className="container-card" title="5-DAY FORECAST">
                    <Card className="inner-card">
                        {data.forecast?.map((val) => {
                            return <ForecastCard data={val} />
                        })}
                    </Card>
                </Card>
            </>}
        </Container>
    );
}