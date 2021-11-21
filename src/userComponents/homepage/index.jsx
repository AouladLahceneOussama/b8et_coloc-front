import React from "react";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { MoreAboutSection } from "./moreAboutSection";
import { ReviewsSection } from "./reviewsSection";
import  Contact from "./contact";

import  Footer  from "./footer";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) 
{
    return (
    <PageContainer>
      <TopSection />
      <MoreAboutSection />
      <ReviewsSection />
      <Contact />
      <Footer />
    </PageContainer>
    
    );
}