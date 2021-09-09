import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const navigator = createStackNavigator(
  {
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
  },
  {
    initialRouteName: "SignUp",
  }
);

export default createAppContainer(navigator);
