import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'

import theme, { themeBackGround, themeBorder, grey } from '@/styles/theme'

export const B2CMyAccountStyle = {
  accordion: {
    ':before': {
      backgroundColor: 'transparent',
    },
    boxShadow: 0,
    borderRadius: 0,
  },

  accordionDetails: {
    pt: 0,
    p: { md: 0 },
  },
  myAccountChildren: {
    paddingLeft: { md: 0, xs: '1rem' },
    paddingRight: { md: 0, xs: '1rem' },
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
  },
  accordionSummary: {
    padding: { md: 0 },
  },
  //   expandedIcon: {
  //     color: 'text.primary',
  //   },
  orderHistory: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    alignItems: 'center',
  },
  accountCircle: {
    fontSize: {
      md: '2.7rem',
      xs: '3.3rem',
    },
  },
  backButton: {
    typography: 'body2',
    textDecoration: 'none',
    color: 'text.primary',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0.5rem',
    cursor: 'pointer',
  },
  divider: {
    height: '1.188rem',
    borderColor: 'transparent',
  },

  menuBarStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  menuBarContainerStyle: {
    borderRight: '1px solid black',
    backgroundColor: 'transparent',
  },

  menuButtons: {
    border: 'none',
    background: 'transparent',
    paddingLeft: { md: '50px', xs: '1rem' },
    paddingRight: { md: '50px', xs: '1rem' },
    color: 'black',
    marginBottom: '10px',
    '&:hover': {
      background: 'transparent',
      border: 'none',
      color: theme?.palette?.primary?.main,
    },
  },
  menuButtonSelected: {
    border: 'none',
    background: 'transparent',
    paddingLeft: { md: '50px', xs: '1rem' },
    paddingRight: { md: '50px', xs: '1rem' },
    color: theme?.palette?.primary?.main,
    marginBottom: '10px',
    '&:hover': {
      background: 'transparent',
      border: 'none',
    },
  },
  b2cDataSection: {
    padding: '30px',
  },
  b2cMyAccountContainer: {
    // backgroundColor: theme?.palette.grey[300],
  },
}
