import React from 'react';

export default class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.temperature && <p>{this.props.temperature}</p>}
                {this.props.city && <p>{this.props.city}</p>}
                {this.props.country && <p>{this.props.country}</p>}
                {this.props.humidity && <p>{this.props.humidity}</p>}
                {this.props.description && <p>{this.props.description}</p>}
            </div>
        )
    }
}