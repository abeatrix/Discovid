import React from 'react';
import {FeaturesContainer, FeaturesHeader, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesCardTop, FeaturesCardBot, FeaturesP} from './Styled'
import Card from 'react-bootstrap/Card'

const Features = () => {
    return (
        <FeaturesContainer id='features'>
        <FeaturesWrapper>
        <Card style={{ width: '18rem' }} className="featurescard">
            <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074112/EDCLV2019_0517_181349-_DGD-gallery.jpg'/>
            <Card.Body>
                <Card.Title>COMING EVENTS</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="featurescard">
            <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074333/EDCLV2019_0520_013108-7298_MVA-gallery.jpg'/>
            <Card.Body>
                <Card.Title>FIND FRIENDS</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="featurescard">
            <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074346/EDCLV2019_0520_042416-1311_CTL-gallery.jpg'/>
            <Card.Body>
                <Card.Title>RECENT ARTISTS</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        </FeaturesWrapper>
    </FeaturesContainer>
    )
}

export default Features


