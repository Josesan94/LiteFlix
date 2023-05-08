import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

interface Props {
  progress: number;
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Stack direction={'column'} alignItems={'flex-start'} width={'100%'} gap={2} >
      <Box sx={{ minWidth: 35, display: "flex", alignItems: "center"  }}>
        <Typography color="primary.main" fontSize={'16px'} lineHeight={'19px'} letterSpacing={'4px'}>
          Cargado <strong>{`${Math.round(props.value)}`}</strong>%
        </Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress 
        variant="determinate" 
        {...props} 
        sx={{
          height: "6px",
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Change the background color of the bar
            "& .MuiLinearProgress-bar": {
              backgroundColor: "secondary.main", // Change the color of the progress indicator to green
              height: "10px !important",
            },
          }} />
      </Box>
    </Stack>
  );
}

const LinearWithValueLabel: React.FC<Props> = ({ progress }) => {
  const isFileUploaded = progress === 100 ? true : false
  return (
    <>
    <Stack width={'100%'} gap={2} alignItems={'flex-end'}>
    <LinearProgressWithLabel value={progress} />
      {isFileUploaded ? (
        <Typography color="secondary" fontSize={'18px'} lineHeight={'22px'} letterSpacing={'4px'}>
        ¡LISTO!
        </Typography>
      ) : ""}
    </Stack>
      

    </>
  );
};

export default LinearWithValueLabel;
