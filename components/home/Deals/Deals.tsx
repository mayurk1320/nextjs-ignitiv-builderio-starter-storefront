import { useEffect, useState } from 'react'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Button, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'

import { DealsStyles } from './Deals.styles'
import { KiboImage } from '@/components/common'

type DealItem = {
  imgUrl: string
  title: string
  itemCode: string
  mfrCode: string
  price: number
  discountedPrice: number
}

interface DealProps {
  dealItems: DealItem[]
}

const Deals = (props: DealProps) => {
  const { dealItems } = props

  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const xs = useMediaQuery(theme.breakpoints.up('xs'))

  const [deals, setDeals] = useState<any>([])
  const [pageSize, setPageSize] = useState<number>(0)
  const [index, setIndex] = useState<{ start: number; end: number }>({ start: 0, end: 0 })

  useEffect(() => {
    if (xs) setPageSize(1)
    if (sm) setPageSize(2)
    if (md) setPageSize(5)
  }, [md, sm, xs])

  useEffect(() => setIndex({ start: 0, end: pageSize }), [pageSize])
  // useEffect(() => console.log(pageSize, index, dealsDataMock), [pageSize, dealsDataMock, index])

  const handleNavigationClick = (action: string) => {
    const isStartZero = index.start === 0
    const isEndEqualsTotalDeals = index.end === dealItems.length
    if (action == 'left') {
      setIndex({
        start: index.start <= pageSize ? 0 : index.start - pageSize,
        end: index.end <= pageSize ? pageSize : index.end - pageSize,
      })
    } else {
      const start =
        index.start >= dealItems.length - pageSize
          ? dealItems.length - pageSize
          : index.start + pageSize
      setIndex({
        start,
        end: start + pageSize,
      })
    }
  }

  return (
    <Grid container sx={{ marginBottom: '50px' }}>
      <Grid item md={12} sx={DealsStyles.headingSection}>
        <Grid>
          <Typography sx={DealsStyles.heading}>Deals Today</Typography>
          <Typography sx={DealsStyles.subHeading}>Deals refresh every 24 hrs</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'baseline', marginTop: '8px' }}>
          <Typography sx={DealsStyles.viewAllLink}>View All</Typography>
          <Box>
            <IconButton
              onClick={() => handleNavigationClick('left')}
              sx={{ ...DealsStyles.navigationIcon, marginRight: '3px' }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              onClick={() => handleNavigationClick('right')}
              sx={{ ...DealsStyles.navigationIcon, marginLeft: '3px' }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Box sx={DealsStyles.dealsList}>
          {dealItems.slice(index.start, index.end).map((deal: DealItem, index: number) => (
            <Box
              key={deal?.title}
              sx={{
                ...DealsStyles.dealsCard,
                marginLeft: index > 0 ? 2 : 0,
                marginRight: index <= dealItems.length ? 2 : 0,
              }}
            >
              <Typography sx={DealsStyles.saleChip}>SALE</Typography>
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
                <Typography sx={DealsStyles.price}>${deal?.price}</Typography>
                <Typography sx={DealsStyles.discountPrice}>${deal?.discountedPrice}</Typography>
              </Box>

              <Button sx={DealsStyles.addToCartBtn} variant="contained">
                Add to Cart
              </Button>
              <Button sx={DealsStyles.addToWishlist}> Add to Wishlist</Button>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Deals
