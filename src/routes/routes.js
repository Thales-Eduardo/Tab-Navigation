import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather } from "@expo/vector-icons";

import Home from "../pages/Home";
import Dash from "../pages/Dash";
import New from "../pages/New";
import Notification from "../pages/Notification";
import Profile from "../pages/Profile";

import ButtonNew from "../components/ButtonNew";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#222",
          borderTopColor: "transparent",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#6fdfff",
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ focused, size, color }) => (
            <Entypo name={"home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dash"
        component={Dash}
        options={{
          tabBarLabel: "Pesquisa",

          tabBarIcon: ({ size, color }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonNew size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: "Inscrição",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="notification" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Usuário",
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
