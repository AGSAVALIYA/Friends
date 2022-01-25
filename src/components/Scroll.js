import react from "react";
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className="scrollDiv">
            {props.children}
        </div>
    )
};

export default Scroll;