import { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Image,FlatList, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Header from '@/components/Header';
import Caption from '@/components/Caption';
import VideoPlayer from '@/components/Video';
import Sawer from '@/components/Sawer';
import Actions from '@/components/Actions';
import { useNavigation } from '@react-navigation/native';
import Divider from '@/components/Divider';

const { width: screenWidth } = Dimensions.get('window');

interface PlaybackStatus {
  isPlaying: boolean;
  positionMillis: number;
  durationMillis: number;
}

export default function TrendingDataPage() {
  const navigation = useNavigation();
  const video = useRef<Video>(null);
  const [status, setStatus] = useState<PlaybackStatus>({ isPlaying: false, positionMillis: 0, durationMillis: 0 });
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

    const dataHome = [
      {
        id: 1,
        image: require("../../assets/images/default-profile.png"),
        title: "",
        date: "1 Hari",
        content: "https://cache.lahelu.com/image-PzvQUjQZd-19411",
        type: "image",
        tags: [{ title: "#random" }, { title: "#kartun" }, { title: "#indonesia" }],
      },
      {
        id: 2,
        image: require("../../assets/images/default-profile.png"),
        title: "faris_",
        date: "1 Hari",
        content: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        type: "video",
        tags: [{ title: "#random" }, { title: "#indonesia" }],
      },
    ];

  
    useEffect(() => {
      const playVideo = async () => {
        if (video.current) {
          await video.current.playAsync();
        }
      };
  
      const unsubscribe = navigation.addListener('focus', () => {
        // Resume video when the screen is focused
        playVideo();
      });
  
      const unsubscribeBlur = navigation.addListener('blur', () => {
        // Pause video when leaving the screen
        if (video.current) {
          video.current.pauseAsync();
        }
      });
  
      return () => {
        unsubscribe();
        unsubscribeBlur();
      };
    }, [navigation]);

    const imageHeight = screenWidth * (4 / 6);

    const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
      if ('isPlaying' in status) { // Type guard to check for AVPlaybackStatus
        setStatus({
          isPlaying: status.isPlaying,
          positionMillis: status.positionMillis ?? 0,
          durationMillis: status.durationMillis ?? 0,
        });
        setPosition(status.positionMillis || 0);
        setDuration(status.durationMillis || 0);
      }
    };

    const renderItem = ({ item }: any) => (
      <>
        <View key={item.id} style={styles.itemContainer}>
          <Header item={item} />
          <Caption caption={item.caption} />
          {item.type === "image" ? (
            <Image source={{ uri: item.content }} style={[styles.image, { height: imageHeight }]} resizeMode='cover' />
          ) : (
            <VideoPlayer
              videoRef={video}
              content={item.content}
              status={status}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              handlePlaybackStatusUpdate={handlePlaybackStatusUpdate}
            />
          )}
          <Sawer tags={item.tags}/>
          <Actions item={item} />
        </View>
        <Divider />
      </>
    )

    return (
      <View style={styles.container}>
        <FlatList
          data={dataHome}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#161616',
    },
    scrollContainer: {
     
      paddingTop: 15,
    },
    itemContainer: {
      marginBottom: 15,
      paddingHorizontal: 15,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 8,
    },
    userInfo: {
      flexDirection: "row",
      alignItems: 'center',
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    userDetails: {
      flexDirection: "row",
      alignItems: 'center',
    },
    userName: {
      color: "white",
      fontSize: 13,
      marginLeft: 10,
    },
    userDate: {
      color: "gray",
      fontSize: 13,
      marginLeft: 5,
    },
    ellipsisIcon: {
      marginTop: 10,
    },
    image: {
        width: '100%',
        borderRadius: 10,
    },
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
    },
    muteButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
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
      marginTop: 8,
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
    tag: {
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop: 8,
    },
    tagText: {
      color: 'white',
    },
    flatListContainer: {
      paddingHorizontal: 5,
    },
});
