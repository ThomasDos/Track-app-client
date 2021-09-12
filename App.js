import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
//Screens
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
//Reducer
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
//
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const loginFlowNavigator = createStackNavigator({
  SignUp: SignUpScreen,
  SignIn: SignInScreen,
});

const trackListFlowNavigator = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

trackListFlowNavigator.navigationOptions = {
  title: "Tracks",
  tabBarIcon: (
    <MaterialCommunityIcons name="go-kart-track" size={20} color="black" />
  ),
};

const mainFlowNavigator = createBottomTabNavigator({
  trackListFlow: trackListFlowNavigator,
  TrackCreate: TrackCreateScreen,
  Account: AccountScreen,
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: loginFlowNavigator,
  mainFlow: mainFlowNavigator,
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
