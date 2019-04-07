import darkModeReducer from "./darkModeReducer";

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
});
