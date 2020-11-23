import React from 'react'
import firebase from "firebase/app";
import 'firebase/firestore';
import EmailList from '../Components/Dashboard/EmailList'
import {useCollectionData} from 'react-firebase-hooks/firestore'

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
        <div>
            {mailinglist && mailinglist.map(email => <EmailList key={email.id} email={email}/>)}
        </div>
    )
}

export default Dashboard
