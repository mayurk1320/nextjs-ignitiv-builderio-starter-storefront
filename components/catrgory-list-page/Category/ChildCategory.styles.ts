import { ForkRight } from '@mui/icons-material'

import theme from '@/styles/theme'

export const ChildCategoryStyle = {
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
    fontSize: '20px',
    fontWeight: 'bold',
  },
  gridContainer: {
    display: { md: 'flex', xs: 'block' },
    marginTop: { xs: '0px', md: '0px' },
    marginBottom: { xs: '15px', md: '15px' },
    padding: '0',
    margin: '0',
    width: '100%',
  },
  categoryItem: {
    background: theme?.palette.primary.light,
    height: '350px',
    borderRadius: '5px',
    marginBottom: '20px',
    overflow: 'hidden',
    margin: '0 1%',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: theme?.palette.background.white,
      boxShadow: `0 4px 8px 0 ${theme?.palette.background.boxShadow1}, 0 6px 20px 0 ${theme?.palette.background.boxShadow2}`,
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
    marginBottom: '70px',
  },
  carouselContainer: {
    position: 'relative',
  },

  prevButton: {
    float: 'right',
    marginRight: '10px',
    marginTop: '8px',
    color: theme?.palette.primary.main,
    backgroundColor: theme?.palette?.background.white,
    border: `2px solid ${theme?.palette.primary.main}`,
    borderRadius: '7px',
    height: '28px',
    width: '28px',
    '&:hover': {
      color: theme?.palette?.background.white,
      backgroundColor: theme?.palette.primary.main,
    },
  },
  nextButton: {
    float: 'right',
    marginRight: '10px',
    marginTop: '8px',
    color: theme?.palette.primary.main,
    backgroundColor: theme?.palette?.background.white,
    border: `2px solid ${theme?.palette.primary.main}`,
    borderRadius: '7px',
    height: '28px',
    width: '28px',
    '&:hover': {
      color: theme?.palette?.background.white,
      backgroundColor: theme?.palette.primary.main,
    },
  },
  disabledButton: {
    float: 'right',
    marginRight: '10px',
    marginTop: '8px',
    color: theme?.palette.primary.main,
    backgroundColor: theme?.palette.background.white,
    border: `2px solid ${theme?.palette.primary.main}`,
    borderRadius: '7px',
    height: '28px',
    width: '28px',
    '&:hover': {
      color: theme?.palette.background.white,
      backgroundColor: theme?.palette.primary.main,
    },
  },
  selectedItem: {
    border: `2px solid ${theme?.palette.border.main}`,
  },

  navigationContainer: {
    marginRight: '25px',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
  },
  categoryName: {
    borderLeft: `8px solid ${theme?.palette.border.light}`,
    padding: '10px 20px',
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '44px',
    lineHeight: '1.2',
  },
  shopAllButton: {
    padding: '10px 20px',
    borderRadius: '50px',
    marginRight: '15px',
    backgroundColor: theme?.palette.primary.main,
    border: `1px solid ${theme?.palette.primary.main}`,
    fontSize: '16px',
    color: theme?.palette.background.white,
    fontWeight: '600',
    '&:hover': {
      backgroundColor: theme?.palette.background.buttonPrimary,
      border: `1px solid ${theme?.palette.background.buttonPrimary}`,
    },
  },
  navigationIconContainer: {
    float: 'right',
    marginBottom: '25px',
    width: '100%',
    overflow: 'hidden',
  },
  mainTitle: {
    FontSize: '36px !important',
    color: theme?.palette?.text?.primary,
    fontWeight: '400',
    margin: '15px',
    float: 'left',
    width: 'auto',
  },
  categoryMainItem: {
    float: 'left',
  },
}
