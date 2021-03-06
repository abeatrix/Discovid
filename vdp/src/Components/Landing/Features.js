import React from 'react';
import {FeaturesContainer, FeaturesHeader, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesCardTop, FeaturesCardBot, FeaturesP} from './Styled'
import Card from 'react-bootstrap/Card'

const Features = () => {
    return (
        <FeaturesContainer id='features'>
        <FeaturesWrapper>
        <Card className="featurescard">
            <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074112/EDCLV2019_0517_181349-_DGD-gallery.jpg'/>
            <Card.Body>
                <Card.Title><h4>COMING EVENTS</h4></Card.Title>
                <Card.Text>
                Check out our calendar for Discovid hosted parties!
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="featurescard">
            <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074333/EDCLV2019_0520_013108-7298_MVA-gallery.jpg'/>
            <Card.Body>
                <Card.Title><h4>FIND FRIENDS</h4></Card.Title>
                <Card.Text>
                Sign up to connect with your friends and host your own parties!
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="featurescard">
            <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074346/EDCLV2019_0520_042416-1311_CTL-gallery.jpg'/>
            <Card.Body>
                <Card.Title><h4>WHAT'S HAPPENING NOW</h4></Card.Title>
                <Card.Text>
                Find open partied to join!
                </Card.Text>
            </Card.Body>
        </Card>
        </FeaturesWrapper>
    </FeaturesContainer>
    )
}

export default Features


