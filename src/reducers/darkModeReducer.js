const DARK_MODE_TOGGLE = "DARK_MODE_TOGGLE";

const lightTheme = {
  main: "#fbd6d5",
  secondary: "#d35e7b",
  secondaryDark: "#8e4154",
  accent: "#ffb998"
};

const darkTheme = {
  main: "#0f1014",
  secondary: "#474c60",
  secondaryDark: "#1D1F27",
  accent: "#898397"
};

const initialState = {
  theme: lightTheme
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_TOGGLE:
      if (state.theme.main === "#fbd6d5") {
        return { ...state, theme: darkTheme };
      } else {
        return { ...state, theme: lightTheme };
      }
    default:
      return state;
  }
};

export default darkModeReducer;
