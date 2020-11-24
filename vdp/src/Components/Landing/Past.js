import React from 'react';
import {PastContainer, PastHeader, PastWrapper} from './Styled'
import Table from 'react-bootstrap/Table'
import "../../App.css"


const Past = () => {
    return (
        <PastContainer id='features'>
            <PastHeader>Past Events/Artists</PastHeader>
            <PastWrapper>
            <Table responsive="xl"  hover size="lg" style={{padding: "25px"}}>
                <thead>
                    <tr>
                    <th>Date</th>
                        <th>Event</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Friday, June 18, 2021</th>
                        <th>Excision</th>
                        <th>San Bernardino, CA</th>
                    </tr>
                    <tr>
                    <th>Saturday, June 12, 2021</th>
                        <th>Ganja White Night</th>
                        <th>San Francisco, CA</th>
                    </tr>
                    <tr>
                    <th>Saturday, July 3, 2021</th>
                        <th>Day Trip Festival</th>
                        <th>Los Angeles, CA</th>
                    </tr>
                    <tr>
                    <th>Saturday, August 28, 2021</th>
                        <th>Live NOW Festival</th>
                        <th>San Diego, CA</th>
                    </tr>
                </tbody>
                </Table>
            </PastWrapper>
        </PastContainer>
    )
}

export default Past
