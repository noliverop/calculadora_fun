import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const PlanComponentsSection = () => {
  const componentsData = [
    {
      title: 'Precio Base Plan',
      description:
        'Es el precio asignado por la Isapre a cada plan de salud complementario. Puede reajustarse anualmente según el Indicador de Costos de Salud.',
    },
    {
      title: 'Precio Plan Complementario',
      description: (
        <>
          Corresponde al precio total a pagar por el plan de salud complementario y se obtiene de la{' '}
          <Typography component="span" fontWeight="bold">
            multiplicación
          </Typography>{' '}
          del{' '}
          <Typography component="span" fontWeight="bold">
            precio base del plan de salud
          </Typography>{' '}
          por el{' '}
          <Typography component="span" fontWeight="bold">
            factor del grupo familiar
          </Typography>
          .
        </>
      ),
    },
    {
      title: 'Precio CAEC',
      description:
        'Corresponde al precio que cobra la isapre por la Cobertura Adicional para Enfermedades Catastróficas otorgada al afiliado y sus beneficiarios.',
    },
    {
      title: 'Factor Grupo Familiar',
      description:
        'Corresponde a la suma de factores etáreos asignado al afiliado y a sus beneficiarios, de conformidad a la respectiva tabla de factores del plan de salud. Los factores a utilizar corresponden a aquellos presentes en la Tabla de Factores Única, que comenzó a regir el 1 de abril del año 2020.',
    },
    {
      title: 'Precio GES',
      description:
        'Precio que la isapre cobra por las Garantías Explícitas en Salud correspondiente al valor total del grupo familiar.',
    },
    {
      title: 'Precio Beneficio Adicional',
      description:
        'Corresponde al precio de o los beneficios adicionales contratados por el afiliado.',
    },
  ];

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
      <Grid container spacing={3}>
        {componentsData.map((component, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: 'white',
              }}
            >
              <Typography 
                variant="h6" 
                fontWeight="bold" 
                gutterBottom
                sx={{ 
                  color: 'black',
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                  mb: 2,
                }}
              >
                {component.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  textAlign: 'justify',
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  lineHeight: 1.6,
                  color: '#333',
                }}
              >
                {component.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlanComponentsSection;
