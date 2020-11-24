import React from 'react';
import {FeaturesContainer, FeaturesHeader, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesCardTop, FeaturesCardBot, FeaturesP} from './Styled'
import Card from 'react-bootstrap/Card'

const Past = () => {
    return (
        <FeaturesContainer id='features'>
            <FeaturesWrapper>
                <Card className="featurescard">
                    <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074157/EDCLV2019_0517_224241-3024_CMP-gallery.jpg'/>
                    <Card.Body>
                        <Card.Title>RECENT PARTIES</Card.Title>
                        <Card.Text>
                        Watch some of our favorite DJs spin.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="featurescard">
                    <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074118/EDCLV2019_0517_194200-3097_DRB-gallery.jpg'/>
                    <Card.Body>
                        <Card.Title>SET UP A PARTY</Card.Title>
                        <Card.Text>
                        Learn how to host and how to share the best sound!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="featurescard">
                    <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074121/EDCLV2019_0517_200817-1690_CTL-gallery.jpg'/>
                    <Card.Body>
                        <Card.Title>FEATURED ARTISTS</Card.Title>
                        <Card.Text>
                        Find and hire your favorite DJs for your own Virtual Dance Party!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </FeaturesWrapper>
        </FeaturesContainer>
    )
}

export default Past


