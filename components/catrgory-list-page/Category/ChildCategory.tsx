import * as React from 'react'
import { useState, useEffect } from 'react'

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {
  Box,
  Container,
  Grid,
  Link,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { ChildCategoryStyle } from './ChildCategory.styles'
import { categorySearchGetters, productGetters } from '@/lib/getters'
import { uiHelpers } from '@/lib/helpers'

interface Item {
  title: string
  categoryCode: string
  content: {
    name: string
    categoryImages: {
      imageUrl: string
      alt: string
    }
  }
}

interface ChildCategoryProp {
  title: string
  categoryCode: string
  content: {
    name: string
    categoryImages: {
      imageUrl: string
      alt: string
    }
  }
  childrenCategories: Item[]
}

interface ClpPageProps {
  childCategory: ChildCategoryProp
}

const CmsCLPPageCategory = (props: ClpPageProps) => {
  const kiboTheme = useTheme()
  const { childCategory } = props
  const { getCategoryLink } = uiHelpers()
  const categories = childCategory?.childrenCategories || []
  const [items, setItems] = useState(categories)
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery(kiboTheme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(kiboTheme.breakpoints.down('md'))
  const itemsPerPage = isMobile ? 24 : isTablet ? 24 : 24
  const isPrevDisabled = currentIndex === 0
  const isNextDisabled = currentIndex + itemsPerPage >= items.length

  const router = useRouter()

  const { t } = useTranslation('common')

  const handleItemClick = (item: Item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((selectedItem) => selectedItem !== item)
        : [...prevSelected, item]
    )
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsPerPage : prevIndex - itemsPerPage
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex + itemsPerPage >= items.length ? 0 : nextIndex + itemsPerPage
    )
  }

  useEffect(() => {
    setItems(categories)
  }, [categories])

  return (
    <Container maxWidth={'xl'} sx={ChildCategoryStyle.container}>
      <Box>
        <Box sx={ChildCategoryStyle.navigationContainer}>
          <Typography variant="h1" sx={ChildCategoryStyle.categoryName}>
            {categorySearchGetters.getName(childCategory) as string}
          </Typography>
          <Button
            sx={ChildCategoryStyle.shopAllButton}
            onClick={() => router.push('/category/' + childCategory?.categoryCode)}
          >
            {t('shop-all')} {categorySearchGetters.getName(childCategory) as string}
          </Button>
        </Box>
        <Box>
          <Grid container spacing={4} sx={ChildCategoryStyle.gridContainer}>
            {items.slice(currentIndex, currentIndex + itemsPerPage).map((item: any) => (
              <Grid
                item
                md={3}
                sm={4}
                xs={12}
                onClick={() => handleItemClick(item)}
                sx={ChildCategoryStyle.categoryMainItem}
                key={categorySearchGetters.getCategoryCode(item) as string}
              >
                <Box sx={ChildCategoryStyle.categoryItem}>
                  <Link
                    href={getCategoryLink(
                      categorySearchGetters.getCategoryCode(item) as string as string
                    )}
                    sx={ChildCategoryStyle.categoryLink}
                  >
                    <Box sx={ChildCategoryStyle.categoryItemWrapper}>
                      <Box sx={ChildCategoryStyle.categoryImageWrapper}>
                        <Box
                          component="img"
                          src={productGetters.handleProtocolRelativeUrl(
                            categorySearchGetters.getCoverImage(item)
                          )}
                          sx={ChildCategoryStyle.categoryImage}
                        />
                      </Box>
                      <Box sx={ChildCategoryStyle.categoryText}>
                        {categorySearchGetters.getName(item) as string}
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={ChildCategoryStyle.navigationIconContainer}>
          <IconButton
            onClick={handleNextClick}
            sx={isNextDisabled ? ChildCategoryStyle.disabledButton : ChildCategoryStyle.prevButton}
            disabled={isNextDisabled}
          >
            <NavigateNextIcon />
          </IconButton>
          <IconButton
            onClick={handlePrevClick}
            sx={isPrevDisabled ? ChildCategoryStyle.disabledButton : ChildCategoryStyle.nextButton}
            disabled={isPrevDisabled}
          >
            <NavigateBeforeIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default CmsCLPPageCategory
