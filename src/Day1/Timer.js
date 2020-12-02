import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native-gesture-handler';


const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    const [history, setHistory] = useState([]);

    const setTooglePlay = () => {
        setIsPlay(!isPlay);
    }
    const setReload = async () => {
        await setSeconds(0);
        await setHistory(history => ([...history, seconds]));
        await setIsPlay(false);
    }
    const formatTime = (s) => {
        let hours = Math.floor(s / 3600);
        s = s % 3600;
        let minutes = Math.floor(s / 60);
        let seconds = s % 60;
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + s;
        }
        return { hours: hours, minutes: minutes, seconds: seconds };
    }

    useEffect(() => {
        let time = setInterval(() => {
            if (isPlay) {
                setSeconds(seconds => {
                    console.log(seconds);
                    return seconds + 1;
                });
            }
        }, 1000);
        return () => {
            clearInterval(time);
        }
    }, [isPlay]);

    return (
        <View style={styles.container}>
            <View style={styles.timeWrapper}>
                <Text style={styles.textRadius}>{formatTime(seconds).hours}</Text>
                <Text style={styles.textRadius}>{formatTime(seconds).minutes}</Text>
                <Text style={styles.textRadius}>{formatTime(seconds).seconds}</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={setTooglePlay} style={styles.btnPlay}>
                    <Icon name={isPlay ? "pause" : "play"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={setReload} style={styles.btnReload}>
                    <Icon name={'reload1'} size={30} />
                </TouchableOpacity>
            </View>
            <FlatList 
                style={styles.listHistory}
                data={history}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (<View style={styles.historyWrapper}>
                        <Text style={styles.textHistory}>{formatTime(item).hours}</Text>
                        <Text style={styles.textHistory}>{formatTime(item).minutes}</Text>
                        <Text style={styles.textHistory}>{formatTime(item).seconds}</Text>
                    </View>)
                }}
            />
        </View>
    );
};
export default Timer;