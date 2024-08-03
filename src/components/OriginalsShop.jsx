import React from 'react';
import { Container, Box, Typography, Button} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const OriginalsShop = () => {
  return (
    <Container sx={{ mt: 15, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>originals shop</Typography>
      <Box sx={{ borderBottom: '2px solid #000', mb: 3, width: 'fit-content', mx: 'auto' }} />
      <Typography variant="h5" sx={{ mb: 2 }}>No momento não há disponíveis</Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>:(</Typography>
      <Typography variant="body1" sx={{ mb: 2, maxWidth: '600px', mx: 'auto' }}>
        Obras exclusivas serão postadas aqui e infelizmente não tenho nenhuma disponível no momento. Deixe seu e-mail e vou te avisar quando novas pinturas forem lançadas:
      </Typography>
      <Button variant="contained" sx={{ bgcolor: '#000', color: '#fff', width: '300px', height: '50px', textTransform: 'none', mb: 3 }}>
        insira aqui seu e-mail
      </Button>
      <Box sx={{ mt: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2,ml:-10,mr:-10 }}>
        <Typography fontSize={'16px'}>contatoelizeu@gmail.com</Typography>
        <InstagramIcon sx={{ width: '30px', height: '30px' }} />
      </Box>
    </Container>
  );
};

export default OriginalsShop;
