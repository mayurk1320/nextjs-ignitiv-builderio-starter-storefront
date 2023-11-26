import theme from '@/styles/theme'

export const DealsStyles = {
  headingSection: {
    display: 'flex',
    marginBottom: '25px',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: { md: '36px', xs: '28px' },
    opacity: 0.8,
  },
  subHeading: {
    fontSize: { md: '16px' },
    opacity: 0.7,
  },
  viewAllLink: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: 600,
    marginRight: '20px',
    fontSize: { md: '16px', xs: '14px' },
  },
  navigationIcon: {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '8px',
    padding: '1px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
    },
  },
  dealsList: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  dealsCard: {
    position: 'relative',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: '250px',
    backgroundColor: '#F7F6F3',
    borderRadius: '8px',
    border: '1px solid #FFFFFF',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#FFFFFF',
      border: '1px solid #F7F6F3',
      transition: '0.3s',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
  },
  saleChip: {
    position: 'absolute',
    top: '-14px',
    left: '80px',
    backgroundColor: '#FF2400',
    color: '#FFFFFF',
    fontWeight: 600,
    width: 'fit-content',
    padding: '3px 20px',
    borderRadius: '16px',
    margin: 'auto',
  },
  price: {
    padding: '5px 0 0',
    textDecoration: 'line-through',
  },
  discountPrice: {
    padding: '5px 0',
    marginLeft: 2,
    fontWeight: 900,
  },
  addToCartBtn: {
    fontWeight: 600,
    backgroundColor: '#7B68EE',
    maxWidth: '150px',
    margin: '15px auto 0',
    padding: '3px 16px',
    borderRadius: '6px',
  },
  addToWishlist: {
    fontWeight: 600,
    color: '#2B2B2B',
    marginTop: 1,
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}
