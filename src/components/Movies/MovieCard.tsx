import React, {useState} from "react";
import { Card, CardContent, IconButton, Typography, Stack } from '@mui/material';
import { PlayArrow, Star } from '@mui/icons-material';
import { styled } from '@mui/system';
import { PopularMovie } from "../../types/movies";
import { IMAGE_URL } from "../../constants/api";

type Props = {
  movie: PopularMovie;
};

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: 220,
  height: 150,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "opacity 0.3s",
}));


const HoverCardContent:any = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(36, 36, 36, 0.7)",
  opacity: 0,
  transition: "opacity 0.3s",
}));


const MovieCard: React.FC<Props> = ({ movie }) => {
  const image = `${IMAGE_URL}/w500${movie.backdrop_path}`;
  const [isHovering, setIsHovering] = useState<boolean>(false);


  const year = movie.release_date.split("-")[0]





  return (
    <StyledCard style={{ backgroundImage: `url(${image})`}}
    onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <StyledCardContent style={{ opacity: isHovering ? 0 : 1 }}>
        <Stack  alignItems={'center'} justifyContent={'flex-end'} spacing={2}> 
        <IconButton style={{color:"rgba(255, 255, 255, 1)", border:"1px solid #FFFFFF" , background:"rgba(36, 36, 36, 0.5)"}} aria-label="play">
          <PlayArrow/>
        </IconButton>
        <Typography color={'rgba(255, 255, 255, 1)'} letterSpacing={'4px'} fontWeight={'400'} fontSize={'16'} lineHeight={'16px'} >
            {movie.title}
        </Typography>
        </Stack>
      </StyledCardContent>
      <HoverCardContent style={{ opacity: isHovering ? 1 : 0 }}>
        <Stack width={'100%'} mt={9} direction={'column'} alignItems={'center'} justifyContent={'flex-end'} gap={2}>
        <Stack width={'100%'} direction={"row"} alignItems={"center"} justifyContent={'flex-start'} spacing={1}>
        <IconButton 
        size="small"
        sx={{
          width:'24px',
          height:'24px',
          color: 'rgba(255, 255, 255, 1)',
          border: '1px solid #FFFFFF',
          background: 'rgba(36, 36, 36, 0.5)',
          '&:hover': {
            backgroundColor: 'secondary.main',
            color: '#000000',
          },
        }}
         aria-label="play">
          <PlayArrow/>
        </IconButton>
        <Typography color={'rgba(255, 255, 255, 1)'} letterSpacing={'4px'} fontWeight={'400'} fontSize={'16px'} lineHeight={'16px'} >
            {movie.title}
        </Typography>
        </Stack>
        <Stack width={'100%'} direction={"row"} alignItems={"center"} justifyContent={'space-between'}>
        <Stack direction={'row'} alignItems={'center'}>
        <Star color={"secondary"} />
        <Typography color={'primary'} fontSize={'14px'} lineHeight={'12px'} letterSpacing={'2px'}>{movie.vote_average}</Typography>
        </Stack>
        <Typography color={'primary'} fontSize={'14px'} lineHeight={'12px'} letterSpacing={'2px'}>{year}</Typography>
        </Stack>
        </Stack>
        
      </HoverCardContent>
    </StyledCard>
  );
};

export default MovieCard;
