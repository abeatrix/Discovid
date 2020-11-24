import React from 'react'
import firebase from "firebase/app";
import 'firebase/firestore';
import EmailList from '../Components/Dashboard/EmailList'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { useCollection } from 'react-firebase-hooks/firestore';
import { Card, CardDeck, Container } from  'react-bootstrap';
import Menu from '../Components/Landing/Menu'
import icon from '../../src/add_circle_outline-24px.svg'

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
        <Menu/>
        <Container className="mt-5">
            {!mailinglist && <span>Loading...</span>}
            <h2 className="text-left">Newsletter Email Signup List</h2>
            <CardDeck className="mt-5">
            <Card>
            <Card.Header>Total Active Signups:</Card.Header>
                <Card.Body>
                <Card.Title>
                    {mailinglist && mailinglist.length}
                </Card.Title>
            </Card.Body>
            </Card>
            <Card>
            <Card.Header>MTD Signups:</Card.Header>
                <Card.Body>
                <Card.Title>
                    {mailinglist && mailinglist.length}
                </Card.Title>
            </Card.Body>
            </Card>
            <Card>
            <Card.Header>Most Recent Signup</Card.Header>
                <Card.Body>
                <Card.Title>
                    {mailinglist && mailinglist[0].createdAt.toDate().toDateString()}
                </Card.Title>
            </Card.Body>
            </Card>
            <img src={icon} />
            </CardDeck>
            
           
            {mailinglist && console.log(mailinglist[0].createdAt)}            
            
            {mailinglist && mailinglist.map(email => <EmailList key={email.id} email={email} />)}
        </Container>
        </>
    )
}

export default Dashboard
