import React from "react";
import { View,FlatList,TouchableOpacity,Text,StyleSheet } from "react-native";

const Tags = ({ tags }: { tags: any[] }) => (
    <View>
      <FlatList
        data={tags}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );

  export default Tags;

  const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
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
        marginTop: 10,
      },
  })