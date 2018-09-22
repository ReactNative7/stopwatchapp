import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Button} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {mytimer:0, counterStart:''}
  }
  render() {
    return (
        <Container>
          <Header></Header>
          <Content style={{padding: 20}} >
            <Grid>
              <Row>
                <Col>
                  <Text style={{fontSize:30, textAlign:'center',marginVertical:20,}}>Stopwatch</Text>
                </Col>
              </Row>
              <Row style={{height:60, marginTop:20}}>
                <Col>
                  <Button block success
                    onPress={this.onStartTime.bind(this)}
                  >
                    <Text>Start</Text>
                  </Button>
                </Col>
                <Col>
                <Button block danger
                  onPress={this.onEndTime.bind(this)}
                >
                    <Text>Stop</Text>
                  </Button>
                </Col>
                <Col>
                <Button block warning 
                  onPress={this.onReset.bind(this)}
                >
                    <Text>Reset</Text>
                  </Button>
                </Col>
              </Row>
              <Row style={{justifyContent:'center',marginTop:50}}>
                <Text style={{
                  width:100,
                  height:100, 
                  backgroundColor:'black',
                  color:'white',
                  fontSize:30,
                  borderRadius: 50,
                  textAlign:'center',
                  lineHeight:100,}}>
                  {this.state.mytimer}
                </Text>
              </Row>
            </Grid>
          </Content>
        </Container>
    );
  }
  onStartTime(){
    this.state.counterStart = setInterval(this.onStart.bind(this) , 1000);
  }
  onStart(){
    this.setState({mytimer: this.state.mytimer + 1});
  }
  onReset(){
    this.setState({mytimer: 0});
    clearInterval(this.state.counterStart);
  }
  onEndTime(){
    clearInterval(this.state.counterStart);
  }
}
