import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@mui/material';
import {
  Description as DocumentIcon,
  People as FamilyIcon,
  Calculate as CalculateIcon,
  AttachMoney as MoneyIcon,
  Group as GroupIcon,
  Star as StarIcon,
} from '@mui/icons-material';

export default function CalculadoraDocument() {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        maxWidth: 800, 
        mx: 'auto', 
        mt: 2,
        backgroundColor: '#fafafa'
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            color: '#1976d2',
            fontWeight: 'bold',
            mb: 2
          }}
        >
          Calculadora ICSA y GES
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: '#555',
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Esta aplicación permite enseñar y calcular el precio estimado de la cotización a pagar de un plan de salud en el sistema Isapre.
        </Typography>
      </Box>

      {/* Key Components Overview */}
      <Card sx={{ mb: 4, backgroundColor: '#f8f9fa' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                Componentes más relevantes para el cálculo de la cotización
              </Typography>
              
              <Typography variant="body1" paragraph>
                <strong>Precio Base Plan, Factor Grupo Familiar, Precio Plan Complementario, Precio GES, Precio CAEC y Precio Beneficio Adicional.</strong>
              </Typography>
              
              <Typography variant="body1" paragraph>
                Estos componentes deben ser transparentes para el afiliado y estar presentes en la documentación contractual, como el <strong>Formulario Único de Notificación</strong>.
              </Typography>
              
              <Typography variant="body1" paragraph>
                A continuación, se describirán cada uno de estos componentes por separado.
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <DocumentIcon sx={{ fontSize: 80, color: '#1976d2' }} />
                <Box sx={{ position: 'absolute', top: -10, right: -10 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      sx={{ 
                        fontSize: 12, 
                        color: '#ffc107',
                        position: 'absolute',
                        top: Math.sin(i * 0.8) * 15,
                        left: Math.cos(i * 0.8) * 15
                      }} 
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Detailed Component Descriptions */}
      <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', mb: 3, fontWeight: 'bold' }}>
        Descripción de Componentes
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MoneyIcon sx={{ color: '#1976d2', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Precio Base Plan
                </Typography>
              </Box>
              <Typography variant="body2">
                Precio asignado por la Isapre a cada plan de salud complementario, sujeto a reajuste anual según el Indicador de Costo de Salud.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: '100%', mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <GroupIcon sx={{ color: '#1976d2', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Factor Grupo Familiar
                </Typography>
              </Box>
              <Typography variant="body2">
                Suma de factores de edad asignados al afiliado y beneficiarios, según la tabla de factores del plan de salud, específicamente la <strong>Tabla de Factores Única</strong> vigente desde el 1 de abril de 2020.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CalculateIcon sx={{ color: '#1976d2', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Precio Plan Complementario
                </Typography>
              </Box>
              <Typography variant="body2">
                Precio total del plan de salud complementario, obtenido multiplicando el precio base por el factor del grupo familiar.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Chip label="GES" color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Precio GES
                </Typography>
              </Box>
              <Typography variant="body2">
                Precio cobrado por la Isapre por las <strong>Garantías Explícitas en Salud</strong>, correspondiente al valor total del grupo familiar.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: '100%', mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Chip label="CAEC" color="secondary" sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Precio CAEC
                </Typography>
              </Box>
              <Typography variant="body2">
                Precio cobrado por la Isapre por la <strong>Cobertura Adicional para Enfermedades Catastróficas</strong> otorgada al afiliado y beneficiarios.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <StarIcon sx={{ color: '#1976d2', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Precio Beneficio Adicional
                </Typography>
              </Box>
              <Typography variant="body2">
                Precio de cualquier beneficio adicional contratado por el afiliado.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Formula Section */}
      <Card sx={{ mb: 4, backgroundColor: '#e3f2fd' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', textAlign: 'center' }}>
            Fórmula de Cotización Total
          </Typography>
          
          <Box sx={{ 
            backgroundColor: 'white', 
            p: 3, 
            borderRadius: 2, 
            border: '2px solid #1976d2',
            textAlign: 'center'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Total Cotización Pactada =
            </Typography>
            
            <List sx={{ textAlign: 'left', maxWidth: 500, mx: 'auto' }}>
              <ListItem>
                <ListItemIcon>
                  <CalculateIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Precio Plan Complementario"
                  secondary="(Precio Base Plan × Factor Grupo Familiar)"
                />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  <Chip label="GES" color="primary" size="small" />
                </ListItemIcon>
                <ListItemText primary="+ Precio GES" />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  <Chip label="CAEC" color="secondary" size="small" />
                </ListItemIcon>
                <ListItemText primary="+ Precio CAEC" />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  <StarIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="+ Precio Beneficio Adicional" />
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>

      {/* Concluding Section */}
      <Card sx={{ backgroundColor: '#f0f8ff' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 80 }}>
              <FamilyIcon sx={{ fontSize: 60, color: '#1976d2' }} />
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                Mientras que el <strong>precio base del plan</strong>, el <strong>precio CAEC</strong> y el <strong>precio de beneficios adicionales</strong> no dependen de la cantidad de beneficiarios dentro del plan, los valores de <strong>factor del grupo familiar</strong> y el <strong>precio GES</strong> sí dependerán de la cantidad de beneficiarios y sus edades.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}
