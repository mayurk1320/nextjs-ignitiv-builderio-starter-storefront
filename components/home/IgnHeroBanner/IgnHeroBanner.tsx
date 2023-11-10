import React from 'react'

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import {
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  Theme,
  styled,
  CardMedia,
} from '@mui/material'
import Link from 'next/link'

import { heroBannerStyles } from './IgnHeroBanner.style'
import { KiboImage } from '@/components/common'

export interface ItemProps {
  heroBannerProps: HeroBannerProps
}
interface HeroBannerProps {
  imageUrl: string
  mobileImageUrl: string
  imageAlt: string
  title: string
  subtitle: string
  callToAction: { title: string; url: string }
}

const MainStyle = styled('div')({
  display: 'flex',
  color: 'grey.700',
  minHeight: '300px',
})

const StyledLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  color: theme?.palette.common.white,
}))

const IgnHeroBanner = ({ heroBannerProps }: ItemProps) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('sm'))

  const { title, subtitle, callToAction, imageUrl, mobileImageUrl, imageAlt } =
    heroBannerProps || {}

  return (
    <>
      {heroBannerProps && (
        <MainStyle>
          <Card sx={heroBannerStyles.contentStyle}>
            <CardMedia
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'end', md: 'center' },
                alignItems: 'center',
              }}
            >
              <KiboImage
                src={mobileView ? mobileImageUrl : imageUrl}
                alt={imageAlt || 'carousel-image'}
                sizes="(max-width: 1200px) 92vw, 1152px"
                loading="eager"
                layout="fill"
                objectFit="cover"
                data-testid="product-image"
                priority
              />
              <CardContent
                sx={mobileView ? heroBannerStyles.cardStyleMobile : heroBannerStyles.cardStyle}
              >
                <Typography
                  sx={mobileView ? heroBannerStyles.titleStyleMobile : heroBannerStyles.titleStyle}
                >
                  {title} &nbsp;
                </Typography>
                <Typography
                  sx={
                    mobileView
                      ? heroBannerStyles.subtitleStyleMobile
                      : heroBannerStyles.subtitleStyle
                  }
                >
                  {subtitle}&nbsp;
                </Typography>
                <Box display="inline-flex" alignItems="center" marginTop="20px">
                  <ArrowCircleRightIcon sx={{ color: '#AA59DC' }} />
                  <Typography variant="h5" data-testid="callToAction" marginLeft="7px">
                    <StyledLink href={callToAction?.url || ''} passHref>
                      {callToAction?.title}
                    </StyledLink>
                  </Typography>
                </Box>
              </CardContent>
            </CardMedia>
          </Card>
        </MainStyle>
      )}
    </>
  )
}

export default IgnHeroBanner
