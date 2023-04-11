import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboards extends Component {
    render() {
        return (
            <div className="small_box">
                <div className="box_content">
                <a class="dot_menu"></a> 
                <img class="image" src={this.props.label}></img>
                    <div class="eventnamebox">
                        <Link to="/EventDashboard.jsx" class="event_name">{this.props.children}</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboards;