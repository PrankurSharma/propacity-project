import { SpanHeading, SpanSubHeading } from "./index";
export default function Card(props) {
    const { title, subtitle, titleStyle, subtitleStyle, children, ...otherProps } = props;
    return (
        <div className="card" {...otherProps}>
            {title && <SpanHeading style={titleStyle}>
                {title}
            </SpanHeading>}
            {subtitle && <SpanSubHeading style={subtitleStyle}>
                {subtitle}
            </SpanSubHeading>}
                {children}
        </div>
    );
}