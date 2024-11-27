import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Title from './Title';
import Skeleton from './Skeleton';


const BackPaper = styled(Paper)(({ theme }) => ({
  width: 120*6,
  height: 120*12,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Maqueta() {
  return (
      <BackPaper variant="elevation">{<Skeleton />}</BackPaper>
  );
}