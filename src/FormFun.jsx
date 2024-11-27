import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';


const isapres = [
    {
      value: 'Isalud',
      label: 'Isalud',
    },
    {
      value: 'Colmena',
      label: 'Colmena',
    },
    {
      value: 'Fundación',
      label: 'Fundación',
    },
    {
      value: 'Cruz Blanca',
      label: 'Cruz Blanca',
    },
    {
      value: 'Vida Tres',
      label: 'Vida Tres',
    },
    {
      value: 'Nueva Masvida',
      label: 'Nueva Masvida',
    },
    {
      value: 'Banmédica',
      label: 'Banmédica',
    },
    {
      value: 'Consalud',
      label: 'Consalud',
    },
    {
      value: 'Esencial',
      label: 'Esencial',
    },
  ];

const ExplicacionPB = `
Aca va una explicación larga de lo que es un precio base
`;

const ExplicacionPCAEC = `
Aca va una explicación larga de lo que es un precio CAEC
`;

const ExplicacionPBA = `
Aca va una explicación larga de lo que es un precio beneficios adicionales
`;

const ExplicacionRIA = `
Aca va una explicación larga de lo que es la remuneración imponible
`;

const FormPaper = styled(Paper)(({ theme }) => ({
    width: 120 * 5,
    height: 120 * 4.3,
    padding: theme.spacing(2),
    ...theme.typography.h3,
    textAlign: 'justify',
    backgroundColor: '#C2EAFF',
    margin: 'auto',
    display: 'flex', // Enable Flexbox
    flexDirection: 'column', // Stack children vertically
    justifyContent: 'flex-start', // Start alignment from the top
    alignItems: 'center', // Center children horizontally
    color: 'hsl(0, 23%, 97%)',
  }));

export default function FormFun() {
  return (
<FormPaper variant="elevation">
  {/* Typography Section */}
  <Typography variant="body2" gutterBottom color="#0064AC">
    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
    quasi quidem quibusdam.
  </Typography>

  {/* Box Section */}
  <Box
    sx={{
        display: 'flex',
        flexWrap: 'wrap', // Prevent wrapping
        justifyContent: 'space-between', // Adjust spacing between items
        alignItems: 'center', // Align items vertically in the center
        gap: 2, // Optional: Adds consistent spacing between items
        mt: 2, // Top margin
    }}
    >
    <FormControl sx={{ m: 1}} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">UF</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <FormHelperText id="outlined-weight-helper-text">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        Precio Base del Plan
        <Tooltip title={ExplicacionPB}>
          <InfoIcon />
        </Tooltip>
        </Box>
      </FormHelperText>
    </FormControl>
    <FormControl sx={{ m: 1}} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">UF</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <FormHelperText id="outlined-weight-helper-text">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          Precio CAEC
          <Tooltip title={ExplicacionPCAEC}>
            <InfoIcon />
          </Tooltip>
        </Box>
      </FormHelperText>
    </FormControl>
    <FormControl sx={{ m: 1}} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">UF</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <FormHelperText id="outlined-weight-helper-text">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          Precio Beneficios Adicionales
          <Tooltip title={ExplicacionPBA}>
            <InfoIcon />
          </Tooltip>
        </Box>
      </FormHelperText>
    </FormControl>
    <FormControl sx={{ m: 1}} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">CLP$</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <FormHelperText id="outlined-weight-helper-text">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          Remuneración imponible aproximada
          <Tooltip title={ExplicacionRIA}>
            <InfoIcon />
          </Tooltip>
        </Box>
      </FormHelperText>
    </FormControl>

    <FormControl sx={{ m: 1, minWidth: 0.42}} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end"></InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <FormHelperText id="outlined-weight-helper-text">Edad Cotizante</FormHelperText>
    </FormControl>

    <TextField sx={{ m: 1, minWidth: 0.426}}
          id="outlined-select-currency"
          select
          label="Isapre"
          defaultValue=""
          helperText="Elija su Isapre a evaluar"
        >
          {isapres.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  </Box>
  <Box
    sx={{
        display: 'flex',
        flexWrap: 'wrap', // Prevent wrapping
        justifyContent: 'space-between', // Adjust spacing between items
        alignItems: 'center', // Align items vertically in the center
        gap: 2, // Optional: Adds consistent spacing between items
        mt: 2, // Top margin
    }}
    >
    <FormControl sx={{ m: 1}} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        aria-describedby="outlined-weight-helper-text"
        defaultValue={0}
        placeholder={0}
      />
      <FormHelperText id="outlined-weight-helper-text">Número de Cargas</FormHelperText>
    </FormControl>
  </Box>
</FormPaper>
  );
}