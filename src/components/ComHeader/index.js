import React, { Component } from "react";
import "./index.less";
import sun from "@/img/sun.png";
import cloud from "@/img/cloud.png";
import nosun from "@/img/nosun.png";
import middlerain from "@/img/middlerain.png";
import middlesnow from "@/img/middlesnow.png";
import lei from "@/img/lei.png";
import shachen from "@/img/shachen.png";
import wu from "@/img/wu.png";
import bingbao from "@/img/bingbao.png";
import moment from 'moment';

class ComHeader extends Component {
    state = {
        weatherType: {
            xue: middlesnow,
            lei: lei,
            shachen: shachen,
            wu: wu,
            bingbao: bingbao,
            yun: cloud,
            yu: middlerain,
            yin: nosun,
            qing: sun
        },
        date: moment().format("YYYY-MM-DD"),
        time: moment().format("HH:mm:ss")
    }
    render() {
        const { children, title, weather } = this.props
        return (
            <div className="main-content">
                <div className="content-head">
                    <div className="time">
                        <span className="mgr10">{this.state.date}</span>
                        <span>{this.state.time}</span>
                    </div>
                    <div className="title">
                        {title}
                    </div>
                    <div className="weather-list">
                        <div class="weather">
                            <img src={this.state.weatherType.yu} alt="" />
                            {weather.wea}
                        </div>
                        <div class="weather">
                            <div class="aqi temperature">
                                <span>{weather.temperature}</span>
                            </div>
                            温度
                            </div>
                        <div class="weather">
                            <div class="aqi humidity">
                                <span>{weather.humidity}%</span>
                            </div>
                            湿度
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    {children}
                </div>
            </div >
        )
    }

    componentDidMount(){
        this.getDate()
    }

    getDate=()=>{
        setInterval(()=>{
            this.setState({
                date: moment().format("YYYY-MM-DD"),
                time: moment().format("HH:mm:ss")
            })
        },1000)
    }
}

export default ComHeader