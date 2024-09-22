import React from "react";
import { StyleSheet, Text } from "react-native";

const Caption = ({ caption }: { caption: string }) => (
    <Text style={styles.text}>{caption}</Text>
);

export default Caption;


const styles = StyleSheet.create({
    text: {
        color: "white", fontSize: 13, marginTop: 10, marginBottom: 10
    }
})