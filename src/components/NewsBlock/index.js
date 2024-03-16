import React from "react";
import "./style.scss";
import arrow from "../../images/arrow.png"

function NewsBlock() {
    return (
        <div className="news-block">
            <img src={arrow}alt="arrow-left"/>
            <img className="rotate" src={arrow}alt="arrow-right"/>
        </div>
    );
}

export default NewsBlock;