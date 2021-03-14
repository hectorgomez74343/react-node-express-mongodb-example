import React from "react";
import Card from "./Card";
import { withRouter } from "react-router-dom";

class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Cards">
              <h2>Ocean Side Internet Cable Phone Company</h2>
              <h4 className="phone-number"> (760)-455-4701</h4>
              <div className="CardGroup">
                <Card
                  title="$10 a month 100 Cable Channels"
                  text="Click to buy"
                  image="/images/networks.jpg"
                />
                <Card
                  title="$10 a month 1GB Internet (router included)"
                  text="Click to buy"
                  image="/images/internet.jpg"
                />
                <Card
                  title="$10 a month 3 phone lines"
                  text="Click to buy"
                  image="/images/phone.jpg"
                />
                <Card
                  title="$15 Cable and Internet bundle"
                  text="Click to buy"
                  image="/images/cableandphone.jpg"
                />
                <Card
                  title="$15 Cable and Phone Bundle"
                  text="Click to buy"
                  image="/images/cableandphonebundle.png"
                  style={{ width: "18rem", height: "14rem" }}
                />
                <Card
                  title="$15 Internet and Phone Bundle"
                  text="Click to buy"
                  image="/images/pandi.png"
                />
                <Card
                  title="$25 Cable, Internet and Phone Bundle"
                  text="Click to buy"
                  image="/images/cpi.webp"
                  style={{ width: "19rem", height: "15rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
