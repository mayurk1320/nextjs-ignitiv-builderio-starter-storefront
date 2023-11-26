import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Grid,
  Link,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material'
import { ShopByCategoryStyle } from './CmsShopByCategory.styles'
import { cmsShopByCategoryMock } from '__mocks__/stories'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const jsonData = cmsShopByCategoryMock

export interface Item {
  link: string
  imageUrl: string
  imageAlt: string
  categoryName: string
}
export interface ShopByCategoryProp {
  title: string
}

const CmsHomePageCategory = (props: ShopByCategoryProp) => {
  const kiboTheme = useTheme()
  const [items, setItems] = useState(jsonData)
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery(kiboTheme.breakpoints.down('md'))
  const itemsPerPage = isMobile ? 1 : 8

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
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + itemsPerPage
    )
  }

  useEffect(() => {
    setItems(jsonData)
  }, [])

  const isPrevDisabled = currentIndex === 0
  const isNextDisabled = currentIndex + itemsPerPage >= items.length

  return (
    <Container maxWidth={'xl'} sx={ShopByCategoryStyle.container}>
      <Typography variant="h2" gutterBottom>
        {props?.title}
      </Typography>
      <Box sx={ShopByCategoryStyle.navigationContainer}>
        <Box sx={ShopByCategoryStyle.navigationIconConainer}>
          <IconButton
            onClick={handlePrevClick}
            sx={isPrevDisabled ? ShopByCategoryStyle.disabledButton : {}}
            disabled={isPrevDisabled}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            onClick={handleNextClick}
            sx={isNextDisabled ? ShopByCategoryStyle.disabledButton : {}}
            disabled={isNextDisabled}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
        <Box sx={ShopByCategoryStyle.viewAllText}>View All</Box>
      </Box>
      <Grid container spacing={4} sx={ShopByCategoryStyle.gridContainer}>
        {items.slice(currentIndex, currentIndex + itemsPerPage).map((item: any) => (
          <Grid item xs={12} sm={4} md={3} onClick={() => handleItemClick(item)}>
            <Box sx={ShopByCategoryStyle.categoryItem}>
              <Link href={item.link} sx={ShopByCategoryStyle.categoryLink}>
                <Box
                  component="img"
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  sx={ShopByCategoryStyle.categoryImage}
                />
                <Box sx={ShopByCategoryStyle.categoryText}>{item.categoryName}</Box>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CmsHomePageCategory
