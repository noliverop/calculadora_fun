import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const BackPaper = styled(Paper)(({ theme }) => ({
    width: 120*6,
    height: 120*15,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
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
    height: 120*4,
    padding: theme.spacing(2),
    ...theme.typography.a,
    textAlign: 'justify',
    backgroundColor: '#e36906',
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