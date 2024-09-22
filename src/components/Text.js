export default function Text (props) {
    const { children, ...otherProps } = props;
    return (
        <p className="text" {...otherProps}>{children}</p>
    )
}