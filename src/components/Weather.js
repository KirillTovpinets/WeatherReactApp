import React from 'react';

export default class Weather extends React.Component{
    render(){
        return(
            <div className="weather-output">
                <div className="content">
                    {!this.props.temperature && <h1>Please, choose location</h1>}
                    {this.props.temperature && <p>Location: {this.props.temperature}</p>}
                    {this.props.city && <p>City: {this.props.city}</p>}
                    {this.props.country && <p>Country: {this.props.country}</p>}
                    {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                    {this.props.description && <p>Description: {this.props.description}</p>}
                </div>
            </div>
        )
    }
}