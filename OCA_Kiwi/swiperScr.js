import React, { Component } from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper'


export default class SwiperSrc extends Component{
    render(){
        return(
        <Container>
        <Content>
          <Swiper>
            <View style={{flex:1}}>
              <Text>Screen 1</Text>
            </View>
            <View style={{flex:1}}>
              <Text>Screen 2</Text>
            </View>
            <View style={{flex:1}}>
              <Text>Screen 3</Text>
            </View>
          </Swiper>
        </Content>
      </Container>
        )
    }
}


// const styles = Stylesheet.create({
//     slideDefault:{
//       flex: 1,
//       backgroundColor: '#9DD6EB',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }
//   })