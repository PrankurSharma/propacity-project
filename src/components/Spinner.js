import loadingImg from "../assets/loading.png";
export default function Spinner (props) {
    return (
        <img className="spinner" src={loadingImg} {...props}/>
    )
}