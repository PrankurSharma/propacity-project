import { useContext } from "react";
import MainPage from "./MainPage";
import Topbar from "./Topbar";
import { AppContext } from "../context/ContextProvider";
import { Spinner } from "../components";
import { Image, Alert } from "../components/index";
import loadingImg from "../assets/loading.png";


export default function Dashboard() {
    const { loading, pullDist, alerts } = useContext(AppContext);
    return (
        <>
            <Topbar />
            {loading && <Spinner />}
            {pullDist > 0 && <Image src={loadingImg} className="static-loader"/>}
            {alerts.length > 0 && <Alert />}
            <MainPage />
        </>
    )
}