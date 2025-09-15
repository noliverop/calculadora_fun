import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '98%',
        maxWidth: '1186px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        mx: 'auto',
        my: 0,
        pt: { xs: 2.5, sm: 8.5 },
        pb: { xs: 1.5, sm: 2.5 },
        px: { xs: 2, sm: 3, md: 4 },
        pr: { xs: 3, sm: 4, md: 6 },
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '98%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 6,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            width: '98%',
            color: 'black',
            textAlign: 'center',
            fontSize: { xs: '32px', sm: '48px', md: '64px' },
            fontWeight: 'bold',
            letterSpacing: { xs: '-0.64px', sm: '-0.96px', md: '-1.28px' },
            lineHeight: 1.1,
            pr: { xs: 1, sm: 2, md: 3 }
          }}
        >
          Conociendo la cotización a pagar
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            width: '98%',
            color: 'rgba(0,0,0,0.75)',
            textAlign: 'justify',
            fontSize: { xs: '16px', sm: '20px', md: '24px' },
            fontWeight: 'normal',
            lineHeight: 1.5,
            pr: { xs: 3, sm: 4, md: 5 },
            hyphens: 'auto', // Enable automatic hyphenation
          }}
        >
          Esta aplicación permite enseñar y calcular el precio estimado de la
          cotización a pagar de un plan de salud en el sistema Isapre.
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
