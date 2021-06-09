import React from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Dropdown, Menu, Image } from 'semantic-ui-react'
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";


export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
        <Menu.Item
          name="home"
      
        />
        <Menu.Item
          name="messages"
        
        />
        <Menu.Menu position="right">
         <CartSummary/>
         <SignedOut/>
         <SignedIn/>
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
