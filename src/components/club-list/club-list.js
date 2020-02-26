import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withClubstoreService } from '../hoc';
import { clubsLoaded } from '../../actions'
import ClubListItem from '../club-list-item';
import Spinner from '../spinner';

import './club-list.css';

class ClubList extends Component {

    componentDidMount() {
        const {clubstoreService, clubsLoaded} = this.props;
        
        clubstoreService.getClubs()
            .then((data) => {
                console.log(data)
                clubsLoaded(data.data)
            })
    }

    filterItems(clubs, filter) {
        if (filter === 'All') {
          return clubs;
        } else if (filter === 'Kometa в ТРЦ Columbus') {
          return clubs.filter((item) => item.club.name ==='Kometa в ТРЦ Columbus');
        } else if (filter === 'Kometa в ТРК Mari') {
            return clubs.filter((item) => item.club.name ==='Kometa в ТРК Mari');
          } else if (filter === 'Kometa Black') {
          return clubs.filter((item) => item.club.name ==='Kometa Black');
        }
      }

    render() {
        const { clubs, loading, filter } = this.props;

        const visibleItems = this.filterItems(clubs, filter);
        if(loading){
            return <Spinner />
        }

        const convertDay = (date) => {
            let dateObj = new Date(date);
            let weekDay = dateObj.toLocaleString('ru',{ weekday: 'long' });
            return weekDay[0].toUpperCase() + weekDay.slice(1);
        }
        const convertMonthDay = (date) => {
            let dateObj = new Date(date);
            let monthDay = dateObj.toLocaleString('ru',{ month: 'long', day: '2-digit' });
            return ' - ' + monthDay;
        }
        

        let trainingDays = new Set();
        clubs.forEach(club => {
            let trainingDay = club.startDate.split('T')[0];
            trainingDays.add(trainingDay)
        });
        trainingDays = Array.from(trainingDays); 

        return (
            <div>
                {
                    trainingDays.map((item) => {
                        return (
                            <Fragment key={item}>
                                <span className="date">{convertDay(item)}</span>
                                <span className="date dateMonth">{convertMonthDay(item)}</span>

                                <ul className="list">
                                    {
                                        visibleItems.map((club) => {
                                            if(item === club.startDate.split('T')[0]){
                                                return (
                                                    <li key={club.id} className="list-group-item">
                                                        <ClubListItem club={club} />
                                                    </li>
                                                )
                                            }
                                            else return true;
                                        })
                                    }
                                </ul>
                            </Fragment>
                        )
                    })
                }
                
            </div>
        )
    }
}

const mapStateToProps = ({ clubs, loading }) => {
    return { clubs, loading }
}

const mapDispatchToProps = {
    clubsLoaded
}

export default withClubstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(ClubList)
);