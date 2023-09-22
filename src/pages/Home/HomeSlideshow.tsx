import { makeStyles } from '@material-ui/core';
import { 
    Typography, 
    Button,
    useMediaQuery,
} from '@mui/material';
import theme from '../../theme';
import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material'

//Image imports
import ramen1 from '../../assets/ramen1.jpg';
import ramen2 from '../../assets/ramen2.jpg';
import ramen3 from '../../assets/ramen3.jpg';
import ramen4 from '../../assets/ramen4.jpg';
import tempura1 from '../../assets/tempura1.jpg';

//Slideshow imports
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//In-line CSS styling for each tag
const useStyles = makeStyles(() => ({
    slides: {
        position: 'relative',
        height: '30em',
        [theme.breakpoints.down('md')]: {
            height: '20em'
        },
    },
    slideImage: {
        position: 'absolute',
        filter: 'brightness(60%)',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    slideContainer: {
        paddingLeft: '7%',
        paddingTop: '3%',
        width: '75%',
        [theme.breakpoints.down('lg')]: {
            paddingTop: '5%',
            paddingLeft: '10%',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '10%',
            paddingLeft: '15%',
        },
    },
    slideText: {
        color: 'white',
        filter: 'brightness(100%)'
    },
    nextPrevSlideButtonIcons: {
        color: 'black',
    },
    iconContainer: {
        backgroundColor: 'white',
        opacity: '50%',
        borderRadius: '100%',
        lineHeight: '0%',
    },
    
}));

//Slideshow Component Class
function HomeSlideshow() {
    const styling = useStyles();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const slideshowContent = [
        {header:'Header1', imageUrl: ramen1, isButton: true, buttonText: 'ButtonA'}, 
        {header:'Header2', imageUrl: ramen2, isButton: false, buttonText: ''}, 
        {header:'Header3', imageUrl: tempura1, isButton: true, buttonText: 'ButtonB'}, 
        {header:'Header4', imageUrl: ramen3, isButton: false,buttonText: ''}, 
        {header:'Header5', imageUrl: ramen4, isButton: true, buttonText: 'ButtonC'},
    ];

    //Contains the arrow buttons that toggle next or previous slides
    function nextPrevSlideButton(isPrevButton: boolean) {
        return (
            <Button sx={{transition:'all .2s ease-in-out','&:hover': {transform: 'scale(1.3)'}}}>
                <div className={styling.iconContainer}>
                    {isPrevButton ? (
                        <NavigateBeforeOutlined 
                        sx={{fontSize: '2em', lineHeight: '0%',}}
                        className={styling.nextPrevSlideButtonIcons}
                        />
                    ) : (
                        <NavigateNextOutlined 
                        sx={{fontSize: '2em', lineHeight: '0%'}}
                        className={styling.nextPrevSlideButtonIcons}
                        />
                    )}
                </div>
            </Button>
        );
    }

    //Contains the optional button that sit underneath the body text of each slide
    function slideButton(buttonText: string) {
        return (
            <Button 
                variant = "contained"
                size = {isMobile ? "medium" : "large"}
                sx = {{
                    textTransform: "none",
                    fontSize: isMobile ? "1rem" : "1.4rem",
                    borderRadius: "1.5px",
                    border: "2px solid white",
                    lineHeight: 1,
                    color: 'white',
                    marginTop: '2em',
                }}
                >
                    {buttonText}
            </Button>
        );
    }

    //Contains slideshow content for each slide
    function slides() {
        return slideshowContent.map((slideshowContent) => (
            <div 
                className={styling.slides}
            >
                <div className={styling.slideImage}
                style= {{backgroundImage: `url(${slideshowContent.imageUrl})`}}/>
                <div className={styling.slideContainer}>
                    <Typography 
                        variant={isTablet ? 'h3' : 'h1'} 
                        className={styling.slideText}
                        >
                            {slideshowContent.header}
                    </Typography>
                    <Typography 
                        variant={isTablet ? 'subtitle2' : 'subtitle1'}
                        className={styling.slideText}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    {slideshowContent.isButton ? slideButton(slideshowContent.buttonText) : <></>}
                </div>
            </div>
        ));
    }

    //Final return that contains all component pieces
    return (
        <Slide 
            duration={7000} 
            easing='ease-out' 
            transitionDuration={750}
            indicators={true}
            autoplay={true}
            prevArrow={nextPrevSlideButton(true)}
            nextArrow={nextPrevSlideButton(false)}
            >
                {slides()}
        </Slide>
    );

};

export default HomeSlideshow;