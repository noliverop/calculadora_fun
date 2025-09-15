import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const BackPaper = styled(Paper)(({ theme }) => ({
    width: 120*6,
    minHeight: 120*18, // Changed from fixed height to minHeight
    height: 'auto', // Allow height to grow with content
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    overflowY: 'auto', // Allow scrolling if needed
  }));

export const TitlePaper = styled(Paper)(({ theme }) => ({
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

export const BajadaPaper = styled(Paper)(({ theme }) => ({
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

export const ResultsPaper = styled(Paper)(({ theme }) => ({
    width: 120*5,
    minHeight: 120*4.5, // Changed from fixed height to minHeight
    height: 'auto', // Allow height to grow with content
    padding: theme.spacing(2),
    ...theme.typography.a,
    textAlign: 'justify',
    backgroundColor: theme.palette.warning.main, // Material-UI warning color (orange)
    margin: 'auto',
    display: 'flex', // Enable Flexbox
    color: 'hsl(0, 23%, 97%)',
  }));

export const ItemGrid = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));