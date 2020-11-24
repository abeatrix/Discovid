import React from 'react'
import { ListGroup } from 'react-bootstrap';
import 'firebase/firestore';

function EmailList(props) {
    return (
        <tr>
                <td>{props.email.email}</td>
                <td>{props.email.firstName}</td>
                <td>{props.email.createdAt.toDate().toDateString()}</td>
                <td>Active</td>
        </tr>
    )
}

export default EmailList
