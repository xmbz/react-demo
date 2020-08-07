import React, { Component } from "react";

import ComHeader from '@/components/ComHeader/index'
import ComBox from '@/components/ComBox/index'
import ComIntro from '@/components/ComIntro/index'

class DataCenter extends Component {
    state = {
        title: "",
        weather: {
            temperature: "30℃",
            humidity: 51,
            wea: "多云",
        },
        intro: {
            cnTitle: "企业介绍",
            enTitle: "COMPANY INTRODUCE",
            title: "上海临港产业区产业园",
            content: "依托临港集团在建设临港新片区的发展中提现国家战略、上海优势、国际竞争力。立足打造高端制造、智能制造、自主制造的一流产业园区。引领新能源装备，汽车整车及零部件、船舶关键件、民用航天、海洋工程、工程机械、以及战略性新兴产业“6+1”产业集群的发展"
        },
        
    }
    render() {
        const introContent = (
            <ComIntro intro={this.state.intro}></ComIntro>
        )
        const content = (
            <div>
                <div className="left">
                    <ComBox box={this.state.intro} children={introContent}></ComBox>
                </div>
            </div>
        )
        return (
            <div>
                <ComHeader title={this.state.title} weather={this.state.weather} children={content}></ComHeader>
            </div>
        )
    }
}

export default DataCenter