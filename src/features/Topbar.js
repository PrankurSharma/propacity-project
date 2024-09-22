import { lazy, Suspense, useContext } from "react";
import { Spinner, ToggleSwitch, SearchBar } from "../components/index";
import { AppContext } from "../context/ContextProvider";
console.log("Search bar imported: ", SearchBar);

export default function Topbar() {
    const { unit, setUnit } = useContext(AppContext);
    return (
        <div className="topbar-container">
            <Suspense fallback={<Spinner />}>
                <SearchBar />
            </Suspense>
            <ToggleSwitch
                toggleLabel={unit === "celcius" ? "°C" : "°F"}
                checked={unit === "fahrenheit"}
                onClick={() => setUnit(unit => unit === "celcius" ? "fahrenheit" : "celcius")}
            />
        </div>
    );
}