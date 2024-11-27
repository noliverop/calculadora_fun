import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const TitlePaper = styled(Paper)(({ theme }) => ({
  width: 120*5,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.h3,
  textAlign: 'center',
  backgroundColor: '#0693e3',
  margin: 'auto',
  display: 'flex', // Enable Flexbox
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  color: 'hsl(0, 23%, 97%)',
}));

export default function Title() {
  return (
      <TitlePaper variant="elevation">Calculadora FUN</TitlePaper>
  );
}