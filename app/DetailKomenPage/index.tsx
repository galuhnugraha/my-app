import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, FlatList, StyleSheet, TextInput,Image, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import PopulerScreen from "./Populer";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TerbaruScreen from "./Terbaru";

export default function DetailPageKomen({ navigation, route }: any) {
    const [selectedTabs, setSelectedTabs] = useState(1);
    const [input,setInput] = useState('');
    const dataTabs = [
        {
            id: 1,
            title: "Populer"
        },
        {
            id: 2,
            title: "Terbaru"
        }
    ]

    const renderItemTabs = ({ item, index }: any) => {
        return <TouchableOpacity
            onPress={() => setSelectedTabs(item.id)}
            style={[
                styles.tabButton,
                {
                    borderColor: "#3aa2f4",
                    backgroundColor: item.id === selectedTabs ? "#3aa2f4" : "transparent",
                }
            ]}
        >
            <View style={styles.tabContent}>
                <Text style={[
                    styles.tabText,
                    { color: item.id === selectedTabs ? "white" : "#3aa2f4" }
                ]}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{route.params.caption}</Text>
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            <ScrollView>
                <View style={styles.tabContainer}>
                    <FlatList
                        data={dataTabs}
                        renderItem={renderItemTabs}
                        horizontal={true}
                        contentContainerStyle={styles.tabList}
                    />
                    <Text style={styles.commentCount}>2 Komentar</Text>
                </View>

                {selectedTabs == 1 && <PopulerScreen />}
                {selectedTabs == 2 && <TerbaruScreen />}
            </ScrollView>

            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <View style={input.length > 0 ? styles.inputBoxActive : styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Tulis komentar..."
                            placeholderTextColor="gray"
                            value={input}
                            onChangeText={(value) => {
                                setInput(value);
                            }}
                        />
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="attachment" size={20} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Image
                            source={require("../../assets/images/dollar.png")}
                            style={styles.dollarIcon}
                            tintColor={"white"}
                        />
                    </TouchableOpacity>
                    {input.length > 0 ? (
                        <TouchableOpacity style={styles.iconContainers}>
                            <Ionicons name="send-outline" size={20} color="white" />
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#161616",
        flex: 1,
    },
    header: {
        marginTop: Dimensions.get("screen").height * 0.055,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    title: {
        color: "white",
        marginLeft: 18,
    },
    closeButton: {
        marginRight: 18,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginTop: 15,
    },
    tabContainer: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tabList: {
        marginLeft: 10,
    },
    commentCount: {
        color: "white",
        marginRight: 18,
        fontSize: 14,
        fontWeight: "600",
        marginTop: 5,
    },
    tabContent: {
        paddingHorizontal: 7,
        paddingVertical: 7,
    },
    tabButton: {
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    tabText: {
        fontWeight: "bold",
        fontSize: 14,
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
        marginLeft:4
    },
    iconContainer: {
        borderWidth: 1, // Set the desired border width
        borderColor: "white", // Set the border color
        borderRadius: 100, // Set the desired border radius
        padding: 5, // Optional: add padding for spacing
        alignItems: 'center', // Center the image within the container
        justifyContent: 'center', // Center the image vertically
        marginLeft:10
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
});