import React, { Component } from "react";
import { Link } from 'react-router-dom'

class MagicWall extends Component{
    render(){
        return(
            <div>
                  <Link to="/data-center" target="_blank">数据中心</Link>
            </div>
        )
    }
}

export default MagicWall