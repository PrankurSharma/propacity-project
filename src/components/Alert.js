import { useContext, useEffect } from "react";
import { Card } from "./index";
import { AppContext } from "../context/ContextProvider";

export default function Alert() {
    const { alerts, setAlerts } = useContext(AppContext);

    //multple alerts are stacked and removed every 5 seconds
    useEffect(() => {
        setTimeout(() => {
            setAlerts(alerts => alerts.slice(1));
        }, 5000);
    }, [alerts, setAlerts]);

    return (
        <>
            {alerts.map((val, idx) => {
                console.log("My alert: ", alerts);
                return <Card className="alert-card"
                    key={idx}
                    title={val.title}
                    subtitle={val.message}
                    titleStyle={{
                        fontSize: "16px"
                    }}
                    subtitleStyle={{
                        fontSize: "14px",
                        color: "lightgray",
                    }}
                    style={{
                        top: `${(idx * 10) + 100}px`
                    }}
                />
            })}
        </>
    );
}