import { View,StyleSheet } from "react-native";


const Divider = () => <View style={styles.divider} />;

export default Divider;

const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 3,
        borderBottomColor: "black",
      },
})