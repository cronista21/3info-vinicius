import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import BuscarProduto from "./screens/BuscarProduto";
import BuscarPessoa from "./screens/BuscarPessoa";
import BuscarCarro from "./screens/BuscarCarro";
import BuscarAnimal from "./screens/BuscarAnimal";
import BuscarCor from "./screens/BuscarCor";
import BuscarFruta from "./screens/BuscarFruta";

const Stack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsNavigation() {
  return (
    <Tabs.Navigator initialRouteName="HomeScreen">
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="BuscarProduto"
        component={BuscarProduto}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="BuscarPessoa"
        component={BuscarPessoa}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="BuscarCarro"
        component={BuscarCarro}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="BuscarAnimal"
        component={BuscarAnimal}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="paw" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="BuscarCor"
        component={BuscarCor}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="palette" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="BuscarFruta"
        component={BuscarFruta}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="fruit-watermelon" color={color} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
