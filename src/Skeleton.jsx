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
        px: { xs: 2, sm: 3, md: 4 }, // Consistent horizontal padding
        minHeight: '100vh',
        height: 'auto', // Allow height to grow with content
        overflowY: 'visible', // Changed from auto to visible
        overflowX: 'hidden',
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