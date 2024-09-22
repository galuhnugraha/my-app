import React,{useState} from "react";
import { View,Text,Image,TouchableOpacity,StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({ item }: { item: any }) => (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image source={item.image} style={styles.userImage} />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{item.title}</Text>
          <Text style={styles.userDate}>· {item.date}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="ellipsis-horizontal-sharp" size={24} color="white" style={styles.ellipsisIcon} />
      </TouchableOpacity>
    </View>
  );

  export default Header

  const styles = StyleSheet.create({
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
  })