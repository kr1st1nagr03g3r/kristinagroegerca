import * as React from "react";
import { CSSProperties } from "react";
import Status from "./Status";

const defaultStyle = {
    height: "101vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2d1176",
    color: "#fff"
};





/**
 * ScrollWrapper directs the user to scroll the page to reveal it's children.
 * Use this on Modules that have scroll and/or observer triggers.
 */
const ScrollWrapper = ({ children, style, inView, ...props }) => {
    return (
        <div {...props}>
            <Status inView={inView} />
            <section style={{ ...defaultStyle, ...style }}>
                <h1>⬇ Scroll Down ⬇</h1>
            </section>
            {children}
            <section style={{ ...defaultStyle, ...style }}>
                <h1>⬆︎ Scroll up ⬆︎</h1>
            </section>
        </div>
    );
};

export default ScrollWrapper;
