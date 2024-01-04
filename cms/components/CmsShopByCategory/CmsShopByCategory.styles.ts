import { ForkRight } from '@mui/icons-material'

import theme from '@/styles/theme'

export const ShopByCategoryStyle = {
  categoryLink: {
    textDecoration: 'none',
    color: 'inherit',
    textAlign: 'center',
  },

  categoryImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    padding: '5px',
  },

  categoryText: {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  gridContainer: {
    display: { md: 'flex', xs: 'block' },
    marginTop: { xs: '0px', md: '0px' },
    marginBottom: { xs: '15px', md: '15px' },
    padding: '0',
    margin: '0 -16px',
    width: '100%',
  },
  categoryItem: {
    background: '#e8ddfe',
    height: '350px',
    padding: '25px',
    borderRadius: '5px',
    marginBottom: '20px',
    overflow: 'hidden',
    margin: '0 1%',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
  },
  categoryItemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
  },
  categoryImageWrapper: {
    height: '90%',
    width: '100%',
  },
  container: {
    maxWidth: '1536px',
    padding: '0 !important',
  },
  carouselContainer: {
    position: 'relative',
  },

  prevButton: {
    float: 'right',
    marginRight: '10px',
    marginTop: '8px',
    color: '#8D59FC',
    backgroundColor: '#ffffff',
    border: '2px solid #8D59FC',
    borderRadius: '7px',
    height: '28px',
    width: '28px',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#8D59FC',
    },
  },
  nextButton: {
    float: 'right',
    marginRight: '10px',
    marginTop: '8px',
    color: '#8D59FC',
    backgroundColor: '#ffffff',
    border: '2px solid #8D59FC',
    borderRadius: '7px',
    height: '28px',
    width: '28px',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#8D59FC',
    },
  },
  disabledButton: {
    float: 'right',
    marginRight: '10px',
    marginTop: '8px',
    color: '#8D59FC',
    backgroundColor: '#ffffff',
    border: '2px solid #8D59FC',
    borderRadius: '7px',
    height: '28px',
    width: '28px',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#8D59FC',
    },
  },
  selectedItem: {
    border: '2px solid #cccccc',
  },

  navigationContainer: {
    textAlign: 'right',
    marginRight: '25px',
    width: '100%',
    overflow: 'hidden',
  },
  viewAllText: {
    float: 'right',
    marginTop: '10px',
    fontSize: '16px',
    color: '#8D59FC',
    fontWeight: '600',
    marginRight: '15px',
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  navigationIconContainer: {
    float: 'right',
    width: 'auto',
  },
  mainTitle: {
    FontSize: '36px !important',
    color: '#555555',
    fontWeight: '400',
    margin: '15px',
    float: 'left',
    width: 'auto',
  },
  categoryMainItem: {
    float: 'left',
  },
}
