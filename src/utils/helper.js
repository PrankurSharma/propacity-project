export function convertTemp (temp, unit) {
    if (unit === "fahrenheit") {
        return ((temp * 9/5) + 32).toFixed(1);
    }
    else {
        return ((temp - 32) * 5/9).toFixed(1);
    }
}