import React from "react";
import { withRouter } from "react-router-dom";
import cableAndPhoneImage from "../images/cableandphone.jpg";
import cableAndPhoneBundle from "../images/cableandphonebundle.png";
import networkImage from "../images/networks.jpg";
import cpiImage from "../images/cpi.webp";
import internetImage from "../images/internet.jpg";
import pandiImage from "../images/pandi.png";
import phoneImage from "../images/phone.jpg";

import Card from "./Card";

class IndexPage extends React.PureComponent {
  render() {
    return (
      <div className="Cards">
        <h2>Internet, Phone, Cable Company</h2>
        <h4 className="phone-number"> (760)-455-4701</h4>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <Card
              title="$10 a month 100 Cable Channels"
              text="Click to buy"
              image={networkImage}
            />
            <Card
              title="$10 a month 1GB Internet (router included)"
              text="Click to buy"
              image={internetImage}
            />
            <Card
              title="$10 a month 3 phone lines"
              text="Click to buy"
              image={phoneImage}
            />
            <Card
              title="$15 Cable and Internet bundle"
              text="Click to buy"
              image={cableAndPhoneImage}
            />
            <Card
              title="$15 Cable and Phone Bundle"
              text="Click to buy"
              image={cableAndPhoneBundle}
              style={{ width: "18rem", height: "14rem" }}
            />
            <Card
              title="$15 Internet and Phone Bundle"
              text="Click to buy"
              image={pandiImage}
            />
            <Card
              title="$25 Cable, Internet and Phone Bundle"
              text="Click to buy"
              image={cpiImage}
              style={{ width: "19rem", height: "15rem" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
