import React from 'react';
import { Box, Typography } from '@mui/material';

const ExplicacionCalculadora = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1186px',
        mx: 'auto',
        my: 4,
        px: 5,
        pr: { xs: 8, sm: 10, md: 12 }, // Significantly increased right padding
        pl: { xs: 5, sm: 6, md: 8 },
        overflowY: 'visible',
        overflowX: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: 'black',
          mb: 4,
          fontSize: { xs: '24px', sm: '28px', md: '32px' },
          textAlign: 'left',
          pr: { xs: 2, sm: 3, md: 4 }, // Added right padding to title
        }}
      >
        Explicación Calculadora
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: '#333',
          textAlign: 'justify',
          fontSize: { xs: '14px', sm: '16px', md: '18px' },
          lineHeight: 1.6,
          pr: { xs: 3, sm: 4, md: 6 }, // Added right padding to paragraph
          wordSpacing: '0.1em', // Added slight word spacing
        }}
      >
        La siguiente calculadora permite calcular la cotización a pagar según distinta información entregada. En primer lugar se le consulta si quiere aplicar la variación del Indicador de Costos de la Salud 2025 al precio base y si quiere aplicar los valores GES 2025. Luego se le pide información de sus componentes del plan, es decir, el precio base del plan, el precio CAEC y el precio de sus beneficios adicionales. Todos estos valores usted los puede encontrar en sus documentos contractuales con su isapre, como por ejemplo, en su Formulario Único de Notificación, entre otros. También se le pide entregar la edad del cotizante y la de sus cargas ya que con estos valores y utilizando la Tabla de Factores Única, se puede calcular el Factor de Riesgo del Grupo Familiar. Finalmente, se le pide elegir una isapre ya que dependiendo de esta se puede calcular el precio GES para el ejercicio. Recordar que el precio GES depende tanto de la isapre como de la cantidad de beneficiarios dentro de un plan.
      </Typography>
    </Box>
  );
};

export default ExplicacionCalculadora;
