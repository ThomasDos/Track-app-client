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
//
import { setNavigator } from "./src/navigationRef";

const loginFlowNavigator = createStackNavigator({
  SignUp: SignUpScreen,
  SignIn: SignInScreen,
});

const trackListFlowNavigator = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

const mainFlowNavigator = createBottomTabNavigator({
  trackListFlow: trackListFlowNavigator,
  TrackCreate: TrackCreateScreen,
  Account: AccountScreen,
});

const switchNavigator = createSwitchNavigator({
  loginFlow: loginFlowNavigator,
  mainFlow: mainFlowNavigator,
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
