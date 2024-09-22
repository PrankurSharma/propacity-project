import { useContext, useState } from "react"
import { AppContext } from "../context/ContextProvider";

export default function Container({ children, ...otherProps }) {
    const [initialTouch, setInitialTouch] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const { setRefresh, setLoading, pullDist, setPullDist } = useContext(AppContext);

    const handleTouchStart = (e) => {
        console.log("Event: ", e, window.scrollY);
        if (window.scrollY === 0) {
            setInitialTouch(e.clientY);
            setIsDragging(true);
        }
    }
    const handleTouchMove = (e) => {
        if (isDragging) {
            const pullDistance = e.clientY - initialTouch;
            setPullDist(pullDistance);
        }
    }
    const handleTouchEnd = (e) => {
        if (isDragging) {
            const pullDistance = e.clientY - initialTouch;
            setPullDist(pullDistance);
            console.log("My pull: ", pullDistance);
            if (pullDistance > 100) {
                //refresh triggered
                setRefresh(refresh => !refresh);
                setLoading(true);
                setPullDist(0);
                setInitialTouch(0);
            }
            else {
                //put the div back to original place
                setPullDist(0);
                setInitialTouch(0);
            }
            setIsDragging(false);
        }
    }
    return <div className="container"
        {...otherProps}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateY(${pullDist}px)`, animation: "transform 2s ease-in-out" }}
    >{children}</div>
}