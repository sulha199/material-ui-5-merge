import { ThemeOptions } from "@mui/material";

const boilerplateTheme: ThemeOptions = {
  // reference for pallet
  // https://mui.com/material-ui/customization/palette/
  palette: {
    mode: "light",
    // color reference for primary and secondary 
    // https://mui.com/material-ui/customization/color/
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',        
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
  },
  /// Add customization for components below
  components: {
    /// https://mui.com/material-ui/customization/typography/
    MuiTypography: {
      styleOverrides: {
        button: {
          fontSize: '2rem'
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {            
          padding: '21px 38px',
          fontSize: '16px',
          fontWeight: 600,
          letterSpacing: '0px',
          lineHeight: '22px',
          borderRadius: '64px',
        },
        sizeMedium: {

        },
        sizeSmall: {

        }       
      }
    }
  }
}

export default boilerplateTheme;
