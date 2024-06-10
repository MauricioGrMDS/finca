import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#4C8444', // main color
        },
        secondary: {
            main: '#1d83c6',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 10,
                    boxShadow: 'none',
                    padding: 10,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    margin: 0,
                    fontSize: '0.8rem',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '10px !important',
                },
            },
        },
        
    },
  });