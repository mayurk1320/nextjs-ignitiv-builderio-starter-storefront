import React, { useState, useRef } from 'react'

import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import Clear from '@mui/icons-material/Clear'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Replay from '@mui/icons-material/Replay'
import ZoomIn from '@mui/icons-material/ZoomIn'
import ZoomOut from '@mui/icons-material/ZoomOut'
import { IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useTranslation } from 'next-i18next'
import ReactImageZoom from 'react-image-zoom'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import { KiboImage } from '@/components/common'
import { productGetters } from '@/lib/getters'
import { swipeDetect } from '@/lib/helpers'
import DefaultImage from '@/public/product_placeholder.svg'

import type { ProductImage } from '@/lib/gql/types'

interface ImageGalleryProps {
  images: ProductImage[]
  title: string
  isZoomed?: boolean
  thumbnailDisplayCount?: number
  placeholderImageUrl?: string
}

const NumberOfPxToScroll = 136
const ThumbnailDimensionInPx = 119

const styles = {
  dots: {
    cursor: 'pointer',
    height: '10px',
    width: '10px',
    margin: '0 0.5rem',
    borderRadius: '50%',
    display: 'inline-block',
    transition: 'backgroundColor 0.6s ease',
  },
}

const ImageGallery = (props: ImageGalleryProps) => {
  const {
    images,
    title,
    isZoomed = false,
    thumbnailDisplayCount = 4,
    placeholderImageUrl = DefaultImage,
  } = props

  const { t } = useTranslation('common')

  const [selectedImage, setSelectedImage] = useState({
    selectedIndex: 0,
  })

  // handle if vertical slider arrow should be visible or not
  const [showArrow, setArrowVisibility] = useState({
    left: false,
    right: images?.length > thumbnailDisplayCount,
  })

  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  // Mobile: handle touch swipe
  const handleSwipe = () => {
    const gestureZone = document.getElementById('gestureZone')
    if (gestureZone) {
      swipeDetect(gestureZone, (dir: string) => {
        if (dir === 'left' && selectedImage.selectedIndex !== images?.length - 1) {
          setSelectedImage({ selectedIndex: selectedImage.selectedIndex + 1 })
        } else if (dir === 'right' && selectedImage.selectedIndex > 0) {
          setSelectedImage({ selectedIndex: selectedImage.selectedIndex - 1 })
        }
      })
    }
  }

  const isScrollAtRight = (element?: HTMLElement | null) => {
    if (element) {
      return element.scrollWidth - (element.scrollLeft + element.clientWidth) < NumberOfPxToScroll
    }
  }

  // Desktop: handle vertical slider scrolling
  const handleHorizontalSlider = (isDirectionLeft: boolean) => {
    const scrollableDiv = scrollContainerRef.current

    scrollableDiv?.scrollBy({
      left: isDirectionLeft ? -NumberOfPxToScroll : NumberOfPxToScroll,
      behavior: 'smooth',
    })

    setArrowVisibility(
      isDirectionLeft
        ? {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            left: scrollableDiv!.scrollLeft > NumberOfPxToScroll,
            right: true,
          }
        : {
            left: true,
            right: !isScrollAtRight(scrollableDiv),
          }
    )
  }

  const maxHeight = thumbnailDisplayCount * ThumbnailDimensionInPx + thumbnailDisplayCount * 12 + 60

  return (
    <Box
      id="gestureZone"
      component={'div'}
      onTouchStartCapture={handleSwipe}
      data-testid="gestureZone"
    >
      {/* Title section */}
      <Box
        display={isZoomed ? 'flex' : 'none'}
        justifyContent="space-between"
        alignItems={'center'}
        mb={5}
      >
        <Typography variant="h1" fontWeight="bold">
          {title}
        </Typography>
        <Clear color="action" />
      </Box>

      {/* Gallary Section start */}
      <Stack
        direction="row"
        spacing={{ xs: 0, md: images?.length ? 2 : 0 }}
        maxHeight={maxHeight}
        display={'block'}
      >
        {/* Selected Image secton start */}
        {images?.length > 1 && (
          <Box display={isZoomed ? 'flex' : 'none'} alignItems="center">
            <IconButton
              aria-label="previous"
              disabled={selectedImage.selectedIndex < 1}
              onClick={() => setSelectedImage({ selectedIndex: selectedImage.selectedIndex - 1 })}
            >
              <ArrowBackIos />
            </IconButton>
          </Box>
        )}
        <Box
          position="relative"
          sx={{
            border: { xs: 'none', md: '1px solid #ccc' },
            width: { xs: '100%', md: '97%' },
            height: { xs: '40vh', md: 450 },
          }}
          display="flex"
          flexDirection={'row'}
          alignItems={'center'}
        >
          <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <Box
                  justifyContent="flex-end"
                  width="100%"
                  sx={{
                    display: {
                      xs: 'none',
                      md: isZoomed ? 'flex' : 'none',
                    },
                  }}
                >
                  <IconButton aria-label="zoom in" onClick={() => zoomIn()}>
                    <ZoomIn />
                  </IconButton>
                  <IconButton aria-label="zoom out" onClick={() => zoomOut()}>
                    <ZoomOut />
                  </IconButton>
                  <IconButton aria-label="reset" onClick={() => resetTransform()}>
                    <Replay />
                  </IconButton>
                </Box>
                <TransformComponent
                  wrapperStyle={{
                    display: 'grid !important',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  contentStyle={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    margin: '0 100px',
                  }}
                >
                  <Box
                    width="100%"
                    display="block"
                    flexDirection="row"
                    flexWrap="wrap"
                    alignContent="center"
                    justifyContent="space-between"
                    position="relative"
                  >
                    <ReactImageZoom
                      img={
                        images?.length
                          ? productGetters.handleProtocolRelativeUrl(
                              images[selectedImage.selectedIndex]?.imageUrl as string
                            )
                          : placeholderImageUrl
                      }
                      alt={
                        images?.length
                          ? (images[selectedImage.selectedIndex]?.altText as string)
                          : 'placeholder-image'
                      }
                      width={500}
                      height={450}
                      zoomWidth={710}
                      zoomPosition="original"
                    />
                  </Box>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </Box>
        {images?.length > 1 && (
          <Box display={isZoomed ? 'flex' : 'none'} alignItems="center">
            <IconButton
              aria-label="next"
              disabled={selectedImage.selectedIndex == images?.length - 1}
              onClick={() => setSelectedImage({ selectedIndex: selectedImage.selectedIndex + 1 })}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>
        )}
        {/* Selected Image secton end */}

        {/* Vertical slider secton start */}
        <Box
          width="100%"
          minWidth={ThumbnailDimensionInPx}
          sx={{
            display: {
              xs: 'none',
              md: images?.length ? 'flex' : 'none',
            },
          }}
        >
          <Stack spacing={1} direction="row">
            {showArrow.left && (
              <Box textAlign={'center'}>
                <IconButton
                  aria-label="left"
                  style={{ margin: '60% 0' }}
                  onClick={() => handleHorizontalSlider(true)}
                  size="large"
                >
                  <KeyboardArrowLeft fontSize="large" />
                </IconButton>
              </Box>
            )}

            <Stack
              display="-webkit-box"
              spacing={1.5}
              role="tablist"
              className="scrolling-div"
              ref={scrollContainerRef}
              sx={{
                maxHeight: maxHeight,
                width: '100%',
                overflowY: 'auto',
                '::-webkit-scrollbar': { width: '0px' },
              }}
            >
              {images?.map((image, i) => {
                return (
                  <Box
                    key={image?.imageUrl}
                    component="div"
                    width={ThumbnailDimensionInPx}
                    minHeight={ThumbnailDimensionInPx}
                    position="relative"
                    marginRight={'12px !important'}
                    marginTop={'12px !important'}
                    sx={{
                      borderWidth: i === selectedImage.selectedIndex ? 3 : 1,
                      borderStyle: 'solid',
                      borderColor: 'grey.600',
                      cursor: 'pointer',
                    }}
                    aria-label={image?.altText || ''}
                    aria-selected={i === selectedImage.selectedIndex}
                    onClick={() => setSelectedImage({ selectedIndex: i })}
                  >
                    <KiboImage
                      src={
                        productGetters.handleProtocolRelativeUrl(image?.imageUrl as string) ||
                        placeholderImageUrl
                      }
                      alt={(image?.altText as string) || t('product-image-alt')}
                      layout="fill"
                      objectFit="contain"
                      errorimage={placeholderImageUrl}
                    />
                  </Box>
                )
              })}
            </Stack>

            {showArrow.right && (
              <Box textAlign={'center'}>
                <IconButton
                  style={{ margin: '60% 0' }}
                  aria-label="right"
                  size="large"
                  onClick={() => handleHorizontalSlider(false)}
                >
                  <KeyboardArrowRight fontSize="large" />
                </IconButton>
              </Box>
            )}
          </Stack>
        </Box>
        {/* Vertical slider secton end */}
      </Stack>
      {/* Gallary Section start */}

      {/* Mobile: show dots for mobile view */}
      <Box
        pt={2}
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
          justifyContent: 'center',
        }}
      >
        {images?.map((_, i) => (
          <Box
            key={i}
            sx={{
              ...styles.dots,
              backgroundColor: i === selectedImage.selectedIndex ? 'text.primary' : 'grey.500',
            }}
            onClick={() => setSelectedImage({ selectedIndex: i })}
          ></Box>
        ))}
      </Box>

      <Box
        sx={{
          display: {
            xs: isZoomed ? 'flex' : 'none',
            md: 'none',
          },
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '60%',
        }}
      >
        <Box sx={{ backgroundColor: 'text.primary', color: 'common.white', padding: '5% 10%' }}>
          <Typography variant="body1">{t('pinch-image-to-zoom')}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ImageGallery
