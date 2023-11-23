import { Box, Button, Card, Grid, Typography } from '@mui/material'

import { dealsDataMock } from '@/__mocks__/stories/dealsDataMock'
import { KiboImage } from '@/components/common'

const Deals = () => {
  return (
    <Grid container sx={{ marginBottom: '50px' }}>
      <Grid
        item
        md={12}
        sx={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between' }}
      >
        <Grid>
          <Typography sx={{ fontSize: '36px', opacity: 0.8 }}>Deals Today</Typography>
          <Typography sx={{ fontSize: '16px', opacity: 0.7 }}>
            Deals refresh every 24 hrs
          </Typography>
        </Grid>
        <Grid>View All</Grid>
      </Grid>
      <Grid item md={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {dealsDataMock.map((deal, index) => (
            <Box key={deal?.title}>
              <Card
                sx={{
                  position: 'relative',
                  marginLeft: index > 0 ? 2 : 0,
                  marginRight: index <= dealsDataMock.length ? 2 : 0,
                  padding: '20px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  maxWidth: '250px',
                  backgroundColor: '#FBFAF8',
                }}
              >
                {/* <Box sx={{marginTop: '-40px', position: 'absolute', top: '10px'}}> */}
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '80px',
                    backgroundColor: '#FF2400',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    width: 'fit-content',
                    padding: '3px 20px',
                    borderRadius: '16px',
                    margin: 'auto',
                  }}
                >
                  SALE
                </Typography>
                {/* </Box> */}
                <KiboImage
                  style={{ margin: '10px auto', objectFit: 'contain' }}
                  src={deal?.imgUrl}
                  width={200}
                  height={200}
                  alt={deal?.title}
                />
                <Typography sx={{ padding: '5px 0' }}>{deal?.title}</Typography>
                <Typography sx={{ padding: '5px 0 0' }}>Item#: {deal?.itemCode}</Typography>
                <Typography sx={{ padding: '5px 0' }}>Mfr#: {deal?.mfrCode}</Typography>
                <Box sx={{ display: 'flex', margin: 'auto' }}>
                  <Typography sx={{ padding: '5px 0 0', textDecoration: 'line-through' }}>
                    ${deal?.price}
                  </Typography>
                  <Typography sx={{ padding: '5px 0', marginLeft: 2, fontWeight: 900 }}>
                    ${deal?.discountedPrice}
                  </Typography>
                </Box>
                <Button
                  sx={{
                    fontWeight: 600,
                    backgroundColor: '#7B68EE',
                    maxWidth: '150px',
                    margin: '15px auto 0',
                    padding: '3px 16px',
                    borderRadius: '6px',
                  }}
                  variant="contained"
                >
                  Add to Cart
                </Button>
                <Button
                  sx={{
                    fontWeight: 600,
                    color: '#2B2B2B',
                    marginTop: 1,
                    textDecoration: 'underline',
                  }}
                >
                  {' '}
                  Add to Wishlist
                </Button>
              </Card>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Deals
