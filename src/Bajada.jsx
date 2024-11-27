import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const BajadaPaper = styled(Paper)(({ theme }) => ({
  width: 120*5,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.a,
  textAlign: 'justify',
  backgroundColor: '#0693e3',
  margin: 'auto',
  display: 'flex', // Enable Flexbox
  alignItems: 'center', // Center vertically
  color: 'hsl(0, 23%, 97%)',
}));

export default function Bajada() {
  return (
      <BajadaPaper variant="elevation">
        En el marco de la «Agenda de Probidad y Transparencia», iniciativa que responde a las mayores exigencias de transparencia y probidad que caracterizan nuestros tiempos, la Superintendencia de Salud elaboró un Código de Ética interno que presenta normas detalladas, claras y precisas sobre conductas y comportamiento funcionario que necesariamente debe observarse.
        </BajadaPaper>
  );
}