import React from 'react';

const placesAPI = 'AIzaSyB_qKihkMk6qBzNenSu0I3Pp0C8cdlXLcE';
export default class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="city" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="country" className="form-control"/>
                </div>
                <button className="btn btn-success">Get wheather</button>
            </form>
        );
    }
}