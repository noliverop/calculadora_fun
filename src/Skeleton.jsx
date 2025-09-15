import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormFun from './FormFun';
import Header from './Header';
import ComponentesSection from './ComponentesSection';
import PlanComponentsSection from './PlanComponentsSection';
import SumPlan from './SumPlan';
import Family from './Family';
import ExplicacionCalculadora from './ExplicacionCalculadora';

export default function Skeleton() {
  return (
    <Box 
      sx={{ 
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
        px: 2,
        minHeight: '100vh',
        overflowY: 'auto',
      }}
    >
      <Stack spacing={6} alignItems="center">
        <Header />
        <ComponentesSection />
        <PlanComponentsSection />
        <SumPlan />
        <Family />
        <ExplicacionCalculadora />
        <FormFun />
      </Stack>
    </Box>
  );
}