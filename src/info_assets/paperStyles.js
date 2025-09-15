import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const BackPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: '1186px', // Recommended: matches other components
    minHeight: 'auto',
    height: 'auto',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    overflowY: 'visible',
    overflowX: 'hidden',
  }));

export const TitlePaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: '600px',
    minHeight: 120, // Changed from fixed height to minHeight
    height: 'auto', // Allow height to grow with content
    padding: theme.spacing(2),
    ...theme.typography.h3,
    textAlign: 'center',
    backgroundColor: '#0693e3',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'hsl(0, 23%, 97%)',
    overflowX: 'hidden',
    overflowY: 'visible', // Prevent vertical overflow
  }));

export const BajadaPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: '600px',
    minHeight: 120, // Changed from fixed height to minHeight
    height: 'auto', // Allow height to grow with content
    padding: theme.spacing(2),
    ...theme.typography.a,
    textAlign: 'justify',
    backgroundColor: '#0693e3',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    color: 'hsl(0, 23%, 97%)',
    overflowX: 'hidden',
    overflowY: 'visible', // Prevent vertical overflow
  }));

export const ResultsPaper = styled(Paper)(({ theme }) => ({
    width: '90%', // Remove maxWidth constraint
    minHeight: 'auto',
    height: 'auto',
    padding: theme.spacing(3),
    ...theme.typography.a,
    textAlign: 'justify',
    backgroundColor: theme.palette.warning.main,
    margin: 'auto',
    display: 'flex',
    color: 'hsl(0, 23%, 97%)',
    overflowX: 'hidden',
    overflowY: 'visible',
  }));

export const ItemGrid = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflowX: 'hidden',
    overflowY: 'visible', // Prevent vertical overflow
    wordBreak: 'break-word',
    minHeight: 'auto', // Ensure no fixed height
    height: 'auto', // Allow content to determine height
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));