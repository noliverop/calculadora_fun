import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Description as DocumentIcon, Edit as PenIcon } from '@mui/icons-material';

const ComponentesSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1186px',
        mx: 'auto',
        my: 4,
        px: { xs: 2, sm: 3, md: 4 }, // Consistent horizontal padding
        pr: { xs: 3, sm: 4, md: 6 }, // Enhanced right padding
        overflowX: 'hidden',
        overflowY: 'visible',
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: 'black',
          mb: 4,
          fontSize: { xs: '24px', sm: '28px', md: '32px' },
          textAlign: 'left',
          pr: { xs: 1, sm: 2, md: 3 }, // Right padding for title
        }}
      >
        Componentes del plan de salud
      </Typography>

      {/* Content Box */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: 4,
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          overflowX: 'hidden', // Prevent horizontal overflow
          overflowY: 'hidden', // Prevent horizontal overflow
          pr: { xs: 1, sm: 2, md: 3 }, // Right padding for content
        }}
      >
        {/* Left Text Section */}
        <Box sx={{ 
          flex: 1, // Equal flex for both columns
          pr: { xs: 1, sm: 2, md: 3 },
          minWidth: 0, // Allow flex item to shrink below content size
        }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              lineHeight: 1.6,
              mb: 2,
              color: '#333',
              textAlign: 'justify',
            }}
          >
            Los componentes más relevantes del plan de salud que se deben contemplar para calcular la cotización a pagar son:{' '}
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Precio Base Plan, Factor Grupo Familiar, Precio Plan Complementario, Precio GES, Precio CAE y Precio Beneficio Adicional.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              lineHeight: 1.6,
              mb: 2,
              color: '#333',
              textAlign: 'justify',
            }}
          >
            Todos los componentes anteriores deben ser transparentes al afiliado y deben estar presentes en la documentación contractual, por ejemplo, en el Formulario Único de Notificación.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              lineHeight: 1.6,
              color: '#333',
              fontWeight: 'bold',
              textAlign: 'justify',
            }}
          >
            A continuación, se describe cada componente por separado:
          </Typography>
        </Box>

        {/* Right Illustration Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1, // Equal flex for both columns
            minWidth: 0, // Allow flex item to shrink below content size
            position: 'relative',
            height: { xs: 'auto', md: '100%' },
            overflow: 'visible',
          }}
        >
          {/* Contract Image */}
          <Box
            component="img"
            src="/contrato.png"
            alt="Contract document illustration"
            sx={{
              width: { xs: '100%', sm: '80%', md: '70%' },
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain', // Maintain aspect ratio
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentesSection;
