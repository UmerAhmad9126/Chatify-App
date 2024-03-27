import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screen/CommunityScreen';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcons';
import { TabData } from '../data/TabData';

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarStyle: {
                    backgroundColor: Colors.primaryColor
                },
                tabBarInactiveTintColor: Colors.secondaryColor,
                tabBarActiveTintColor: Colors.tertiary,
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.tertiary
                }
            })}
        >
            <Tab.Screen name="Community" component={CommunityScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <VectorIcon name="users" type="FontAwesome" size={20} color={color} />
                    )
                }}
            />
            {TabData.map((tab) => (

                <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
            ))}
        </Tab.Navigator>
    )
}

export default TopTabBar