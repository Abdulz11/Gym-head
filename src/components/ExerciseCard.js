import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const ExerciseCard = function ({ exercise }) {
  const [image, setImage] = useState(" ");
  console.log(exercise);

  useEffect(() => {
    async function fetchImage() {
      try {
        const imageFetched = await fetch(
          `https://exercisedb.p.rapidapi.com/image?resolution=720&exerciseId=${exercise.id}`,
          exerciseOptions
        );
        const res = await imageFetched.blob();
        const imageUrl = URL.createObjectURL(res);
        setImage(imageUrl);
      } catch (e) {
        console.log(e);
      }
    }
    fetchImage();
  }, []);

  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      {image && <img src={image} alt={exercise.name} loading='lazy' />}
      <Stack direction='row'>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml='21px'
        color='#000'
        fontWeight='bold'
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt='11px'
        pb='10px'
        textTransform='capitalize'
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
