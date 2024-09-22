export default function Image (props) {
    console.log("Image prop called");
    return <img {...props} alt="weather-icon"/>
}