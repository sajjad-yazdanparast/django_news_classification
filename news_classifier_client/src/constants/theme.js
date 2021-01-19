// @ts-ignore
const {createMuiTheme} = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
     
      main: "#00416d",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    text: {
    //   primary: "#000000",
    //   secondary: "#FFFFFF",
    },
    secondary: {
      main: "#00416d",
      light: "#003457",
    },
  },
  typography: {
    fontFamily: "YekanBakhFaNum",
    fontWeightMedium: 500,
    fontWeightRegular: "normal",
    fontWeightBold: "bold",
  },
  direction: "rtl",
});

module.exports = {theme};
