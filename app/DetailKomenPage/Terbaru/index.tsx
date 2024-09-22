import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions, ImageSourcePropType } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const TerbaruScreen = () => {
    const data = [
        {
            id: 1,
            title: "zaky",
            image: require("../../../assets/images/default-profile.png"),
            date: "1 Hari",
            caption: "itu watermarknya siapa bang ?",
            is_comment: false,
            data_comment: [
                // {
                //     id: 1,
                //     title: "User",
                //     image: require("../../../assets/images/default-profile.png"),
                //     date: "10 jam yang lalu",
                //     caption: "punya ane bang..."
                // }
            ]
        },
        {
            id: 2,
            title: "liongkopi998",
            image: require("../../../assets/images/default-profile.png"),
            date: "2 Hari",
            caption: "itu siapa bang ?",
            is_comment: false,
            data_comment: [
                // {
                //     id: 1,
                //     title: "User",
                //     image: require("../../../assets/images/default-profile.png"),
                //     date: "10 jam yang lalu",
                //     caption: "punya ane bang..."
                // }
            ]
        }
    ]
    const [hideSub, setHideSub] = useState(Array(data.length).fill(true));

    const toggleReplies = (index: string | number) => {
        const numericIndex = typeof index === 'string' ? parseInt(index, 10) : index;

        setHideSub((prev) => {
            const newState = [...prev];
            newState[numericIndex] = !newState[numericIndex];
            return newState;
        });
    };

    const renderItem = ({ item, index }: any) => {
        return <>
            <View style={styles.userInfo}>
                <View>
                    <Image source={item.image} style={styles.userImage} resizeMode="cover" />
                </View>
                <View style={{ flexDirection: "column" }}>
                    <View style={styles.userDetails}>
                        <Text style={styles.userName}>{item.title}</Text>
                        <Text style={styles.userDate}>· {item.date}</Text>
                    </View>
                    <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>{item.caption}</Text>

                        <View style={styles.actionsContainer}>
                            <TouchableOpacity style={styles.likeButton}>
                                <AntDesign name="like2" size={18} color="white" />
                                <Text style={styles.likeCount}>3</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.replyButton}>
                                <Text style={styles.replyText}>Balas</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.ellipsisButton}>
                                <Ionicons name="ellipsis-horizontal-sharp" size={18} color="white" style={styles.ellipsisIcon} />
                            </TouchableOpacity>
                        </View>
                        {item.is_comment && (
                            <>
                                <TouchableOpacity
                                    style={[styles.button, { width: hideSub[index] ? 90 : 125 }]}
                                    onPress={() => toggleReplies(index)}
                                >
                                    <View style={styles.buttonContent}>
                                        <AntDesign
                                            name={hideSub[index] ? "caretdown" : "caretup"}
                                            size={14}
                                            color="#3aa2f4"
                                            style={hideSub[index] ? null : styles.iconMargin}
                                        />
                                        <Text style={styles.buttonText}>
                                            {hideSub[index] ? "Balasan" : "Tutup Balasan"}
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                {!hideSub[index] && (
                                    <FlatList
                                        data={item.data_comment}
                                        keyExtractor={(subItem, subIndex) => subIndex.toString()} // Menggunakan subIndex sebagai key
                                        renderItem={({ item: value, index: subIndex }) => (
                                            <View key={subIndex} style={styles.commentContainer}>
                                                <Image source={value.image} style={styles.commentImage} resizeMode="cover" />
                                                <View style={styles.commentDetails}>
                                                    <View style={styles.commentHeader}>
                                                        <Text style={styles.commentTitle}>{value.title}</Text>
                                                        <Text style={styles.commentDate}>· {value.date}</Text>
                                                    </View>
                                                    <Text style={styles.commentCaption}>{value.caption}</Text>
                                                    <View style={styles.commentActions}>
                                                        <TouchableOpacity style={styles.likeButton}>
                                                            <AntDesign name="like2" size={12} color="white" />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={styles.replyButton}>
                                                            <Text style={styles.replyText}>Balas</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={styles.optionsButton}>
                                                            <Ionicons name="ellipsis-horizontal-sharp" size={12} color="white" />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        )}
                                    />
                                )}
                            </>
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.divider} />
        </>
    }

    return <View style={{ flex: 1 }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.contentContainer} />
    </View>
}


export default TerbaruScreen;

const styles = StyleSheet.create({
    userInfo: {
        flexDirection: "row",
        alignItems: 'flex-start',
        marginVertical: 15
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 20,
    },
    userDetails: {
        flexDirection: "row",
        alignItems: 'center',
    },
    contentContainer: {
        marginTop: 15,
        marginHorizontal: 15,
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
    divider: {
        borderBottomWidth: 1, borderBottomColor: "gray"
    },
    ellipsisIcon: {
        // width: 35,
        // height:20
    },
    inputContainer: {
        position: "absolute",
        bottom: 25,
        left: 10,
        right: 10,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "#3aa2f4",
        borderRadius: 100,
        paddingHorizontal: 4,
    },
    input: {
        height: 50,
        flex: 1,
        color: "white",
        marginHorizontal: 5,
    },
    icon: {
        padding: 10,
        marginLeft: 4
    },
    iconContainer: {
        borderWidth: 1, // Set the desired border width
        borderColor: "white", // Set the border color
        borderRadius: 100, // Set the desired border radius
        padding: 5, // Optional: add padding for spacing
        alignItems: 'center', // Center the image within the container
        justifyContent: 'center', // Center the image vertically
        marginLeft: 10
    },
    dollarIcon: {
        width: 14,
        height: 14,
    },
    iconContainers: {
        marginLeft: 15,
        backgroundColor: "#3aa2f4", // Background color
        borderRadius: 100, // Border radius
        padding: 8, // Optional: padding for better touch area
        alignItems: 'center', // Center the icon horizontally
        justifyContent: 'center', // Center the icon vertically
        // width: 30
    },
    inputBox: {
        borderWidth: 1,
        borderColor: "white",
        width: Dimensions.get("screen").width * 0.70,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#161616', // Default background
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5, // For Android
    },
    inputBoxActive: {
        borderWidth: 1,
        borderColor: "white", // Change this as needed for active state
        width: Dimensions.get("screen").width * 0.58,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#161616', // Active background
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5, // For Android
    },
    commentContainer: {
        flexDirection: "row",
        marginTop: 15,
    },
    commentImage: {
        width: 25,
        height: 25,
        alignItems: "flex-start",
    },
    commentDetails: {
        flexDirection: "column",
        marginLeft: 10, // Add margin to separate image from text
    },
    commentHeader: {
        flexDirection: "row",
    },
    commentTitle: {
        color: "white",
        fontSize: 12,
    },
    commentDate: {
        color: "gray",
        fontSize: 12,
        marginLeft: 5,
    },
    commentCaption: {
        color: "white",
        fontSize: 12,
        marginTop: 4,
    },
    commentActions: {
        flexDirection: "row",
        marginTop: 8,
        marginLeft: 8,
    },
    likeButton: {
        flexDirection: "row",
    },
    replyButton: {
        marginLeft: 10,
        marginTop:2
    },
    replyText: {
        color: "white",
        fontSize: 11,
    },
    optionsButton: {
        marginLeft: 8,
        marginTop: 2,
    },
    button: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#3aa2f4",
        borderRadius: 100,
    },
    buttonContent: {
        paddingHorizontal: 7,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    iconMargin: {
        marginTop: 5,
    },
    buttonText: {
        color: "#3aa2f4",
        textAlign: "center",
        fontSize: 12,
        marginLeft: 6,
    },
    captionContainer: {
        marginLeft: 10,
        marginTop: 8,
    },
    captionText: {
        color: "white",
        fontSize: 13,
    },
    actionsContainer: {
        flexDirection: "row",
        marginTop: 8,
    },
    likeCount: {
        color: "white",
        marginLeft: 8,
    },
    ellipsisButton: {
        marginLeft: 15,
        marginTop: 1,
    },
})