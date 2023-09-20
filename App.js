import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Login from "./Login";
import React from "react";
import MyTextComp from "./MyTextComp";
import { TextProps } from "react-native";

class App extends React.Component {
  state = {
    myState: "Đây là trạng thái State 1",
  };

  updateText = () => {
    if (this.state.myState == "Đây là trạng thái State 1") {
      this.setState({ myState: "Đây là trạng thái State 2" });
    } else {
      this.setState({ myState: "Đây là trạng thái State 1" });
    }
    console.log(this.state.myState);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>I love Programing ♥</Text>
        <Text style={styles.text}>Đoạn văn bản</Text>
        <Text style={styles.subTitle}>{this.state.myState}</Text>
        <Button onPress={this.updateText} title="Click me"></Button>
        <MyTextComp NoidungText="Code buoi 3" />
        <MyTextComp NoidungText="Code buoi 4" />
        <View style={styles.boxStyle}>
          <View style={styles.redbox}></View>
          <View style={styles.bluebox}></View>
          <View style={styles.blackbox}></View>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 35,
    margin: 10,
    color: "#07aaf8",
  },
  text: {
    fontSize: 30,
    margin: 10,
    color: "black",
  },
  subTitle: {
    fontSize: 20,
    margin: 10,
    backgroundColor: "#218dde",
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
  boxStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default App;

// import React from "react";
// import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

// const App = () => {
//   const [myState, setMyState] = React.useState("Đây là trạng thái State 1");

//   const updateText = () => {
//     if (myState == "Đây là trạng thái State 1") {
//       setMyState("Đây là trạng thái State 2");
//     } else {
//       setMyState("Đây là trạng thái State 1");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <Text style={styles.heading}>Tiêu đề ♥♥</Text>
//       <Text style={styles.text}>Đoạn văn bản</Text>
//       <Text style={styles.subTitle}>{myState}</Text>
//       <Button onPress={updateText} title="Click me"></Button>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "violet",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   heading: {
//     fontSize: 40,
//     margin: 10,
//     color: "orange",
//   },
//   text: {
//     fontSize: 30,
//     margin: 10,
//     color: "black",
//   },
//   subTitle: {
//     fontSize: 20,
//     margin: 10,
//     color: "white",
//   },
// });
