import { Image, StyleSheet, Platform, View, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import HomeDataPage from '../HomeDataPage';
import FreshDataPage from '../FreshDataPage';
import TrendingDataPage from '../TrendingDataPage';

export default function HomeScreen({navigation}: any) {
  const [selectedTabs, setSelectedTabs] = useState(1);
  const data = [
    { id: 1, title: "Home" },
    { id: 2, title: "Fresh" },
    { id: 3, title: "Trending" }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
          <TouchableOpacity>
              <Ionicons name="reorder-three" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>LAHELU</Text>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.tabContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedTabs(item.id)} style={styles.tabButton}>
                <Text style={[styles.tabText, item.id === selectedTabs && styles.selectedTabText]}>
                  {item.title}
                </Text>
                <View
                  style={[
                    styles.borderBottom,
                    { borderBottomWidth: item.id === selectedTabs ? 2 : 0 }
                  ]}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.tabList}
          />
        </View>
      </View>

      {selectedTabs === 1 && <HomeDataPage />}
      {selectedTabs === 2 && <FreshDataPage />}
      {selectedTabs === 3 && <TrendingDataPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616", // Set background color for the container
  },
  header: {
    backgroundColor: "#161616",
    height: 90,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  headerContent: {
    marginHorizontal: 15,
    marginTop: Dimensions.get("screen").height * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
  },
  title: {
    color: "#3aa2f4",
    marginLeft: 15,
    marginTop: 4,
    fontWeight: "bold",
  },
  searchIcon: {
    marginTop: 3,
  },
  content: {
    backgroundColor: "#161616",
    height: 50,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    marginBottom: 5,
    color: "white", // Default color for the tab text
  },
  selectedTabText: {
    color: "#3aa2f4", // Color for the selected tab
  },
  tabList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  borderBottom: {
    borderBottomColor: "#3aa2f4",
    width: Dimensions.get("screen").width * 0.35,
    marginTop: 10,
  },
});
