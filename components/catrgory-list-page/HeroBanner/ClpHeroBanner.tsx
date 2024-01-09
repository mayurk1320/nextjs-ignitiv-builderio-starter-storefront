import React from 'react'

import { useMediaQuery, useTheme, styled } from '@mui/material'

import { KiboImage } from '@/components/common'

export interface ItemProps {
  clpHeroBannerProps: ClpHeroBannerProps
}
interface ClpHeroBannerProps {
  imageUrl: string
  mobileImageUrl: string
  imageAlt: string
  title: string
  subtitle: string
}

const MainStyle = styled('div')({
  display: 'flex',
  color: 'grey.700',
  maxHeight: '350px',
})

const IgnHeroBanner = ({ clpHeroBannerProps }: ItemProps) => {
  const kiboTheme = useTheme()
  const mobileView = useMediaQuery(kiboTheme.breakpoints.down('sm'))

  const { title, subtitle, imageUrl, mobileImageUrl, imageAlt } = clpHeroBannerProps || {}

  return (
    <>
      {clpHeroBannerProps && (
        <MainStyle>
          <p>I am Souvik</p>
          <p>{title}</p>
          <p>{subtitle}</p>
          <KiboImage
            src={mobileView ? mobileImageUrl : imageUrl}
            alt={imageAlt || 'category-image'}
            sizes="(max-width: 1200px) 92vw, 1152px"
            loading="eager"
            layout="fill"
            objectFit="cover"
            priority
          />
        </MainStyle>
      )}
    </>
  )
}

export default IgnHeroBanner
