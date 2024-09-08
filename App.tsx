import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { stylesGlobal } from './src/styles/styles';
import RenderItem from './src/components/RenderItem';

export interface Task {
    title: string;
    done: boolean;
    date: Date;
}

const App = () => {
    const [text, setText] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = () => {
        if (text.trim().length === 0) {
            Alert.alert('La tarea no puede estar vacía.');
            return;
        }

        const taskExists = tasks.some(task => task.title === text.trim());
        if (taskExists) {
            Alert.alert('Ya existe una tarea con este nombre.');
            return;
        }

        const newTask: Task = {
            title: text.trim(),
            done: false,
            date: new Date(),
        };

        setTasks(prevTasks => [...prevTasks, newTask]);
        setText('');
    };

    const markDone = (task: Task) => {
        setTasks(prevTasks =>
            prevTasks.map(t =>
                t.title === task.title ? { ...t, done: !t.done } : t
            )
        );
    };

    const deleteTask = (task: Task) => {
        Alert.alert(
            'Confirmar Eliminación',
            '¿Estás seguro de que deseas eliminar esta tarea?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Eliminar',
                    onPress: () => {
                        setTasks(prevTasks =>
                            prevTasks.filter(t => t.title !== task.title)
                        );
                    },
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={stylesGlobal.container}>
            <Text style={stylesGlobal.title}>Mis tareas pendientes</Text>
            <View style={stylesGlobal.inputContainer}>
                <TextInput
                    onChangeText={setText}
                    value={text}
                    placeholder="Agregar una nueva tarea"
                    style={stylesGlobal.textInput}
                />
                <TouchableOpacity onPress={addTask} style={stylesGlobal.addButton}>
                    <Text style={stylesGlobal.whiteText}>Agregar</Text>
                </TouchableOpacity>
            </View>
            <View style={stylesGlobal.scrollContainer}>
                {tasks.length === 0 ? (
                    <Text style={stylesGlobal.noTasksText}>No hay tareas pendientes...</Text>
                ) : (
                    <FlatList
                        renderItem={({ item }) => (
                            <RenderItem item={item} markDone={markDone} deleteFunction={deleteTask} />
                        )}
                        data={tasks}
                        keyExtractor={(item) => item.title}
                    />
                )}
            </View>
        </View>
    );
};

export default App;
