import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
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
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
      console.log("ERROR");
    }
  };
const signIn = (dispatch) => {
  return ({ email, password }) => {
    //Axios request
  };
};

const signOut = (dispatch) => {
  return () => {
    //Axios request
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp },
  { token: null, errorMessage: "" }
);
