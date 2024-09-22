import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation,NavigationProp } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RootStackParamList } from "@/app/types";


type DetailKomenPageProps = {
  caption: string;
};

type ActionsProps = {
  item: DetailKomenPageProps;
};

const Actions = ({ item }: ActionsProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCommentPress = (item: DetailKomenPageProps) => {
    navigation.navigate("DetailKomenPage", { caption: item.caption });
  };

  return (
    <View style={styles.container}>
      <View style={styles.voteContainer}>
        <View style={styles.voteButtonContainer}>
          <TouchableOpacity style={styles.voteButton}>
            <MaterialCommunityIcons name="arrow-up-bold-outline" size={20} color="white" />
            <Text style={styles.voteCount}>54</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.downVoteButton}>
            <MaterialCommunityIcons name="arrow-down-bold-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <CommentButton onPress={() => {
          handleCommentPress(item)
        }} />
      </View>
      <ShareButton />
    </View>
  );
};

const CommentButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity style={styles.commentButton} onPress={onPress}>
    <MaterialIcons name="chat" size={20} color="white" />
    <Text style={styles.voteCount}>5</Text>
  </TouchableOpacity>
);

const ShareButton = () => (
  <TouchableOpacity style={styles.shareButton}>
    <FontAwesome name="share" size={20} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  voteContainer: {
    flexDirection: "row",
  },
  voteButtonContainer: {
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 10,
  },
  voteButton: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8, // Adjusted for consistency
  },
  downVoteButton: {
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8, // Adjusted for consistency
  },
  commentButton: {
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 15,
    paddingHorizontal: 10,
    paddingVertical: 8, // Adjusted for consistency
  },
  shareButton: {
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 15,
    paddingHorizontal: 10,
    paddingVertical: 8, // Adjusted for consistency
  },
  voteCount: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
});

export default Actions;
