import React from "react";
import { Card, CardContent, IconButton, Typography, Stack } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import { styled } from '@mui/system';
import { PopularMovie } from "../../types/movies";
import { IMAGE_URL } from "../../constants/api";

type Props = {
  movie: PopularMovie;
};

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width:220,
  height: 150,
  '&:hover': {
    '& $CardContent': {
      opacity: 1,
    },
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  transition: 'opacity 0.3s',
}));

const MovieCard: React.FC<Props> = ({ movie }) => {
  const image = `${IMAGE_URL}/w500${movie.backdrop_path}`;


  return (
    <StyledCard style={{ backgroundImage: `url(${image})`}}>
      <StyledCardContent>
        <Stack alignItems={'center'} justifyContent={'flex-end'} spacing={2}> 
        <IconButton style={{color:"rgba(255, 255, 255, 1)", border:"1px solid #FFFFFF" , background:"rgba(36, 36, 36, 0.5)"}} aria-label="play">
          <PlayArrow/>
        </IconButton>
        <Typography color={'rgba(255, 255, 255, 1)'} letterSpacing={'4px'} fontWeight={'400'} fontSize={'16'} lineHeight={'16px'} >
            {movie.title}
        </Typography>
        </Stack>
        
      </StyledCardContent>
    </StyledCard>
  );
};

export default MovieCard;
