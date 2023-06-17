import React from 'react';
import Pr from 'prop-types';
import { EDU_TO_TEXT, INTEREST_TO_TEXT } from '../constants';

export const MembersList = ({ records }) => {

    return (
        <div id="viewMembers">
            <table>
                <thead>
                    <tr>
                        <td>Sr No</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>City</td>
                        <td>Education</td>
                        <td>Interests</td>
                    </tr>
                </thead>
                <tbody>
                {
                    records.map( ({ id, name, phone, city, education, interests }, index) => {
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{city}</td>
                                <td>{EDU_TO_TEXT[education]}</td>
                                <td>
                                    {
                                        interests.map((interestId) => <div className="interestItem" key={interestId}>{INTEREST_TO_TEXT[interestId]}</div> )
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                
            </table>
        </div>
        
    );

   
}

MembersList.propTypes = {} // add entry for records here