import React, {useRef, useEffect} from 'react';
import "../resources/css/cursor.css"

const Cursor = () => {

    const cursorRef = useRef();
    const scnCursorRef = useRef();

    const positionRef = useRef({
        mouseX : 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1
    })

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;

        const mouseX = clientX;
        const mouseY = clientY - (cursorRef.current.clientHeight / 2);;

        positionRef.current.mouseX =
            mouseX - scnCursorRef.current.clientWidth / 2;
        positionRef.current.mouseY =
            mouseY - scnCursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate3d(${mouseX -
            cursorRef.current.clientWidth / 2}px, ${mouseY -
            cursorRef.current.clientHeight / 2}px, 0)`;
        });

        return () => {};
    }, []);

    useEffect(() => {
        const followMouse = () => {
        positionRef.current.key = requestAnimationFrame(followMouse);
        const {
            mouseX,
            mouseY,
            destinationX,
            destinationY,
            distanceX,
            distanceY,
        } = positionRef.current;
        if (!destinationX || !destinationY) {
            positionRef.current.destinationX = mouseX;
            positionRef.current.destinationY = mouseY;
        } else {
            positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
            positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
            if (
            Math.abs(positionRef.current.distanceX) +
                Math.abs(positionRef.current.distanceY) <
            0.1
            ) {
            positionRef.current.destinationX = mouseX;
            positionRef.current.destinationY = mouseY;
            } else {
            positionRef.current.destinationX += distanceX;
            positionRef.current.destinationY += distanceY;
            }
        }
        scnCursorRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        };
        followMouse();
    }, []);


    return (
        <div>
            <div className="cursor" ref={cursorRef}></div>
            <div className="scn-cursor" ref={scnCursorRef}></div>
        </div>
    )
}

export default Cursor;