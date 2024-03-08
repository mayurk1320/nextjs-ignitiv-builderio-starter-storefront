import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'

import theme, { themeBackGround, themeBorder } from '@/styles/theme'

export const PLPStyles = {
  breadcrumbsClass: {
    margin: '1.5rem 0',
    padding: {
      md: '0',
      xs: '0 1rem',
    },
  },
  navBar: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  navBarMain: {
    display: 'flex',
    flex: 1,
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    alignItems: {
      md: 'center',
      xs: 'flex-start',
    },
    padding: {
      md: '0.5rem 0',
      xs: '2% 1rem',
    },
  },
  navBarSort: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 0 0 auto',
    alignItems: 'center',
    width: { md: 'auto', xs: '100%' },
    padding: '0.5rem 0',
  } as SxProps<Theme> | undefined,
  navBarLabel: {
    whiteSpace: 'noWrap',
    marginRight: '1.5rem',
    typography: 'body1',
    color: 'text.primary',
    display: { md: 'block', xs: 'none' },
  } as SxProps<Theme> | undefined,
  navBarView: {
    margin: '0 0 0 5rem',
    order: 0,
    alignItems: 'center',
    display: {
      md: 'flex',
      xs: 'none',
    },
  },
  mainSection: {
    display: 'flex',
  },
  sideBar: {
    display: {
      md: 'block',
      xs: 'none',
    },
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'grey.500',
    padding: '0 1.5625rem 0 0',
    maxWidth: {
      md: '17%',
      xs: 'auto',
    },
  } as SxProps<Theme> | undefined,
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  filterByButton: {
    textTransform: 'capitalize',
    border: '1px solid #2b2b2b',
    color: '#2b2b2b',
    justifyContent: 'space-between',
    width: '100%',
    height: '2.188rem',
    fontWeight: '400',
  },
  showMoreButton: {
    width: { md: '23.5rem', xs: '12.5rem' },
    padding: '10px 20px',
    borderRadius: '50px',
    backgroundColor: theme?.palette.primary.main,
    border: `1px solid ${theme?.palette.primary.main}`,
    fontSize: '16px',
    color: theme?.palette.common.white,
    fontWeight: '600',
    '&:hover': {
      backgroundColor: themeBackGround.default,
      border: `1px solid ${themeBackGround.default}`,
    },
  },
  clearFilterButton: {
    padding: '10px 20px',
    borderRadius: '10px',
    backgroundColor: theme?.palette.primary.main,
    border: `1px solid ${theme?.palette.primary.main}`,
    fontSize: '16px',
    color: theme?.palette.common.white,
    fontWeight: '600',
    '&:hover': {
      backgroundColor: themeBackGround.default,
      border: `1px solid ${themeBackGround.default}`,
    },
  },
  productResults: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0',
  },
  categoryFacetHeader: {
    fontWeight: 'bold',
    color: 'text.primary',
    marginBottom: '0.5rem',
  },
  categoryFacetHeaderLoading: {
    height: { md: '2.25rem', xs: '1.5rem' },
    width: { md: '15.625rem', xs: '10.75rem' },
  },
  sorting: {
    display: 'flex',
    minWidth: { md: '11.875rem', xs: '9.313rem' },
    marginTop: { xs: '0.5rem', md: '0' },
  },
  filterBy: {
    minWidth: { md: '11.875rem', xs: '9.313rem' },
    display: { md: 'none' },
    marginTop: { xs: '0.5rem', md: '0' },
  },
  filterByMobile: {
    display: {
      md: 'none',
      xs: 'block',
    },
  },
  clearAllButton: {
    typography: 'body2',
    textDecoration: 'underline',
    marginTop: { md: '1.5rem', xs: 0 },
    marginLeft: 0,
    color: 'text.primary',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  totalResults: {
    marginTop: '1.5rem',
    marginRight: { md: 0, xs: '1rem' },
    typography: 'body2',
    color: 'grey.600',
    whiteSpace: 'nowrap',
  },
  plpGrid: {
    width: {
      xs: '100%',
      md: '80%',
    },
  },
  cardRoot: {
    padding: '0.625rem',
    backgroundColor: 'transparent',
    width: {
      xs: '95%',
      md: 230,
    },
    height: {
      xs: 350,
      md: 400,
    },
    boxShadow: {
      xs: themeBackGround.boxShadowCard,
      md: 'none',
    },
    cursor: 'pointer',
    '&:hover': {
      boxShadow: themeBackGround.boxShadowCard,
      '.quick-view': {
        opacity: 1,
      },
    },
  },
  cardRootListView: {
    padding: '0.625rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: themeBackGround.boxShadowCard,
      '.quick-view': {
        opacity: 1,
      },
    },
  },
  quickView: {
    display: {
      xs: 'none',
      md: 'block',
    },
    opacity: 0,
    width: '100%',
    marginTop: '1 rem',
    padding: '10px 20px',
    borderRadius: '50px',
    backgroundColor: theme?.palette.primary.main,
    border: `1px solid ${theme?.palette.primary.main}`,
    fontSize: '16px',
    color: theme?.palette.common.white,
    fontWeight: '600',
    '&:hover': {
      backgroundColor: themeBackGround.default,
      border: `1px solid ${themeBackGround.default}`,
    },
  },
  cardInfo: {
    height: {
      xs: 130,
      md: 180,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: {
      xs: '10px',
      md: '15px',
    },
  },
}
