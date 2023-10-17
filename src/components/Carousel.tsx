import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import theme from '../theme';
import { Card, CardMedia, Typography} from '@mui/material';

//Image imports
import cardImage1 from '../assets/mochi.jpg';
import cardImage2 from '../assets/urchinUdon.jpg';
import cardImage3 from '../assets/thanksgiving.jpg';
import cardImage4 from '../assets/bogo3.jpg';
import cardImage5 from '../assets/mapPaloAlto.png';

const useStyles = makeStyles(() => ({
    card: {
        width: '300px',
        height: '400px',
        margin: '1em',
    },
    cardTitle: {
        textAlign: 'center',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    cardDesc: {
        paddingTop: '0.65rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingBottom: '1rem',
    },
    carousel: {
        justifyContent: 'center',
        display: 'inline-flex',
        backgroundColor: '#232b2b',
        width: '100%',
    }
}));

const carouselContent =[
    { 
        imageUrl: cardImage1, 
        altDesc: 'ice cream mochi on a plate',
        cardTitle: 'Now serving Mochi ice cream!',
        cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    { 
        imageUrl: cardImage2, 
        altDesc: 'bowl of urchin udon',
        cardTitle: 'Urchin Udon is back!',
        cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    { 
        imageUrl: cardImage3, 
        altDesc: 'cartoon turkey slurping ramen',
        cardTitle: "We're open on Thanksgiving!",
        cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
];

function Carousel() {
    const styling = useStyles();

    function card() {
        return carouselContent.map((item) => (
            <Card className={styling.card}>
                <CardMedia
                    component="img"
                    alt={item.altDesc}
                    image={item.imageUrl}
                    sx={{height: '10em'}}
                />
                <Typography variant='h5' className={styling.cardTitle}>
                    {item.cardTitle}
                </Typography>
                <Typography variant='body2' className={styling.cardDesc}>
                    {item.cardDesc}
                </Typography>
            </Card>
        ));
    };

    return (
        <div className={styling.carousel}>
            {card()}
        </div>
    );
}

export default Carousel;