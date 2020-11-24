import React from 'react';
import {FeaturesContainer, FeaturesHeader, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2, FeaturesP} from './Styled'


const Features = () => {
    return (
        <FeaturesContainer id='features'>
            <FeaturesHeader>Upcoming / Featured</FeaturesHeader>
            <FeaturesWrapper>
                <FeaturesCard>
                    <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074112/EDCLV2019_0517_181349-_DGD-gallery.jpg'/>
                    <FeaturesP></FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074333/EDCLV2019_0520_013108-7298_MVA-gallery.jpg'/>
                    <FeaturesP></FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074346/EDCLV2019_0520_042416-1311_CTL-gallery.jpg'/>
                    <FeaturesP></FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074346/EDCLV2019_0520_042416-1311_CTL-gallery.jpg'/>
                    <FeaturesP></FeaturesP>
                </FeaturesCard>
            </FeaturesWrapper>
        </FeaturesContainer>
    )
}

export default Features
