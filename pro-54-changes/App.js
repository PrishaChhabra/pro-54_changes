import  React, {Component} from 'react';
import { Text, View, Button} from 'react-native';

class Button1 extends Component {
  displayAlert=()=>{
     alert("This is the track-1");
  }
  render(){
    return(
       <View style={{marginTop:30, }}>
    <Button title="Sound-1" onPress={this.displayAlert}/>
     </View>
    );
  }
}

class BrownButton extends Component {
  displayAlert=()=>{
     alert("This is the track-2");
  }
  render(){
    return(
       <View style={{marginTop:30}}>
    <Button color={"brown"} title="Sound-2" onPress={this.displayAlert}/>
     </View>
    );
  }
}

class PurpleButton extends Component {
  displayAlert=()=>{
     alert("This is the track-3");
  }
  render(){
    return(
       <View style={{marginTop:30}}>
    <Button color={"purple"} title="Sound-3" onPress={this.displayAlert}/>
     </View>
    );
  }
}

class BlackButton extends Component {
  displayAlert=()=>{
     alert("This is the track-4");
  }
  render(){
    return(
      <View style={{marginTop:30}}>
    <Button color={"black"} title="Sound-4" onPress={this.displayAlert}/>
    </View>
    );
  }
}

export default class App extends Component {
  render(){
    return(
      <View style={{backgroundColor:'pink'}} >
       <Button1/>
       <BrownButton/>
        <PurpleButton/>
        <BlackButton/>
      </View>

    )
  }
}
