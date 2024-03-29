import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from "./welcomes_screen"
import DeckSwipeHelp from "./DeckSwiper"
import ChatScreen from "./chat_screen"

import { Container, Content } from 'native-base'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    backgroundColor: "#ffedf1",

  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      outerScrollEnabled: true
    }
  }

  verticalScroll = (index) => {
    if (index !== 1) {
      this.setState({
        outerScrollEnabled: false
      })
    }
    else {
      this.setState({
        outerScrollEnabled: true
      })
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Swiper
            loop={false}
            showsPagination={false}
            index={1}
            scrollEnabled={this.state.outerScrollEnabled}
          >

            <View style={styles.slideDefault}>
              <Homescreen/>
            </View>
            <Swiper
              loop={false}
              showsPagination={false}
              horizontal={false}
              index={1}
              onIndexChanged={(index) => this.verticalScroll(index)}
            >
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Search</Text>
              </View>
              <View style={styles.slideDefault}>
                <ChatScreen/>
              </View>
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Memories</Text>
              </View>
            </Swiper>
            <View style={styles.slideDefault}>
              <DeckSwipeHelp/>
            </View>
          </Swiper>
        </Content>
      </Container>
    );
  }
}

