// src/theme.ts
import { BorderColor } from '@mui/icons-material';
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
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                },
                containedPrimary: {
                    background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                    '&:hover': {
                        background: 'linear-gradient(0deg, #5C69FF 0%, #257FE6 100%)',
                    },
                },
                outlinedSecondary: {
                    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    '&:hover': {
                        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        borderColor: "#FFFF00"
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    marginTop: 5,
                    marginBottom: 5,
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
        MuiSwitch: {
            styleOverrides: {
                root: {
                    padding: 0,
                    borderRadius: 10,
                    '& .MuiSwitch-switchBase': {
                        transitionDuration: '300ms',
                        '&.Mui-checked': {
                            color: '#fff',
                            '& + .MuiSwitch-track': {
                                backgroundColor: '#516EFA',
                                opacity: 1,
                                border: 0,
                            },
                            '& .Mui-disabled + .MuiSwitch-track': {
                                opacity: 0.5,
                            },
                        },
                        '& .Mui-focusVisible .MuiSwitch-thumb': {
                            color: '#33cf4d',
                            border: '6px solid #fff',
                        },
                        '& .Mui-disabled .MuiSwitch-thumb': {
                            color: "#CED7EB",
                        },
                        '& .Mui-disabled + .MuiSwitch-track': {
                            opacity: 0.7,
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        boxSizing: 'border-box',
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: 4,
                        backgroundColor: '#CED7EB',
                        opacity: 1,
                    },
                },
            },
        },
    },
};

// Create the theme
const theme = createTheme(themeOptions);

export default theme;
