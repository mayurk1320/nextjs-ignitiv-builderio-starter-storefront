export const ShopByCategoryStyle = {
  categoryLink: {
    textDecoration: 'none',
    color: 'inherit',
    textAlign: 'center',
    paddingLeft: '15px',
    paddingRight: '15px',
  },

  categoryImage: {
    maxWidth: '100%',
    padding: '5px',
  },

  categoryText: {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
  },

  categoryItem: {
    background: '#dddddd',
    padding: '25px',
    borderRadius: '5px',
    marginBottom: '20px',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
  },
  categoryItemMain: {
    padding: '0 !important',
    margin: '0 1% !important',
    width: '23% !important',
    flexBasis: '23% !important',
  },
  container: {
    maxWidth: '1536px',
    padding: '0 !important',
  },
}
