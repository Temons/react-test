import React from 'react';
import './club-list-item.css';

const ClubListItem = ({ club }) => {

    const timeConvert = (time) => {
        const timeString = time.split(':')
        return timeString[0] + ':' + timeString[1];
    }

    return (
       <div className="box">
        <div className="workingTime col-3">{timeConvert(club.workingHours.start)} - {timeConvert(club.workingHours.end)}</div>
        <span className="trainName col-5">{club.name}</span>
        <div className="col-4">
            <p className="clubName">Клуб</p>
            <p>{club.club.name}</p>
        </div>
       </div>

   )
};

export default ClubListItem;