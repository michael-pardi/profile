import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import SimpsonsFetch from '../util/fetch/SimpsonsFetch';

const FunStuffPage = () => {
    const [quote, setQuote] = useState('');
    const [image, setImage] = useState('');
    const [character, setCharacter] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        SimpsonsFetch()
            .then(response => response.json())
            .then(data => {
                setQuote(data[0].quote);
                setImage(data[0].image);
                setCharacter(data[0].character);
                setIsLoading(false);
            });
    }, []);

    const textColor = '#bbaa99';
    return (
        <div style={{ color: textColor }}>
            <Box sx={{ mt: 10 }}>
                <Typography variant="h3" component="div" gutterBottom>Simpsons Quote Generator</Typography>
                {isLoading && 
                    <div style={{
                        position: 'absolute', left: '50%', top: '30%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <CircularProgress size={100}/>
                    </div>
                }
                {!isLoading &&
                <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
                    <img src={image} alt="" onLoad={() => setImageLoaded(true)}/>
                    {imageLoaded &&
                        <Box sx={{ width: '50%', mx: 'auto' }}>
                            <Typography variant="h6" gutterBottom>{quote}</Typography>
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography>- {character}</Typography>
                            </Box>
                        </Box>
                    }   
                </Box>
                }
            </Box>
        </div>
    )
}

export default FunStuffPage;