import React, { Component } from "react";
import produceImg from "@/img/produce.png";
import "./index.less"

class ComIntro extends Component {
    render() {
        const { intro } = this.props
        return (
            <div className="com-intro">
                <div className="com-intro-top">
                    <div className="produce-img">
                        <div className="title">{intro.title}</div>
                        <img src={produceImg} alt="" />
                    </div>
                </div>
                <div className="com-intro-bottom">
                    <div className="icon">
                        <div className="icon1">
                            <div className="icon2"></div>
                        </div>
                    </div>
                    <div className="content">{intro.content}</div>
                </div>
            </div>
        )
    }
}
export default ComIntro