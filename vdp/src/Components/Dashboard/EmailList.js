import React from 'react'
import { ListGroup } from 'react-bootstrap';
import 'firebase/firestore';

function EmailList(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.email.email}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default EmailList
