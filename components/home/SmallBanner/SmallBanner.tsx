import React from 'react'

import { useMediaQuery, Typography, Box, useTheme, Button, Grid } from '@mui/material'
import { useRouter } from 'next/router'

import { SmallBannerStyles } from './SmallBanner.styles'
import { KiboImage } from '@/components/common'
export interface ItemProps {
  smallBannerProps: SmallBannerProps[]
}
interface SmallBannerProps {
  title: string
  imageUrl: string
  mobileImageUrl: string
  imageAlt: string
  btnColor: string
  bgColor: string
  callToAction: { title: string; url: string }
}

const SmallBanner = ({ smallBannerProps }: ItemProps) => {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const router = useRouter()

  return (
    <Grid container>
      {smallBannerProps?.map((banner: SmallBannerProps) => (
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          key={banner?.title}
          sx={{ backgroundColor: banner?.bgColor, ...SmallBannerStyles.bannerItem }}
        >
          <Box sx={{ ...SmallBannerStyles.bannerImageContainer }}>
            <KiboImage
              src={md ? banner?.imageUrl : banner?.mobileImageUrl}
              alt={banner?.imageAlt}
              sizes="(max-width: 1200px) 92vw, 1152px"
              loading="eager"
              data-testid="product-image"
              priority
              layout="responsive"
              width={250}
              height={250}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ width: '40%' }}>
            <Typography sx={{ ...SmallBannerStyles.bannerTitle }}>{banner?.title}</Typography>
            <Button
              variant="contained"
              sx={{ ...SmallBannerStyles.bannerBtn }}
              onClick={() => router.push(banner?.callToAction?.url)}
            >
              {banner?.callToAction?.title}
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default SmallBanner
