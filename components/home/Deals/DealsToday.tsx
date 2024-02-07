import { useEffect, useState } from 'react'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Button, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { DealsStyles } from './Deals.styles'
import { KiboImage, Price } from '@/components/common'
import { useGetProducts } from '@/hooks'
import { productGetters } from '@/lib/getters'

import { Product } from '@/lib/gql/types'

interface DealsTodayProps {
  title: string
  subTitle: string
  productCodes: Array<string>
  viewAllLink: string
}

const DealsToday = (props: DealsTodayProps) => {
  const { title, subTitle, productCodes, viewAllLink } = props

  const { data: productSearchResult } = useGetProducts(productCodes)
  const products = productSearchResult?.items as Product[]

  const router = useRouter()
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const xs = useMediaQuery(theme.breakpoints.up('xs'))

  const { t } = useTranslation('common')
  const [pageSize, setPageSize] = useState<number>(0)
  const [index, setIndex] = useState<{ start: number; end: number }>({ start: 0, end: 0 })

  useEffect(() => {
    if (xs) setPageSize(1)
    if (sm) setPageSize(3)
    if (md) setPageSize(5)
  }, [md, sm, xs])

  useEffect(() => setIndex({ start: 0, end: pageSize }), [pageSize])

  const handleNavigationClick = (action: string) => {
    if (action == 'left') {
      setIndex({
        start: index.start <= pageSize ? 0 : index.start - pageSize,
        end: index.end <= pageSize ? pageSize : index.end - pageSize,
      })
    } else {
      const start =
        index.start >= productCodes.length - pageSize
          ? productCodes.length - pageSize
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
          <Typography sx={DealsStyles.heading}>{title}</Typography>
          <Typography sx={DealsStyles.subHeading}>{subTitle}</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'baseline', marginTop: '8px' }}>
          <Typography sx={DealsStyles.viewAllLink} onClick={() => router.push(viewAllLink)}>
            View All
          </Typography>
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
        <Grid justifyContent={'space-between'} container gap={1}>
          {products?.slice(index.start, index.end).map((product) => (
            <Grid
              item
              xs={12}
              sm={3.8}
              md={2.3}
              key={product?.productCode}
              sx={{
                ...DealsStyles.dealsCard,
                width: '100%',
              }}
            >
              <Typography sx={DealsStyles.saleChip}>SALE</Typography>
              <KiboImage
                style={{ margin: '10px auto', objectFit: 'contain' }}
                src={`https:${productGetters.getCoverImage(product)}`}
                width={200}
                height={200}
                alt={productGetters.getCoverImageAlt(product)}
              />
              <Typography sx={{ padding: '5px 0' }}>{productGetters.getName(product)}</Typography>
              <Typography sx={{ padding: '5px 0 0' }}>Item#: {product?.productCode}</Typography>

              <Box sx={{ display: 'flex', margin: 'auto' }}>
                <Price
                  price={t<string>('currency', {
                    val: productGetters.getPrice(product).regular,
                  })}
                  {...(productGetters.getPrice(product).special && {
                    salePrice: t<string>('currency', {
                      val: productGetters.getPrice(product).special,
                    }),
                  })}
                />
              </Box>

              <Button
                sx={DealsStyles.addToCartBtn}
                onClick={() => router.push('/product/' + product?.productCode)}
                variant="contained"
              >
                {t('view-product')}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DealsToday
