import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BlogContext from "../context/BlogContext";


const IndexScreen = () => {

    const blogsPosts = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList 
            data={blogsPosts} 
            keyExtractor={(blogsPosts) => blogsPosts.title}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;