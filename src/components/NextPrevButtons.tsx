import { makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';
import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material'

//In-line CSS styling for each tag
const useStyles = makeStyles(() => ({
    iconContainer: {
        backgroundColor: 'white',
        opacity: '50%',
        borderRadius: '100%',
        lineHeight: '0%',
    },
    nextPrevSlideButtonIcons: {
        color: 'black',
    },
}));

//Class parameters
//Semicolons are VERY important here
/*type NextPrevButtonProps = { 
    direction: string;
};*/

//Class for the arrow buttons that toggle next or previous slides
//Arrow LEFT is default direction
function NextPrevSlideButton(direction: string) {
    const styling = useStyles();

    return (
        <Button sx={{transition:'all .2s ease-in-out','&:hover': {transform: 'scale(1.3)'}}}>
            <div className={styling.iconContainer}>
                {direction.toUpperCase() == 'RIGHT' ? (
                    <NavigateNextOutlined 
                    sx={{fontSize: '2em', lineHeight: '0%',}}
                    className={styling.nextPrevSlideButtonIcons}
                    />
                ) : (
                    <NavigateBeforeOutlined 
                    sx={{fontSize: '2em', lineHeight: '0%'}}
                    className={styling.nextPrevSlideButtonIcons}
                    />
                )}
            </div>
        </Button>
    );
}

export default NextPrevSlideButton;