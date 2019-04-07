import darkModeReducer from "./darkModeReducer";
import loginReducer from "./loginReducer";

describe("dark mode reducer", () => {
  it("should return the initial state", () => {
    expect(darkModeReducer(undefined, {})).toEqual({
      theme: {
        main: "#fbd6d5",
        secondary: "#d35e7b",
        secondaryDark: "#8e4154",
        accent: "#ffb998"
      }
    });
  });

  it("should toggle to dark mode", () => {
    expect(
      darkModeReducer(
        {
          theme: {
            main: "#fbd6d5",
            secondary: "#d35e7b",
            secondaryDark: "#8e4154",
            accent: "#ffb998"
          }
        },
        {
          type: "DARK_MODE_TOGGLE"
        }
      )
    ).toEqual({
      theme: {
        main: "#0f1014",
        secondary: "#474c60",
        secondaryDark: "#1D1F27",
        accent: "#898397"
      }
    });
  });

  it("should toggle to light mode", () => {
    expect(
      darkModeReducer(
        {
          theme: {
            main: "#0f1014",
            secondary: "#474c60",
            secondaryDark: "#1D1F27",
            accent: "#898397"
          }
        },
        {
          type: "DARK_MODE_TOGGLE"
        }
      )
    ).toEqual({
      theme: {
        main: "#fbd6d5",
        secondary: "#d35e7b",
        secondaryDark: "#8e4154",
        accent: "#ffb998"
      }
    });
  });
});
