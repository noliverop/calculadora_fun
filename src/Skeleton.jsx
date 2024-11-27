import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Title from './Title';
import Bajada from './Bajada';
import FormFun from './FormFun';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Skeleton() {
  return (
    <Box sx={{ width: '100%'}}>
      <Stack spacing={2} alignItems="center">
        <Title>Item 1</Title>
        <Bajada>Item 2</Bajada>
        <FormFun>Item 3</FormFun>
      </Stack>
    </Box>
  );
}