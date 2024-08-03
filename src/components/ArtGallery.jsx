import React, { useState } from 'react';
import { Container, Grid, Box, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import CustomArrowIcon from './CustomArrowIcon';
import ImageModal from './ImageModal';

const ArtGallery = () => {
  const artworks = [
    { title: 'Onça Pintada', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Onça Pintada', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Onça Pintada', image: 'src/assets/RC1906MS-II RAPPORT.jpg' }
  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleOpen = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
    setSelectedTitle('');
  };

  return (
    <Container sx={{ position: 'relative', minHeight: '100vh', pb: 10, px: 2 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 15, mb: 3 }}>art</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4, mb: 4, mx: -20 }}>
        <IconButton sx={{ ml: 2 }}>
          <CustomArrowIcon direction="left" size={100} strokeWidth={0.6} />
        </IconButton>
        <Grid container spacing={2} sx={{ flexGrow: 1, maxWidth: '70%' }}>
          {artworks.map((art, index) => (
            <Grid item xs={4} key={index}>
              <Box
                component="img"
                src={art.image}
                alt={art.title}
                sx={{
                  width: '100%',
                  transition: '0.3s',
                  '&:hover': {
                    filter: 'brightness(70%)',
                    cursor: 'pointer'
                  }
                }}
                onClick={() => handleOpen(art.image, art.title)}
              />
              <Typography variant="subtitle1" align="center">{art.title}</Typography>
            </Grid>
          ))}
        </Grid>
        <IconButton sx={{ mr: 2 }}>
          <CustomArrowIcon direction="right" size={100} strokeWidth={0.6} />
        </IconButton>
      </Box>
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 2,
        py: 1,
        bgcolor: 'background.paper'
      }}>
        <Typography variant="body2">contatoelizeu@gmail.com</Typography>
        <IconButton href="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </IconButton>
      </Box>
      <ImageModal open={open} handleClose={handleClose} image={selectedImage} title={selectedTitle} />
    </Container>
  );
};

export default ArtGallery;
