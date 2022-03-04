import React from 'react'

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../styles/styled.js";

const Footer = () => {
  return (
    <div>

<Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">SarsNOVA</FooterLink>
           
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">SALES</FooterLink>
          </Column>
          
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            
           
          </Column>
        </Row>
      </Container>
    </Box>
    </div>
  )
}

export default Footer