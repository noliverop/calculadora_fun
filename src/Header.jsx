import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '1186px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        mx: 'auto',
        my: 0,
        pt: { xs: 2.5, sm: 8.5 }, // 68px on desktop, 40px on mobile
        pb: { xs: 1.5, sm: 2.5 }, // 40px on desktop, 24px on mobile
        px: { xs: 1, sm: 1.5 }, // 16px on mobile, 24px on desktop
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 6,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            width: '100%',
            color: 'black',
            textAlign: 'center',
            fontSize: { xs: '32px', sm: '48px', md: '64px' },
            fontWeight: 'bold',
            letterSpacing: { xs: '-0.64px', sm: '-0.96px', md: '-1.28px' },
            lineHeight: 1.1,
          }}
        >
          Calculadora ICSA y GES
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            width: '100%',
            color: 'rgba(0,0,0,0.75)',
            textAlign: 'justify',
            fontSize: { xs: '16px', sm: '20px', md: '24px' },
            fontWeight: 'normal',
            lineHeight: 1.5,
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
