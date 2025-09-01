import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { useEffect, useState } from "react";
import { exerciseOptions } from "../utils/fetchData";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, id, name, target, equipment } = exerciseDetail;
  const [image, setImage] = useState(" ");

  useEffect(() => {
    async function fetchImage() {
      const imageFetched = await fetch(
        `https://exercisedb.p.rapidapi.com/image?resolution=720&exerciseId=${id}`,
        exerciseOptions
      );
      const res = await imageFetched.blob();
      const imageUrl = URL.createObjectURL(res);
      setImage(imageUrl);
    }
    fetchImage();
  }, []);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap='60px'
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={image || ""}
        alt={name}
        loading='lazy'
        className='detail-image'
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform='capitalize'
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color='#4F4C4C'
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> is one of
          the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform='capitalize'
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
