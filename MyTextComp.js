import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const MyTextComp = (props) => {
  return (
    <View>
      <Text
        style={StyleSheet.create({
          fontSize: 20,
          fontWeight: "bold",
        })}
      >
        {props.NoidungText}
      </Text>
    </View>
  );
};

export default MyTextComp;
