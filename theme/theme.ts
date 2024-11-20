// src/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';
import {
    toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';

// Define your custom theme options
const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#257FE6', // Primary color from your preference
        },
        secondary: {
            main: '#979797', // Secondary color (you can customize this as well)
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        allVariants: {
            color: '#333', // Global text color
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: 12,
                },
                containedPrimary: {
                    background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                    color: 'white',
                    '&:hover': {
                        background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    marginTop: 1,
                    marginBottom: 1,
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                    color: "#333"
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    "span": {
                        fontWeight: "bold",
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    'label + &': {
                        marginTop: 5,
                    },
                    backgroundColor: "white"
                },
            }
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                    borderRadius: 5,
                    borderColor: "#ccc",
                    borderWidth: 1
                }
            }
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    [`& .${toggleButtonGroupClasses.grouped}`]: {
                        border: 0,
                        borderRadius: 12,
                        [`&.${toggleButtonGroupClasses.disabled}`]: {
                            border: 0,
                        },
                    },
                    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
                    {
                        marginLeft: -1,
                        borderLeft: '1px solid transparent',
                    },
                    backgroundColor: "white",
                    padding: 4,
                    borderRadius: 12,
                    borderColor: "#ccc",
                    borderWidth: 1
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                        color: 'white',
                        '&:hover': {
                            background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                        },
                    },
                },
            },
        },
    },
};

// Create the theme
const theme = createTheme(themeOptions);

export default theme;
