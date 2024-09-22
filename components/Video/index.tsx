import React,{useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProgressBar from "../ProgressBar";
import Octicons from '@expo/vector-icons/Octicons';

const VideoPlayer = ({ videoRef, content, status, isMuted, setIsMuted, handlePlaybackStatusUpdate }: any) => (
    <View style={styles.videoContainer}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: content }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        isMuted={isMuted}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <Ionicons
        name={status.isPlaying ? "pause-circle" : "play-circle"}
        size={64}
        color="rgba(0, 0, 0, 0.6)"
        style={styles.playPauseButton}
        onPress={() => {
          status.isPlaying ? videoRef.current?.pauseAsync() : videoRef.current?.playAsync();
        }}
      />
     <View style={styles.buttonContainer}>
            {isMuted ? (
                <Ionicons
                    name={"volume-mute-outline"}
                    size={18}
                    color="white" // Ikon berwarna putih
                    style={styles.muteButton}
                    onPress={() => setIsMuted(!isMuted)}
                />
            ) : (
                <Octicons
                    name="unmute"
                    size={18}
                    color="white" // Ikon berwarna putih
                    style={styles.muteButton}
                    onPress={() => setIsMuted(!isMuted)}
                />
            )}
        </View>
      <ProgressBar position={status.positionMillis} duration={status.durationMillis} />
    </View>
  );

  export default VideoPlayer;

  const styles = StyleSheet.create({
    videoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      video: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
      },
      playPauseButton: {
        position: 'absolute',
        top: '35%',
        left: '40%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      },
      muteButton: {
        alignItems: "center"
        // position: 'absolute',
        // bottom: 10,
        // right: 10,
        // backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        height:38,
        width:38,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Latar belakang hitam transparan
        borderRadius: 100, // Sudut melingkar
        padding: 10, // Menambah padding
        // alignItems: 'center',
        // justifyContent: 'center',
    },
  })