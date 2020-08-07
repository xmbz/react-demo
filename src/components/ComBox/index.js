import React, { Component } from "react";
import "./index.less";

class ComBox extends Component {
    render() {
        const { children, box } = this.props

        let moreDiv
        if (box.showMore) {
            moreDiv = <div className="more">更多</div>
        }else{
            moreDiv =""
        }
        return (
            <div className="com-box">
                <div className="title">
                    <div className="cn">{box.cnTitle}</div>
                    <div className="en">{box.enTitle}</div>
                    {moreDiv}

                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        )
    }
}

export default ComBox