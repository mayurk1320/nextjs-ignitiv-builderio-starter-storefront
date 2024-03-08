import React, { MouseEvent } from 'react'

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import StarRounded from '@mui/icons-material/StarRounded'
import { Card, Typography, Rating, CardMedia, Box, Stack, Skeleton, Button } from '@mui/material'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { KiboImage, Price } from '@/components/common'
import { PLPStyles } from '@/components/page-templates/ProductListingTemplate/ProductListingTemplate.styles'
import { usePriceRangeFormatter } from '@/hooks'
import DefaultImage from '@/public/product_placeholder.svg'

import type { Product, ProductPriceRange } from '@/lib/gql/types'

export interface ProductCardProps {
  title?: string
  link: string
  imageUrl?: string
  placeholderImageUrl?: string
  imageAltText?: string
  price?: string
  salePrice?: string
  priceRange?: ProductPriceRange
  productCode?: string
  rating?: number
  imageHeight?: number
  imageLayout?: string
  isInWishlist?: boolean
  isInCart?: boolean
  isLoading?: boolean
  isShopNow?: boolean
  isShowWishlistIcon?: boolean
  product?: Product
  showQuickViewButton?: boolean
  showProuductRating?: boolean
  variationProductCode?: any
  onAddOrRemoveWishlistItem?: () => void
  onClickQuickViewModal?: () => void
  onClickAddToCart?: (payload: any) => void
}

const ProductCardSkeleton = () => {
  return (
    <Stack spacing={1} sx={PLPStyles.cardRoot} data-testid="product-card-skeleton">
      <Skeleton variant="rectangular" height={150} />
      <Skeleton variant="rectangular" height={20} />
      <Skeleton variant="rectangular" width={60} height={20} />
      <Skeleton variant="rectangular" width={95} height={20} />
    </Stack>
  )
}

const ProductCard = (props: ProductCardProps) => {
  const {
    price,
    salePrice,
    priceRange,
    title,
    link,
    imageUrl,
    placeholderImageUrl = DefaultImage,
    rating = 0,
    imageHeight = 140,
    imageAltText = 'product-image-alt',
    isLoading = false,
    isShopNow = false,
    isInWishlist = false,
    isShowWishlistIcon = true,
    onAddOrRemoveWishlistItem,
    showQuickViewButton = false,
    showProuductRating = true,
    onClickQuickViewModal,
  } = props

  const productPriceRange = usePriceRangeFormatter(priceRange as ProductPriceRange)

  const { t } = useTranslation('common')

  const handleAddOrRemoveWishlistItem = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    onAddOrRemoveWishlistItem && onAddOrRemoveWishlistItem()
  }
  const handleOpenProductQuickViewModal = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    onClickQuickViewModal && onClickQuickViewModal()
  }

  const truncate = (input: string | undefined) => {
    if (input === undefined) {
      return input
    }

    return input.length > 40 ? `${input.substring(0, 40)}...` : input
  }

  if (isLoading) return <ProductCardSkeleton />
  else
    return (
      <Box>
        <Link href={link} passHref data-testid="product-card-link">
          <Box>
            <Card sx={PLPStyles.cardRoot} data-testid="product-card">
              {isShowWishlistIcon && (
                <Box textAlign={'right'} width="100%" onClick={handleAddOrRemoveWishlistItem}>
                  {isInWishlist ? (
                    <FavoriteRoundedIcon sx={{ color: 'red.900' }} />
                  ) : (
                    <FavoriteBorderRoundedIcon sx={{ color: 'grey.600' }} />
                  )}
                </Box>
              )}
              <CardMedia
                sx={{
                  width: '100%',
                  height: imageHeight,
                  position: 'relative',
                }}
              >
                <Box sx={{ zIndex: 1 }}>
                  <KiboImage
                    src={imageUrl || placeholderImageUrl}
                    alt={imageUrl ? imageAltText : 'no-image-alt'}
                    layout="fill"
                    objectFit="contain"
                    data-testid="product-image"
                    errorimage={placeholderImageUrl}
                  />
                </Box>
              </CardMedia>
              <Box sx={PLPStyles.cardInfo} flexDirection="column" m={2} mt={1}>
                <Typography variant="body1" gutterBottom color="text.primary">
                  {truncate(title)}
                </Typography>
                <Price
                  price={price}
                  salePrice={salePrice}
                  priceRange={productPriceRange}
                  variant="body1"
                />
                {showProuductRating && (
                  <Rating
                    name="read-only"
                    value={rating}
                    precision={0.5}
                    readOnly
                    size="small"
                    icon={<StarRounded color="primary" data-testid="filled-rating" />}
                    emptyIcon={<StarRounded data-testid="empty-rating" />}
                    data-testid="product-rating"
                  />
                )}
                {showQuickViewButton && (
                  <Button
                    className="quick-view"
                    sx={PLPStyles.quickView}
                    onClick={handleOpenProductQuickViewModal}
                  >
                    {t('quick-view')}
                  </Button>
                )}
              </Box>
            </Card>
          </Box>
        </Link>
        <Box>
          {isShopNow && (
            <Link href={link} passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: '100%', marginTop: '3.063rem' }}
              >
                {t('shop-now')}
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    )
}

export default ProductCard
