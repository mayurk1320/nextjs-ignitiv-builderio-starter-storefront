import { grey } from '@mui/material/colors'

export const CartTemplateStyle = {
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
}
