import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../styles/styles';
import { Task } from '../../App';

interface ItemProps {
    item: Task;
    markDone: (task: Task) => void;
    deleteFunction: (task: Task) => void;
}

const RenderItem: React.FC<ItemProps> = ({ item, markDone, deleteFunction }) => {
    return (
        <View style={stylesGlobal.itemContainer}>
            <TouchableOpacity onPress={() => markDone(item)}>
                <Text style={item.done ? stylesGlobal.textDone : stylesGlobal.text}>
                    {item.title}
                </Text>
                <Text style={item.done ? stylesGlobal.textDone : stylesGlobal.text}>
                    {item.date.toLocaleDateString()}
                </Text>
            </TouchableOpacity>
            {item.done && (
                <TouchableOpacity onPress={() => deleteFunction(item)} style={stylesGlobal.removeButton}>
                    <Text style={stylesGlobal.whiteText}>X</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default RenderItem;
