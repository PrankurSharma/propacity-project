import { Suspense } from "react";
import { Image, Card, SpanHeading } from "./index";

export default function OuterCard(props) {
    const { title, subtitle, children, image, info, titleStyle, subtitleStyle, infoStyle, imageStyle, ...otherProps } = props;
    return (
        <div className="outer-card" {...otherProps}>
            <div>
                <Card
                    title={title}
                    titleStyle={titleStyle}
                    subtitle={subtitle}
                    subtitleStyle={subtitleStyle}
                />
                <SpanHeading style={infoStyle}>{info}</SpanHeading>
            </div>
            <Image className="card-img" src={image} style={imageStyle} loading="lazy" />
            {children}
        </div>
    )
}