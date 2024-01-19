import React from 'react'

import { useMediaQuery, Typography, Box, useTheme, styled } from '@mui/material'

import { KiboImage } from '@/components/common'

export interface ItemProps {
  clpHeroBannerProps: ClpHeroBannerProps
}
interface ClpHeroBannerProps {
  imageUrl: string
  mobileImageUrl: string
  imageAlt: string
  description: string
}

const HeroBannerContainer = styled('div')({
  display: 'flex',
  color: 'grey.700',
  flexDirection: 'column',
  marginBottom: '25px',
})

const ClpHeroBanner = ({ clpHeroBannerProps }: ItemProps) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('sm'))

  const { description, imageUrl, mobileImageUrl, imageAlt } = clpHeroBannerProps || {}

  return (
    <>
      {clpHeroBannerProps && (
        <HeroBannerContainer>
          <Box>
            <KiboImage
              src={mobileView ? mobileImageUrl : imageUrl}
              alt={imageAlt}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
              }}
              width={1200}
              height={150}
            />
          </Box>
          <Box>
            <Typography>{description}&nbsp;</Typography>
          </Box>
        </HeroBannerContainer>
      )}
    </>
  )
}

export default ClpHeroBanner
