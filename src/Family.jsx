import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Family = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1186px',
        mx: 'auto',
        my: 4,
        px: { xs: 2, sm: 3, md: 4 }, // Consistent horizontal padding
        pr: { xs: 3, sm: 4, md: 6 }, // Enhanced right padding
        overflowX: 'hidden', // Prevent horizontal overflow
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Column - Family Icon */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src="/family_icon.png"
            alt="Family icon"
            sx={{
              width: 150,
              height: 'auto',
              maxWidth: '100%',
            }}
          />
        </Grid>

        {/* Right Column - Text */}
        <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ 
            pr: { xs: 3, sm: 4, md: 6 }, // Match container right padding
            pl: { xs: 1, sm: 2, md: 3 }, // Add left padding for balance
            wordBreak: 'break-word', // Prevent text overflow
            overflowWrap: 'break-word', // Additional text wrapping
          }}>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(0,0,0,0.75)',
                textAlign: 'justify',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                wordBreak: 'break-word', // Prevent text overflow
                overflowWrap: 'break-word', // Additional text wrapping
              }}
            >
              Mientras que el precio base del plan, el precio CAEC y el precio de beneficios adicionales no
              dependen de la cantidad de beneficiarios dentro del plan, los valores de factor del grupo familiar y el
              precio GES sí dependerán de la cantidad de beneficiarios y/o sus edades.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Family;
