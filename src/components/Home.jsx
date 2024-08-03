import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = () => {
  return (
    <Container sx={{ px: '122px', mt: 5, position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{ flex: 3, textAlign: 'center', pr: '50px', mt: '-150px', ml: '-70px', position: 'relative' }}>
          <img src="src/assets/foto-maior.jpg" alt="Arte de Elizeu Galvão" style={{ width: '100%', height: 'auto' , zIndex:0}} />
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              position: 'absolute',
              bottom: '20px',
              left: '50px',
              color: '#000000', // Ajuste a cor conforme necessário para garantir visibilidade sobre a imagem
              
            }}
          >
            contatoelizeu@gmail.com
          </Typography>
        </Box>
        <Box sx={{ flex: 2, textAlign: 'center', mt: '20px' , mr:'-25px'}}>
          <img src="src/assets/foto-menor.jpg" alt="Elizeu Galvão" style={{ width: '80%', maxWidth: '606px', height: 'auto' }} />
          <Typography variant="body1" sx={{ fontSize: '16px', textAlign: 'justify', fontWeight: 'bold', ml: '48px', mr: '48px' }}>
            Nutrindo-se das cores e formas da iconografia de Pernambuco, Elizeu Galvão cria narrativas visuais que celebram e perpetuam a riqueza da tradição de sua terra.
          </Typography>
          <Typography variant="caption" sx={{ fontSize: '14px', mt: 1, textAlign: 'left', ml: '-22px' }}>
            Descrição do trabalho do artista pela Galeria OBRAH
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right', mt:'120px',mr:'50px' }}>
        <InstagramIcon style={{ width: '30px', height: 'auto' }} />
      </Box>
        </Box>
      </Box>
      
    </Container>
  );
};

export default Home;
