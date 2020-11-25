import React from 'react'
import firebase from "firebase/app";
import 'firebase/firestore';
import EmailList from '../Components/Dashboard/EmailList'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { useCollection } from 'react-firebase-hooks/firestore';
import { Card, CardDeck, Container, Table } from  'react-bootstrap';
import AdminMenu from '../Components/Dashboard/AdminMenu'
import icon from '../../src/add_circle_outline-24px.svg'
import Footer from '../Components/Footer/index'
import "../App.css"

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_FB_APIKey,
        authDomain: process.env.REACT_APP_FB_AUTHD,
        databaseURL: process.env.REACT_APP_FB_DBURL,
        projectId: "virtualdanceparty-ff346",
        storageBucket: process.env.REACT_APP_FB_SB,
        messagingSenderId: process.env.REACT_APP_FB_MSID,
        appId: process.env.REACT_APP_FB_APPID,
        measurementId: "G-LXHE6CTR7G"
    })
}

function Dashboard() {

    const firestore = firebase.firestore();

    const mailingList = firestore.collection("mailinglist");

    const emails = mailingList.orderBy('createdAt', 'desc');

    const [ mailinglist ] = useCollectionData(emails, {idField: 'id'});


    return (
        <>
        <AdminMenu/>
        <Container className="mt-5">
            {!mailinglist && <span>Loading...</span>}
            <h2 className="text-left admintitle" styles={{fontWeight: "700"}}>Newsletter Email Signup List</h2>
            <CardDeck className="mt-5">
            <Card id="admin-card">
            <Card.Header id="admin-card">Total Active Signups:</Card.Header>
                <Card.Body id="admin-card">
                <Card.Title>
                    {mailinglist && mailinglist.length}
                </Card.Title>
            </Card.Body>
            </Card>
            <Card id="admin-card">
            <Card.Header id="admin-card">MTD Signups:</Card.Header>
                <Card.Body className="admin-card">
                <Card.Title>
                    {mailinglist && mailinglist.length}
                </Card.Title>
            </Card.Body>
            </Card>
            <Card id="admin-card">
            <Card.Header id="admin-card">Most Recent Signup</Card.Header>
                <Card.Body id="admin-card">
                <Card.Title>
                    {mailinglist && mailinglist[0].createdAt.toDate().toDateString()}
                </Card.Title>
            </Card.Body>
            </Card>
            <img src={icon} />
            </CardDeck>

        </Container>

        <Container className="mt-5">
        <div className="dashboardbtns">
        <button>FILTER</button><button>EDIT</button>
        </div>
        <Table borderless hover responsive className="dashboardtable">
            <thead>
                <tr>
                <th id="dashboardtabletitles">Email</th>
                <th id="dashboardtabletitles">Full Name</th>
                <th id="dashboardtabletitles">Subscription Date</th>
                <th id="dashboardtabletitles">Subscription Status</th>
                </tr>
            </thead>
            <tbody>
            {mailinglist && mailinglist.map(email => <EmailList key={email.id} email={email} />)}
            </tbody>
        </Table>
        </Container>
        <div className="dashboardbtns"></div>
        </>
    )
}

export default Dashboard
