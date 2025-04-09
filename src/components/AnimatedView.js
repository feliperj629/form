import React, { useRef, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { animatedViewStyles } from '../styles/animatedViewStyles';

export default function AnimatedView() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={animatedViewStyles.animatedContainer}>
            <Animated.View
                style={[
                    animatedViewStyles.animatedView,
                    {
                        opacity: fadeAnim,
                        transform: [
                            {
                                scale: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.5, 1]
                                })
                            }
                        ]
                    }
                ]}
            >
                <Text style={animatedViewStyles.animatedText}>Elemento Animado</Text>
            </Animated.View>
        </View>
    );
} 