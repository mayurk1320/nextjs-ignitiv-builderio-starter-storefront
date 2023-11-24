import React from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Button, Divider, IconButton, SxProps, Theme, styled } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { uiHelpers } from '@/lib/helpers'
import theme from '@/styles/theme'

import { Maybe, PrCategory } from '@/lib/gql/types'

const drawerWidth = 300

interface NestedDrawerProps {
  categoryTree: Maybe<PrCategory>[]
  sx?: SxProps<Theme>
}

interface RecursiveDrawerProps {
  categories: any
  onClose: any
}

interface LvlTwoDrawerProps {
  title: string
  categoryChildren: Maybe<PrCategory>[]
  categoryCode: string
  seoFriendlyUrl: string
}

const StyledLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  color: theme?.palette.text.primary,
  fontSize: theme?.typography.body1.fontSize,
}))

const LvlTwoDrawer = (props: LvlTwoDrawerProps) => {
  const { title, categoryChildren, categoryCode, seoFriendlyUrl } = props
  const { t } = useTranslation('common')

  const { getCategoryLink } = uiHelpers()

  return (
    <List sx={{ width: '85%' }}>
      <ListItemText>
        <strong>{title}</strong>
      </ListItemText>
      <br />
      <ListItem>
        <StyledLink href={getCategoryLink(categoryCode, seoFriendlyUrl)} passHref>
          {t('shop-all')}
        </StyledLink>
      </ListItem>
      <Divider />
      {categoryChildren?.map((cat) => (
        <>
          <ListItem key={cat?.categoryId}>
            <StyledLink
              href={getCategoryLink(cat?.categoryCode as string, cat?.content?.slug as string)}
              passHref
              data-testid="categoryLink"
            >
              {cat?.content?.name}
            </StyledLink>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  )
}

const CategoryDrawer: React.FC<{ category: any; onClose: () => void }> = ({
  category,
  onClose,
}) => {
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return (
    <>
      <ListItem button onClick={handleToggle}>
        <ListItemText primary={category?.content?.name} />
      </ListItem>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0)', //Transparency so that outer click drawer exit works
          },
          minWidth: drawerWidth,
        }}
      >
        <List sx={{ marginTop: 14, minWidth: drawerWidth }} onClick={handleClose}>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LvlTwoDrawer
              key={category?.categoryCode}
              title={category?.content?.name as string}
              categoryChildren={category?.childrenCategories as PrCategory[]}
              categoryCode={category?.categoryCode as string}
              seoFriendlyUrl={category?.content?.slug as string}
            />
          </ListItem>
          <ListItem>
            <Box width="100%" display="flex" justifyContent="center">
              <IconButton onClick={handleToggle} sx={{ background: theme.palette.primary.main }}>
                <ChevronLeftIcon />
              </IconButton>
            </Box>
          </ListItem>
        </List>
      </Drawer>
      <Divider />
    </>
  )
}

const RecursiveDrawer: React.FC<RecursiveDrawerProps> = ({ categories, onClose }) => {
  return (
    <List sx={{ width: '85%' }}>
      {categories?.childrenCategories?.map((category: any) => (
        <CategoryDrawer key={category?.id} category={category} onClose={onClose} />
      ))}
    </List>
  )
}

const NestedDrawer = (props: NestedDrawerProps) => {
  const { categoryTree = [], sx } = props
  console.log('This is category tree ---> ', categoryTree)
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Box sx={sx}>
      {categoryTree?.map((category) => (
        <>
          <Button onClick={handleToggle} variant="contained" startIcon={<MenuIcon />}>
            <strong>SHOP BY CATEGORY</strong>
          </Button>
          <Drawer anchor="left" open={open} onClose={handleToggle}>
            <List sx={{ ...sx, marginTop: 14, minWidth: drawerWidth }}>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <RecursiveDrawer categories={category} onClose={handleToggle} />
              </ListItem>
              <ListItem>
                <Box width="100%" display="flex" justifyContent="center">
                  <IconButton
                    onClick={handleToggle}
                    sx={{ background: theme.palette.primary.main }}
                  >
                    <ChevronLeftIcon />
                  </IconButton>
                </Box>
              </ListItem>
            </List>
          </Drawer>
        </>
      ))}
    </Box>
  )
}

export default NestedDrawer
