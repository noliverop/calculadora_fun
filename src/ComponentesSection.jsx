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
        px: 3,
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
        }}
      >
        {/* Left Text Section */}
        <Box sx={{ flex: 1, pr: { md: 2 } }}>
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
              fontStyle: 'italic',
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
            minWidth: { xs: '100%', md: '300px' },
            maxWidth: { xs: '100%', md: '400px' },
            position: 'relative',
            height: { xs: 'auto', md: '100%' },
          }}
        >
          {/* Document Illustration */}
          <Box
            sx={{
              position: 'relative',
              width: 200,
              height: 250,
              backgroundColor: '#f5f5f5',
              border: '2px solid #333',
              borderRadius: 1,
              p: 2,
              transform: 'rotate(-2deg)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            {/* Document Header */}
            <Box
              sx={{
                width: '100%',
                height: 30,
                backgroundColor: '#d32f2f',
                borderRadius: '4px 4px 0 0',
                mb: 2,
              }}
            />
            
            {/* Document Lines */}
            {[...Array(6)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: `${85 - i * 5}%`,
                  height: 2,
                  backgroundColor: '#333',
                  mb: 1.5,
                  borderRadius: 1,
                }}
              />
            ))}
            
            {/* Signature Lines */}
            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  width: '60%',
                  height: 1,
                  backgroundColor: '#333',
                  borderRadius: 1,
                  transform: 'skew(-10deg)',
                }}
              />
              <Box
                sx={{
                  width: '40%',
                  height: 1,
                  backgroundColor: '#333',
                  borderRadius: 1,
                  transform: 'skew(5deg)',
                }}
              />
            </Box>
          </Box>

          {/* Pen */}
          <Box
            sx={{
              position: 'absolute',
              top: '60%',
              right: '20%',
              transform: 'rotate(45deg)',
              zIndex: 2,
            }}
          >
            <PenIcon
              sx={{
                fontSize: 40,
                color: '#ffc107',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              }}
            />
          </Box>

          {/* Decorative Elements */}
          {/* Pink Plus */}
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: 20,
              height: 20,
              backgroundColor: '#e91e63',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            +
          </Box>

          {/* Yellow Dot */}
          <Box
            sx={{
              position: 'absolute',
              top: '30%',
              left: '5%',
              width: 12,
              height: 12,
              backgroundColor: '#ffc107',
              borderRadius: '50%',
            }}
          />

          {/* Green Dot */}
          <Box
            sx={{
              position: 'absolute',
              top: '15%',
              right: '30%',
              width: 10,
              height: 10,
              backgroundColor: '#4caf50',
              borderRadius: '50%',
            }}
          />

          {/* Yellow Starbursts */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              right: '15%',
              width: 16,
              height: 16,
              backgroundColor: '#ffc107',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              right: '5%',
              width: 12,
              height: 12,
              backgroundColor: '#ffc107',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          />

          {/* Light Blue Starburst */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: 14,
              height: 14,
              backgroundColor: '#03a9f4',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentesSection;
