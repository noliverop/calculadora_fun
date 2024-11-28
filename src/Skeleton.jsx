import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Title from './Title';
import Bajada from './Bajada';
import FormFun from './FormFun';

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