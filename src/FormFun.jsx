import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
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
import { ExplicacionPB, ExplicacionPCAEC, ExplicacionPBA } from './info_assets/explicaciones_componentes';
import { factoresCotizante, factoresCarga } from './info_assets/factores_tabla';
import { ges } from './info_assets/ges';
import { ges2025monto } from './info_assets/ges2025monto';
import { ResultsPaper } from './info_assets/paperStyles';
import Grid from '@mui/material/Grid2';
import { ItemGrid } from './info_assets/paperStyles';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { icsa2025montos } from './info_assets/icsa2025montos';


export default function FormFun() {

  const isNumber = (value) => !isNaN(value) && value !== "";
  const isNumberNonNegative = (value) => !isNaN(value) && value !== "" && value >= 0;
  const isNumberGreaterThan0 = (value) => !isNaN(value) && value !== "" && value > 0;
  const isNonEmptyString = (value) => typeof value === 'string' && value.trim() !== "";

  const formValidations = {
    precioBase: [isNumberNonNegative, "Campo debe ser un número mayor o igual a 0"],
    precioCaec: [isNumberNonNegative, "Campo debe ser un número mayor o igual a 0"],
    precioBA: [isNumberNonNegative, "Campo debe ser un número mayor o igual a 0"],
    edadCot: [isNumberGreaterThan0, "Campo debe ser un número mayor a 0"],
    isapre: [isNonEmptyString, "Debe seleccionar una isapre"],
  };  

  const {
    precioBase,
    precioCaec,
    precioBA,
    edadCot,
    isapre,
    onInputChange,
    onFieldBlur,
    formState,
    isFormValid,
    precioBaseValid,
    precioCaecValid,
    precioBAValid,
    edadCotValid,
    isapreValid,
    touchedFields,
  } = useForm(
    {
      precioBase: "",
      precioCaec: "",
      precioBA: "",
      edadCot: "",
      isapre: "",
    },
    formValidations
  );

  const [disableForm, setDisableForm] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleShowResults = () => setShowResults(true)
  const handleNotShowResults = () => setShowResults(false)

  const [PPComplementario, setPPComplementario] = useState(0)
  const [cotizacion, setCotizacion] = useState(0)

  const [numeroDeCargas, setNumeroDeCargas] = useState(0); // Track "Número de Cargas"
  const [edadCargas, setEdadCargas] = useState([]);
  const [sumFactoresCargas, setSumFactoresCargas] = useState(0);

  // New state for toggles
  const [icsa2025, setIcsa2025] = useState(false);
  const [ges2025, setGes2025] = useState(false);

  //console.log(precioBaseValid)
  //console.log("isformvalid?")
  //console.log(isFormValid)
  //console.log(formState)

  const handleNumeroDeCargasChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumeroDeCargas(value);

    // Adjust edadCargas and errors state to match the number of fields
    setEdadCargas((prev) => {
      const newCargas = [...prev];
      if (value > newCargas.length) {
        // Add new fields with default value
        return [...newCargas, ...Array(value - newCargas.length).fill('')];
      } else {
        // Remove extra fields
        return newCargas.slice(0, value);
      }
    });
  }

  const handleEdadCargaChange = (index, value) => {
    const numValue = parseInt(value, 10);

    // Update the value
    setEdadCargas((prev) => {
      const updatedCargas = [...prev];
      updatedCargas[index] = value;
      return updatedCargas;
    });

  };


  console.log("n cargas")
  console.log(numeroDeCargas)
  console.log("edades cargas")
  console.log(edadCargas)
  console.log("suma factores cargas")
  console.log(sumFactoresCargas)
  console.log(edadCot)
  console.log((edadCot ? parseFloat(factoresCotizante(edadCot)): 0))

  const onClickCalcular = (event) => {
    event.preventDefault();
    setDisableForm(true)

      const factores = edadCargas.map(age => {
        const parsedAge = parseInt(age, 10);
        return isNaN(parsedAge) ? 0 : factoresCarga(parsedAge);
      });
      const sum_cargas = parseFloat(
        factores
          .filter(num => !isNaN(num)) // Ensure only valid numbers are summed
          .reduce((total, num) => total + parseFloat(num), 0)
          .toFixed(2)
      );
      
      setSumFactoresCargas(sum_cargas)

      const newPPComplementario = parseFloat(
        (parseFloat(icsa2025 ? (icsa2025montos[isapre]+1)*precioBase : precioBase) * ((edadCot ? parseFloat(factoresCotizante(edadCot)) : 0) + sum_cargas)).toFixed(2)
      );
      setPPComplementario(newPPComplementario); // Update PPComplementario state
    

    const newCotizacion =
      newPPComplementario +
      (isapre ? (ges2025 ? (isapre ? ges2025monto[isapre]: 0) : ges[isapre]) : 0) +
      parseFloat(precioCaec) +
      parseFloat(precioBA);
  
    setCotizacion(parseFloat(newCotizacion.toFixed(2)));

    
    handleShowResults()

  }

  const onClickReset = (event) => {
    event.preventDefault();
    setDisableForm(false)
    handleNotShowResults()
  }

  // Common styles for form controls
  const formControlStyles = {
    width: '100%',
  };

  return (
   <>

  {/* Main Form Fields - 4 rows × 2 columns */}
  <Box
    sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 2,
        mt: 2,
        mb: 2,
    }}
    >
    {/* Row 1 - Toggles */}
    <FormControlLabel
      control={
        <Switch
          checked={icsa2025}
          onChange={(e) => setIcsa2025(e.target.checked)}
          disabled={disableForm}
        />
      }
      label="ICSA 2025"
      sx={{ justifyContent: 'center' }}
    />
    <FormControlLabel
      control={
        <Switch
          checked={ges2025}
          onChange={(e) => setGes2025(e.target.checked)}
          disabled={disableForm}
        />
      }
      label="GES 2025"
      sx={{ justifyContent: 'center' }}
    />

    {/* Row 2 */}
    <FormControl sx={formControlStyles} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">UF</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        type='number'
        inputMode="numeric" 
        name='precioBase'
        value={ precioBase }
        onChange={ onInputChange }
        disabled={disableForm}
        onBlur={() => onFieldBlur("precioBase")}
        error={touchedFields.precioBase && !!precioBaseValid}
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
        {touchedFields.precioBase && !!precioBaseValid ? 
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {precioBaseValid}
        </Box> : <div></div>
        }
      </FormHelperText>
    </FormControl>

    <FormControl sx={formControlStyles} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-caec"
        endAdornment={<InputAdornment position="end">UF</InputAdornment>}
        aria-describedby="outlined-weight-caec-text"
        type='number'
        inputMode="numeric" 
        name='precioCaec'
        value={ precioCaec }
        onChange={ onInputChange }
        disabled={disableForm}
        onBlur={() => onFieldBlur("precioCaec")}
        error={touchedFields.precioCaec && !!precioCaecValid}
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
        {touchedFields.precioCaec && !!precioCaecValid ? 
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {precioCaecValid}
        </Box> : <div></div>
        }
      </FormHelperText>
    </FormControl>

    {/* Row 3 */}
    <FormControl sx={formControlStyles} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">UF</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        type='number'
        inputMode="numeric" 
        name='precioBA'
        value={ precioBA }
        onChange={ onInputChange }
        disabled={disableForm}
        onBlur={() => onFieldBlur("precioBA")}
        error={touchedFields.precioBA && !!precioBAValid}
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
        {touchedFields.precioBA && !!precioBAValid ? 
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {precioBAValid}
        </Box> : <div></div>
        }
      </FormHelperText>
    </FormControl>

    <FormControl sx={formControlStyles} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        aria-describedby="outlined-weight-helper-text"
        defaultValue={0}
        disabled={disableForm}
        name='edadCot'
        value={edadCot}
        onChange={onInputChange}
        onBlur={() => onFieldBlur("edadCot")}
        error={touchedFields.edadCot && !!edadCotValid}
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <FormHelperText id="outlined-weight-helper-text">
        Edad Cotizante
        {touchedFields.edadCot && !!edadCotValid ?
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {edadCotValid}
        </Box> : <div></div>
        }
      </FormHelperText>
    </FormControl>

    {/* Row 4 */}
    <FormControl sx={formControlStyles} variant="outlined">  
      <TextField
        id="outlined-select-currency"
        select
        type='text'
        label="Isapre"
        defaultValue=""
        name='isapre'
        value={ isapre }
        onChange={ onInputChange }
        disabled={disableForm}
        onBlur={() => onFieldBlur("isapre")}
        error={touchedFields.isapre && !!isapreValid}
      >
        {isapres.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FormHelperText id="outlined-weight-helper-text">
        {touchedFields.isapre && !!isapreValid ?
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {isapreValid}
        </Box> : <div></div>
        }
      </FormHelperText>
    </FormControl>

    <FormControl sx={formControlStyles} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        aria-describedby="outlined-weight-helper-text"
        defaultValue={0}
        disabled={disableForm}
        value={numeroDeCargas}
        onChange={handleNumeroDeCargasChange}
      />
      <FormHelperText id="outlined-weight-helper-text">Número de Cargas</FormHelperText>
    </FormControl>
  </Box>

  {/* Dependent Age Fields */}
  {numeroDeCargas > 0 && (
    <Box
      sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(auto-fit, minmax(200px, 1fr))',
          },
          gap: 2,
          mt: 2,
          mb: 2,
      }}
     > 
      {Array.from({ length: numeroDeCargas }).map((_, index) => (   
        <FormControl sx={formControlStyles} variant="outlined" key={`edadCarga-${index}`}>
          <OutlinedInput
            id={`outlined-adornment-weight-edadCarga-${index}`}
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            type='number'
            inputMode="numeric" 
            name={`edadCarga-${index}`}
            value={edadCargas[index] || ''}
            onChange={(e) => handleEdadCargaChange(index, e.target.value)}
            disabled={disableForm}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id={`outlined-weight-helper-text-edadCarga-${index}`}>
            Edad Cotizante {index + 1}
          </FormHelperText>
        </FormControl>
      ))}
    </Box>
  )}

  {/* Action Buttons */}
  <Box sx={{ mt: 3, mb: 2 }}>
    <Stack direction="row" spacing={2}>
      <Button variant="contained" disabled={!isFormValid || disableForm} onClick={onClickCalcular}>
        Calcular
      </Button>
      <Button variant="contained" disabled={!disableForm} onClick={onClickReset}>
        Resetear
      </Button>
    </Stack>
  </Box>

  {showResults ?   
  <ResultsPaper variant="elevation">
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column',}}>
            <Typography variant="caption" gutterBottom>
                Precio Base
              </Typography>
              <ItemGrid>{parseFloat(icsa2025 ? (icsa2025montos[isapre]+1)*precioBase : precioBase).toFixed(2)}</ItemGrid>
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
                  <ItemGrid>{((edadCot ? parseFloat(factoresCotizante(edadCot)): 0) + sumFactoresCargas).toFixed(2)}</ItemGrid>
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
                  <ItemGrid>{PPComplementario.toFixed(2)}</ItemGrid>
              </Box>
          </Grid>
          <Grid size={7}>
            <ItemGrid>Precio GES</ItemGrid>
          </Grid>
          <Grid size={1}>
            <ItemGrid>=</ItemGrid>
          </Grid>
          <Grid size={4}>
            <ItemGrid>{(ges2025 ? (isapre ? ges2025monto[isapre]: 0) * (1 + numeroDeCargas) : (isapre ? ges[isapre]: 0) * (1 + numeroDeCargas)).toFixed(2)}</ItemGrid>
          </Grid>
          <Grid size={7}>
            <ItemGrid>Precio CAEC</ItemGrid>
          </Grid>
          <Grid size={1}>
            <ItemGrid>=</ItemGrid>
          </Grid>
          <Grid size={4}>
            <ItemGrid>{parseFloat(precioCaec).toFixed(2)}</ItemGrid>
          </Grid>
          <Grid size={7}>
            <ItemGrid>Precio Beneficios Adicionales</ItemGrid>
          </Grid>
          <Grid size={1}>
            <ItemGrid>=</ItemGrid>
          </Grid>
          <Grid size={4}>
            <ItemGrid>{parseFloat(precioBA).toFixed(2)}</ItemGrid>
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
            <ItemGrid>{cotizacion.toFixed(2)}</ItemGrid>
          </Grid>
        </Grid>
        <Typography
        variant="body1" gutterBottom color="#0064AC" align='justify'
        sx={{ marginTop: 3, color: 'black' }}
        >
        La cotización estimada a pagar dados los antecedentes provistos es de {cotizacion.toFixed(2)} UF. 
        </Typography>
        <Typography
          variant="body1" gutterBottom color="#0064AC" align='justify'
          sx={{ marginTop: 3, color: 'black' }}
        >
        <Box component="ul" sx={{ 
          pl: 3, 
          m: 0,
          '& li': {
            mb: 1,
            fontSize: '1rem',
            lineHeight: 1.6,
          }
        }}>
          <li>{icsa2025 ? `Tu precio base del plan aplicando ICSA 2025 es de ${parseFloat(precioBase*(1+icsa2025montos[isapre])).toFixed(2)} UF.` : `Tu precio base del plan sin aplicar ICSA 2025 es de ${parseFloat(precioBase).toFixed(2)} UF.`}</li>
          <li>Tu factor de riesgo familiar de {((edadCot ? parseFloat(factoresCotizante(edadCot)): 0) + sumFactoresCargas).toFixed(2)} está asociado a la edad del cotizante y sus cargas familiares. Estos factores los puedes ver en las siguientes tablas:
            <Box sx={{ mt: 2, display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              {/* Cotizante Factors Table */}
              <Box sx={{ minWidth: 200 }}>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                  Factores Cotizante
                </Typography>
                <Box sx={{ 
                  border: '1px solid #ccc', 
                  borderRadius: 1,
                  overflow: 'hidden'
                }}>
                  <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr',
                    '& > div': {
                      p: 1,
                      borderBottom: '1px solid #ccc',
                      borderRight: '1px solid #ccc',
                      fontSize: '0.875rem',
                      backgroundColor: '#fff',
                      fontWeight: 'bold'
                    }
                  }}>
                    <Box>Edad</Box>
                    <Box>Factor</Box>
                    <Box>&lt; 20</Box>
                    <Box>0.6</Box>
                    <Box>20-24</Box>
                    <Box>0.9</Box>
                    <Box>25-34</Box>
                    <Box>1.0</Box>
                    <Box>35-44</Box>
                    <Box>1.3</Box>
                    <Box>45-54</Box>
                    <Box>1.4</Box>
                    <Box>55-64</Box>
                    <Box>2.0</Box>
                    <Box>65+</Box>
                    <Box>2.4</Box>
                  </Box>
                </Box>
              </Box>

              {/* Carga Factors Table */}
              <Box sx={{ minWidth: 200 }}>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                  Factores Carga
                </Typography>
                <Box sx={{ 
                  border: '1px solid #ccc', 
                  borderRadius: 1,
                  overflow: 'hidden'
                }}>
                  <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr',
                    '& > div': {
                      p: 1,
                      borderBottom: '1px solid #ccc',
                      borderRight: '1px solid #ccc',
                      fontSize: '0.875rem',
                      backgroundColor: '#fff',
                      fontWeight: 'bold'
                    }
                  }}>
                    <Box>Edad</Box>
                    <Box>Factor</Box>
                    <Box>&lt; 2</Box>
                    <Box>0.0</Box>
                    <Box>2-19</Box>
                    <Box>0.6</Box>
                    <Box>20-24</Box>
                    <Box>0.7</Box>
                    <Box>25-34</Box>
                    <Box>0.7</Box>
                    <Box>35-44</Box>
                    <Box>0.9</Box>
                    <Box>45-54</Box>
                    <Box>1.0</Box>
                    <Box>55-64</Box>
                    <Box>1.4</Box>
                    <Box>65+</Box>
                    <Box>2.2</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </li>
          <li>{ges2025 ? 
  `El precio GES 2025 de la isapre ${isapre} corresponde a ${isapre ? ges2025monto[isapre]: 0} UF. Este valor debe multiplicarse por la cantidad de beneficiarios del plan, en este caso, ${1 + numeroDeCargas} ${numeroDeCargas === 0 ? 'beneficiario' : 'beneficiarios'}. Por lo tanto el precio GES para este plan es: ${((isapre ? ges2025monto[isapre]: 0) * (1 + numeroDeCargas)).toFixed(2)}` : 
  `El precio GES de la isapre ${isapre} corresponde a ${isapre ? ges[isapre]: 0} UF. Este valor debe multiplicarse por la cantidad de beneficiarios del plan, en este caso, ${1 + numeroDeCargas} ${numeroDeCargas === 0 ? 'beneficiario' : 'beneficiarios'}. Por lo tanto el precio GES para este plan es: ${((isapre ? ges[isapre]: 0) * (1 + numeroDeCargas)).toFixed(2)}`
}</li>
          <li>Tu precio CAEC de {parseFloat(precioCaec).toFixed(2)} UF está asociado a la Cobertura Adicional para Enfermedades Catastróficas.</li>
          <li>Tu precio de beneficios adicionales de {parseFloat(precioBA).toFixed(2)} UF está asociado a los beneficios extra contratados.</li>
        </Box>
        </Typography>
      </Box>
  </ResultsPaper>
  : <div></div>  }

  </> 
  );
}