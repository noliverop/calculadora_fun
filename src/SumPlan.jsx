import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ArrowForward as ArrowIcon } from '@mui/icons-material';

const SumPlan = () => {
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '1000px',
        mx: 'auto',
        my: 4,
        px: { xs: 2, sm: 3, md: 4 },
        pr: { xs: 3, sm: 4, md: 6 },
        border: '2px solid #e0e0e0', // Added border
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Column - Price Components */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            {/* Precio Plan Complementario */}
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  mb: 0.5,
                }}
              >
                Precio Plan Complementario
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '1rem',
                }}
              >
                +
              </Typography>
            </Box>

            {/* Precio GES */}
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  mb: 0.5,
                }}
              >
                Precio GES
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '1.25rem',
                }}
              >
                +
              </Typography>
            </Box>

            {/* Precio CAEC */}
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  mb: 0.5,
                }}
              >
                Precio CAEC
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '1rem',
                }}
              >
                +
              </Typography>
            </Box>

            {/* Precio Beneficios Adicionales */}
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  mb: 0.5,
                }}
              >
                Precio Beneficios Adicionales
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Middle Column - Arrow */}
        <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              backgroundColor: '#1976d2',
              borderRadius: '50%',
              color: 'white',
            }}
          >
            <ArrowIcon sx={{ fontSize: 30 }} />
          </Box>
        </Grid>

        {/* Right Column - Total */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                fontSize: '2rem',
                mb: 1,
              }}
            >
              Total Cotización Pactada
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SumPlan;
