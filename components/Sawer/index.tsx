{/* <View style={styles.tagContainer}>
<View style={styles.dollarContainer}>
  <View style={styles.iconWrapper}>
    <Image
      source={require("../../assets/images/dollar.png")}
      style={styles.dollarIcon}
    />
  </View>
  <Text style={styles.dollarText}>Sawer</Text>
</View>
<Tags tags={item.tags} />
</View> */}

import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Tags from "../Tags";

const Sawer = ({ tags }: { tags: Array<{ title: string }> }) => {
  return (
    <View style={styles.tagContainer}>
      <View style={styles.dollarContainer}>
        <View style={styles.iconWrapper}>
          <Image
            source={require("../../assets/images/dollar.png")}
            style={styles.dollarIcon}
          />
        </View>
        <Text style={styles.dollarText}>Sawer</Text>
      </View>
      <Tags tags={tags} />
    </View>
  );
};

export default Sawer;

const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      dollarContainer: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100,
        marginTop: 18,
      },
      iconWrapper: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
      },
      dollarIcon: {
        width: 12,
        height: 12,
        tintColor: 'orange',
      },
      dollarText: {
        color: "white",
        fontSize: 14,
      },
})