import React from 'react';

export default class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city" class="form-control"/>
                <input type="text" name="country" placeholder="country" class="form-control"/>
                <button class="btn btn-success">Get wheather</button>
            </form>
        );
    }
}