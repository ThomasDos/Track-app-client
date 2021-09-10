import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
    case "SIGN_IN":
      return { ...state, token: action.payload, errorMessage: "" };
    case "ADD_ERROR":
      return { ...state, ["errorMessage"]: action.payload };

    default:
      return state;
  }
};

const signUp =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGN_UP", payload: response.data.token });
      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
      console.log("ERROR");
    }
  };
const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGN_IN", payload: response.data.token });
      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signOut = (dispatch) => {
  return () => {
    //Axios request
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn },
  { token: null, errorMessage: "" }
);
