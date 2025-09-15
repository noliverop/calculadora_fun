import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ArrowForward as ArrowIcon } from '@mui/icons-material';

const SumPlan = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1186px',
        mx: 'auto',
        my: 4,
        px: 3,
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
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                  mb: 0.5,
                }}
              >
                Precio Plan Complementario
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontStyle: 'italic',
                  color: '#666',
                  fontSize: { xs: '12px', sm: '14px', md: '16px' },
                }}
              >
                (Precio Base Plan multiplicado por Factor Grupo Familiar)
              </Typography>
            </Box>

            {/* Plus Sign */}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: { xs: '24px', sm: '28px', md: '32px' },
                }}
              >
                +
              </Typography>
            </Box>

            {/* Precio GES */}
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                }}
              >
                Precio GES
              </Typography>
            </Box>

            {/* Plus Sign */}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: { xs: '24px', sm: '28px', md: '32px' },
                }}
              >
                +
              </Typography>
            </Box>

            {/* Precio CAEC */}
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                }}
              >
                Precio CAEC
              </Typography>
            </Box>

            {/* Plus Sign */}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: { xs: '24px', sm: '28px', md: '32px' },
                }}
              >
                +
              </Typography>
            </Box>

            {/* Precio Beneficio Adicional */}
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                }}
              >
                Precio Beneficio Adicional
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Middle Column - Arrow Symbol */}
        <Grid item xs={12} md={2}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: '3px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}
            >
              <ArrowIcon
                sx={{
                  fontSize: 40,
                  color: 'black',
                  fontWeight: 'bold',
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right Column - Total Result */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              minHeight: { xs: 'auto', md: '300px' },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
                fontSize: { xs: '20px', sm: '24px', md: '28px' },
                lineHeight: 1.2,
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
