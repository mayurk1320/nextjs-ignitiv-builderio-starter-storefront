export const ShopByCategoryStyle = {
  categoryLink: {
    textDecoration: 'none',
    color: 'inherit',
    textAlign: 'center',
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
  gridContainer: {
    display: { md: 'flex', xs: 'block' },
    marginTop: { xs: '0px', md: '0px' },
    marginBottom: { xs: '15px', md: '15px' },
    padding: '0',
    margin: '0 -16px',
    width: '100%',
  },
  categoryItem: {
    background: '#dddddd',
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
  container: {
    maxWidth: '1536px',
    padding: '0 !important',
  },
  carouselContainer: {
    position: 'relative',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#000000',
    width: '15px',
    letterSpacing: '0.5px',
    color: '#000000',
  },
  prevButton: {
    float: 'right',
    marginRight: '15px',
  },
  nextButton: {
    float: 'right',
    marginRight: '5px',
  },
  disabledButton: {
    color: '#dddddd',
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
    marginTop: '8px',
    fontSize: '16px',
  },
  navigationIconConainer: {
    float: 'right',
  },
}
