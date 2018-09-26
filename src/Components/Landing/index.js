import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  Image,
  Icon,
  Sidebar,
  Menu,
  Checkbox
} from "semantic-ui-react";
import Slider from "react-slick";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <div
          style={{
            maxHeight: 600,
            verticalAlign: "center",
            overflow: "hidden"
          }}
        >
          <Slider
            dots
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={2000}
            cssEase={"ease-in"}
            adaptiveHeight
          >
            <div>
              <Image src="/banner_1.jpeg" fluid />
            </div>
            <div>
              <Image src="/banner_2.jpeg" fluid />
            </div>
            <div>
              <Image src="/banner_3.jpeg" fluid />
            </div>
          </Slider>
        </div>

        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            vertical
            visible
            width={"wide"}
          >
            <Menu.Item>Comprar por</Menu.Item>
            <Menu.Item as="a">
              <Checkbox label="Tag 1" />
            </Menu.Item>
            <Menu.Item as="a">
              <Checkbox label="Tag 2" />
            </Menu.Item>
            <Menu.Item as="a">
              <Checkbox label="Tag 3" />
            </Menu.Item>
            <Menu.Item as="a">
              <Checkbox label="Tag 4" />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher
            as="div"
            style={{
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <Container>
              <Card.Group itemsPerRow={6}>
                <Card>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Matthew is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Matthew is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Matthew is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    // data: store.nameElementStore
    data: null
  };
})(Landing);
