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
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import { useForm } from './hooks/useForm';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { isapres } from './info_assets/isapres';
import { ExplicacionPB, ExplicacionPCAEC, ExplicacionPBA, ExplicacionRIA } from './info_assets/explicaciones_componentes';
import { factoresCotizante, factoresCarga } from './info_assets/factores_tabla';
import { ges } from './info_assets/ges';
import { ResultsPaper } from './info_assets/paperStyles';
import Grid from '@mui/material/Grid2';
import { ItemGrid } from './info_assets/paperStyles';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';


export default function FormFun() {

  const { precioBase, precioCaec, precioBA, remImp, edadCot, isapre, onInputChange} = useForm({
    precioBase: "",
    precioCaec: "",
    precioBA: "",
    remImp:"",
    edadCot:"",
    isapre: ""
  });

  const [disableForm, setDisableForm] = useState(false)

  console.log(precioBase)
  console.log(precioCaec)
  console.log(precioBA)
  console.log(remImp)
  console.log(edadCot)
  console.log(isapre)


  const onClickCalcular = (event) => {
    event.preventDefault();
    setDisableForm(true)
    //console.log('desabilitar')
    console.log(factoresCotizante(edadCot))
  }

  const onClickReset = (event) => {
    event.preventDefault();
    setDisableForm(false)
  }

  return (
   <>
  {/* Typography Section */}
  <Typography variant="body2" gutterBottom color="#0064AC" align='justify'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
    quasi quidem quibusdam.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
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
        name='precioBase'
        value={ precioBase }
        onChange={ onInputChange }
        disabled={disableForm}
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
        id="outlined-adornment-caec"
        endAdornment={<InputAdornment position="end">UF</InputAdornment>}
        aria-describedby="outlined-weight-caec-text"
        name='precioCaec'
        value={ precioCaec }
        onChange={ onInputChange }
        disabled={disableForm}
        inputProps={{
          'aria-label': 'caec',
        }}
      />
      <FormHelperText id="outlined-caec-helper-text">
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
        name='precioBA'
        value={ precioBA }
        onChange={ onInputChange }
        disabled={disableForm}
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
        name='remImp'
        value={ remImp }
        onChange={ onInputChange }
        disabled={disableForm}
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
        name='edadCot'
        value={ edadCot }
        onChange={ onInputChange }
        disabled={disableForm}
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
          name='isapre'
          value={ isapre }
          onChange={ onInputChange }
          disabled={disableForm}
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
        disabled={disableForm}
      />
      <FormHelperText id="outlined-weight-helper-text">Número de Cargas</FormHelperText>
    </FormControl>
  </Box>

  <Stack direction="row" spacing={2}>
      <Button variant="contained" disabled={disableForm} onClick={onClickCalcular}>Calcular</Button>
      <Button variant="contained" disabled={!disableForm} onClick={onClickReset}>
        Resetear
      </Button>
  </Stack>  


  <ResultsPaper variant="elevation">
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column',}}>
            <Typography variant="caption" gutterBottom>
                Precio Base
              </Typography>
              <ItemGrid>size=8</ItemGrid>
            </Box>
          </Grid>
          <Grid size={1}>
              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                  <Box sx={{ height: 24 /* Adjust this to match the label height */ }} />
                  <ItemGrid>x</ItemGrid>
              </Box>
          </Grid>
          <Grid size={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', }}>
          <Typography variant="caption" gutterBottom>
                Factor de Riesgo
              </Typography>
                  <ItemGrid>Factor de Riesgo</ItemGrid>
              </Box>
          </Grid>
          <Grid size={1}>
          <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                  <Box sx={{ height: 24 /* Adjust this to match the label height */ }} />
                  <ItemGrid>=</ItemGrid>
              </Box>
          </Grid>
          <Grid size={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                  <Box sx={{ height: 24 /* Adjust this to match the label height */ }} />
                  <ItemGrid>size=8</ItemGrid>
              </Box>
          </Grid>
          <Grid size={7}>
            <ItemGrid>Precio GES</ItemGrid>
          </Grid>
          <Grid size={1}>
            <ItemGrid>=</ItemGrid>
          </Grid>
          <Grid size={4}>
            <ItemGrid>size=8</ItemGrid>
          </Grid>
          <Grid size={7}>
            <ItemGrid>Precio CAEC</ItemGrid>
          </Grid>
          <Grid size={1}>
            <ItemGrid>=</ItemGrid>
          </Grid>
          <Grid size={4}>
            <ItemGrid>size=8</ItemGrid>
          </Grid>
          <Grid size={7}>
            <ItemGrid>Precio Beneficios Adicionales</ItemGrid>
          </Grid>
          <Grid size={1}>
            <ItemGrid>=</ItemGrid>
          </Grid>
          <Grid size={4}>
            <ItemGrid>size=8</ItemGrid>
          </Grid>
          <Grid size={12}>
              <Divider sx={{ borderWidth: 2, borderColor: 'black' }} />
          </Grid>
          <Grid size={7}>
            <ItemGrid>Cotización estimada</ItemGrid>
          </Grid>
          <Grid size={1}>
            <ItemGrid>=</ItemGrid>
          </Grid>
          <Grid size={4}>
            <ItemGrid>size=8</ItemGrid>
          </Grid>
        </Grid>
      </Box>
  </ResultsPaper>    

  </> 
  );
}