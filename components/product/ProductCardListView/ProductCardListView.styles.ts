import theme, { themeBackGround, themeBorder } from '@/styles/theme'
export const ProductCardStyles = {
  main: {
    width: '100%',
    '& a': {
      textDecoration: 'none',
    },
  },
  cardRoot: {
    position: 'relative',
    display: { xs: 'block', sm: 'flex' },
    padding: '0.625rem',
    margin: '0 20px',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    boxShadow: themeBackGround.boxShadowCard,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: themeBackGround.boxShadowSecondary,
      '.quick-view': {
        opacity: 1,
      },
    },
  },
  quickView: {
    opacity: 0,
    width: '100%',
    marginTop: '1 rem',
  },
  cardMedia: {
    width: {
      xs: '100%',
      sm: '25%',
    },
    position: 'relative',
    zIndex: 1,
    mt: 3,
  },
  shopNow: { width: '100%', marginTop: '3.063rem' },
  quickViewButton: {
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
}
