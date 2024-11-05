import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    borderRadius: 30,
    border: `1px solid ${theme.palette.primary.main}`,
    paddingLeft: 10,
    'label + &': {
      marginTop: theme.spacing(3),
    },
    padding: '2px 5px 2px 15px',
    '& .MuiInputBase-input': {
      position: 'relative',
      fontSize: 14,
      width: 'auto',
      padding: '5px 0',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
    },
    '& input': {
        color: theme.palette.primary.main,
    },
    '& input::placeholder': {
        opacity: 1
    }
}));