import React from 'react';
import { FlatList,Text } from 'react-native';

const ListScreen = () =>{
    const friends =[
        { name: "Friends #1", age:21 },
        { name: "Friends #2", age:22 },
        { name: "Friends #3", age:23 },
        { name: "Friends #4", age:24 },
        { name: "Friends #5", age:25 },
        { name: "Friends #6", age:26 },
        { name: "Friends #7", age:27 },
        { name: "Friends #8", age:28 },
        { name: "Friends #9", age:29 }
    ];
    return (
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item})=>{
                return <Text>{item.name}</Text>
            }}
        />
    )
}
export default ListScreen;