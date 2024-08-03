import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Portfolio = () => {
  const portfolioItems = [
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' },
    { title: 'Camboriú', image: 'src/assets/RC1906MS-II RAPPORT.jpg' }
  ];

  return (
    <Container sx={{ mt: 15, px: 0 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>portfolio</Typography>
      <Grid container spacing={5} justifyContent="center">
        {portfolioItems.map((item, index) => (
          <Grid item xs={3} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '289px', height: '414px', objectFit: 'cover' }} />
              <Typography variant="subtitle1" align="center" sx={{ mt: 1 }}>{item.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: '-70px', mr: '-70px' }}>
        <Typography fontSize={'16px'}>contatoelizeu@gmail.com</Typography>
        <InstagramIcon sx={{ width: '30px', height: '30px' }} />
      </Box>
    </Container>
  );
};

export default Portfolio;
