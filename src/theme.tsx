import { createTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import "./fonts/orkney-regular.otf"; 
import "./fonts/orkney-medium.otf";
import "./fonts/orkney-light.otf";
import "./fonts/orkney-bold.otf";
import './App.css';

const appTheme = createTheme ({
    palette: {
        primary: {
            main: '#000000',
            light: '#FFFFFF'
        },
        secondary : {
            //narutomaki pink
            main: '#F15A4E',
        },
    },
    breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 1010,
			xl: 1350,
		},
	},
    typography: {
        fontFamily: 'OrkneyLight, Roboto, Arial, sans-serif',
        h1: {
			fontFamily: 'OrkneyMedium',
			fontSize: '4.5rem',
			fontWeight: 800,
			lineHeight: 1.2,
			letterSpacing: '-0.01562em',
		},
		h3: {
			fontFamily: 'OrkneyMedium',
			fontWeight: 500,
			fontSize: '3rem',
			lineHeight: 1.167,
			letterSpacing: '0em',
		},
        body1: {
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: 1.5,
			letterSpacing: '0.0138em',
		},
		subtitle1: {
			fontWeight: 400,
			fontSize: '1.2rem',
			lineHeight: 1.5,
			letterSpacing: '0.00938em',
		},
		subtitle2: {
			fontWeight: 500,
			fontSize: '0.875rem',
			lineHeight: 1.57,
			letterSpacing: '0.00714em',
		},
    },
    
});

export default appTheme;