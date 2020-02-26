import React, { Component } from 'react';
import ClubList from '../club-list';
import DropdownAction from '../dropdown';
import './app.css';

export default class App extends Component {
    state = {
        filter: 'All'
    }
    onFilterChange = (filter) => {
        this.setState({ filter });
      };

    render(){

        const { filter } = this.state;

        return (
            <div className="container">
                <h1>Расписание тренировок</h1>
                <DropdownAction 
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />

                <ClubList clubs={this.props} filter={filter} />
            </div>
        );
    }
};