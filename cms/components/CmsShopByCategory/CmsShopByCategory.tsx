import * as React from 'react'

import { Box, Container, Grid, Link } from '@mui/material'

import { ProductRecommendations } from '../../../components/product'
import { ProductRecommendationsProps } from '../../../components/product/ProductRecommendations/ProductRecommendations'
import { ShopByCategoryStyle } from './CmsShopByCategory.styles'
//import { CategoryFacet } from '../../../components/product-listing'
///import { CategoryFacetData } from '../../../components/product-listing/CategoryFacet/CategoryFacet'

/*interface CmsHomePageCategoryProps {
  categoryData: CategoryFacetData
}*/
const styles = {
  gridContainer: {
    display: { md: 'flex', xs: 'block' },
    marginTop: { xs: '1rem', md: '3rem' },
    marginBottom: { xs: '3rem', md: '3rem' },
    padding: '0',
    marginLeft: '0 !important',
    width: '100% !important',
  },
}
const CmsHomePageCategory = (props: any) => {
  console.log('this is category data')
  return (
    <Container maxWidth={'xl'} sx={ShopByCategoryStyle.container}>
      <Grid sx={{ ...styles.gridContainer }} container columnSpacing={{ md: 12 }}>
        <Grid item sm={3} md={3} sx={ShopByCategoryStyle.categoryItemMain}>
          <Box sx={ShopByCategoryStyle.categoryItem}>
            <Link href="/category/SLT" sx={ShopByCategoryStyle.categoryLink}>
              <Box
                component="img"
                sx={ShopByCategoryStyle.categoryImage}
                alt="Sealants"
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn-sb.mozu.com%2F41843-64120%2Fcms%2F64120%2Ffiles%2Fe5089a6d-f3fb-43ad-904f-32a5bb46d80e&w=340&q=100"
              />
              <Box sx={ShopByCategoryStyle.categoryText}>Sealants</Box>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} md={3} sx={ShopByCategoryStyle.categoryItemMain}>
          <Box sx={ShopByCategoryStyle.categoryItem}>
            <Link href="/category/CTS" sx={ShopByCategoryStyle.categoryLink}>
              <Box
                component="img"
                sx={ShopByCategoryStyle.categoryImage}
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn-sb.mozu.com%2F41843-64120%2Fcms%2F64120%2Ffiles%2Fbc5b3b15-5499-4e76-b5cc-c896eaaefb00&w=340&q=100"
                alt="Coating"
              />
              <Box sx={ShopByCategoryStyle.categoryText}>Coating</Box>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} md={3} sx={ShopByCategoryStyle.categoryItemMain}>
          <Box sx={ShopByCategoryStyle.categoryItem}>
            <Link href="/category/WPF" sx={ShopByCategoryStyle.categoryLink}>
              <Box
                component="img"
                sx={ShopByCategoryStyle.categoryImage}
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn-sb.mozu.com%2F41843-64120%2Fcms%2F64120%2Ffiles%2F60ef8556-7949-4733-9568-69c6f4416e8f&w=340&q=100"
                alt="WaterProofing"
              />
              <Box sx={ShopByCategoryStyle.categoryText}>WaterProofing</Box>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} md={3} sx={ShopByCategoryStyle.categoryItemMain}>
          <Box sx={ShopByCategoryStyle.categoryItem}>
            <Link href="/category/TA" sx={ShopByCategoryStyle.categoryLink}>
              <Box
                component="img"
                sx={ShopByCategoryStyle.categoryImage}
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn-sb.mozu.com%2F41843-64120%2Fcms%2F64120%2Ffiles%2F698f42db-dea8-40d5-b6b1-4fcd053e669f&w=340&q=100"
                alt="Tools & Accessories"
              />
              <Box sx={ShopByCategoryStyle.categoryText}>Tools & Accessories</Box>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} md={3} sx={ShopByCategoryStyle.categoryItemMain}>
          <Box sx={ShopByCategoryStyle.categoryItem}>
            <Link href="/category/SLT" sx={ShopByCategoryStyle.categoryLink}>
              <Box
                component="img"
                sx={ShopByCategoryStyle.categoryImage}
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn-sb.mozu.com%2F41843-64120%2Fcms%2F64120%2Ffiles%2Fe5089a6d-f3fb-43ad-904f-32a5bb46d80e&w=340&q=100"
                alt="Sealants"
              />
              <Box sx={ShopByCategoryStyle.categoryText}>Sealants</Box>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} md={3} sx={ShopByCategoryStyle.categoryItemMain}>
          <Box sx={ShopByCategoryStyle.categoryItem}>
            <Link href="/category/CTS" sx={ShopByCategoryStyle.categoryLink}>
              <Box
                component="img"
                sx={ShopByCategoryStyle.categoryImage}
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn-sb.mozu.com%2F41843-64120%2Fcms%2F64120%2Ffiles%2Fbc5b3b15-5499-4e76-b5cc-c896eaaefb00&w=340&q=100"
                alt="Coating"
              />
              <Box sx={ShopByCategoryStyle.categoryText}>Coating</Box>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} md={3} sx={ShopByCategoryStyle.categoryItemMain}>
          <Box sx={ShopByCategoryStyle.categoryItem}>
            <Link href="/category/WPF" sx={ShopByCategoryStyle.categoryLink}>
              <Box
                component="img"
                sx={ShopByCategoryStyle.categoryImage}
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn-sb.mozu.com%2F41843-64120%2Fcms%2F64120%2Ffiles%2F60ef8556-7949-4733-9568-69c6f4416e8f&w=340&q=100"
                alt="WaterProofing"
              />
              <Box sx={ShopByCategoryStyle.categoryText}>WaterProofing</Box>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} md={3} sx={ShopByCategoryStyle.categoryItemMain}>
          <Box sx={ShopByCategoryStyle.categoryItem}>
            <Link href="/category/TA" sx={ShopByCategoryStyle.categoryLink}>
              <Box
                component="img"
                sx={ShopByCategoryStyle.categoryImage}
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn-sb.mozu.com%2F41843-64120%2Fcms%2F64120%2Ffiles%2F698f42db-dea8-40d5-b6b1-4fcd053e669f&w=340&q=100"
                alt="Tools & Accessories"
              />
              <Box sx={ShopByCategoryStyle.categoryText}>Tools & Accessories</Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CmsHomePageCategory
