
export default function ToggleSwitch(props) {
    const { toggleLabel, checked, ...otherProps } = props;
    return (
        <div className="toggle-switch" {...otherProps}>
            <input
                type="checkbox"
                className="toggle-input"
                id="toggle-input"
                checked={checked}
                onClick={(e) => e.stopPropagation()}
                // onChange={(e) => setUnit(e.target.checked ? "fahrenheit" : "celcius")}
            />
            <label className="toggle-label" htmlFor="toggle-input">
                <span className="toggle-slider">{toggleLabel}</span>
            </label>
        </div>
    );
}