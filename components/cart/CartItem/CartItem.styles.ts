import { SxProps, Theme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const CartItemStyle = {
  card: {
    maxWidth: '100%',
    border: {
      xs: 'none',
      md: `1px solid ${grey[200]}`,
    },
    boxShadow: 'none',
  },
  cartItemContainer: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
    padding: '1rem 0.5rem',
    justifyContent: 'space-around',
  },
  subContainer: {
    flex: 1,
    padding: '0 0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'flex-start',
    margin: '0',
    position: 'absolute',
    padding: {
      xs: '0.5rem 0',
      sm: '0 0.5rem',
    },
    top: {
      xs: 0,
      sm: '2%',
      md: '5%',
      lg: '6%',
    },
    right: {
      xs: 0,
      sm: 0,
      md: '1%',
      lg: '1%',
    },
  } as SxProps<Theme>,
}
