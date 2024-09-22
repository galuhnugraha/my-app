import React from "react";
import { View,StyleSheet } from "react-native";

const ProgressBar = ({ position, duration }: { position: number; duration: number }) => (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${(position / duration) * 100}%` }]} />
    </View>
  );
  
  export default ProgressBar;

  const styles = StyleSheet.create({
    progressContainer: {
        width: '100%',
        height: 5,
        backgroundColor: '#e0e0e0',
        marginTop: -5,
        borderRadius: 2,
        overflow: 'hidden',
      },
      progressBar: {
        height: '100%',
        backgroundColor: '#3aa2f4',
      },
  })