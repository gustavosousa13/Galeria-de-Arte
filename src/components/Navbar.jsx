import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="absolute" color="transparent" elevation={0} sx={{ borderBottom: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#000', ml:10 }}>
          Elizeu Galvão
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'right', flexGrow: 1, paddingRight: '50px', gap: '40px' }}>
          {['home', 'art', 'print shop', 'portfolio', 'originals shop', 'about'].map((page) => (
            page === 'print shop' ? (
              <Button
                key={page}
                component="a"
                href="https://www.colab55.com/@elizeugalvao"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mx: 1, color: '#000', fontWeight: 'bold', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            ) : (
              <Button
                key={page}
                component={Link}
                to={`/${page.replace(/\s+/g, '-').toLowerCase()}`} // Ensure the paths are correctly formatted
                sx={{ mx: 1, color: '#000', fontWeight: 'bold', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            )
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
