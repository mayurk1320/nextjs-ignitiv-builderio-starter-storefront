import React from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
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
  headerSize: string
  sx?: SxProps<Theme>
}

interface LvlTwoDrawerProps {
  title: string
  categoryChildren: Maybe<PrCategory>[]
  categoryCode: string
  seoFriendlyUrl: string
  handleToggle: () => void
}

interface MegaMenuComponentProps {
  categories: any
  handleToggle: () => void
}

interface MegaMenuListProps {
  data: any[]
  handleTabClick: (
    categoryId: string,
    childrenCategories: any[],
    categoryCode: string,
    seoFriendlyUrl: any
  ) => void
  handleToggle: () => void
}

const StyledLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  color: theme?.palette.text.primary,
  fontSize: theme?.typography.body1.fontSize,
  '&:hover': {
    color: theme?.palette.primary.main,
  },
}))

const StyledLinkHead = styled(Link)(({ theme }: { theme: Theme }) => ({
  color: theme?.palette.primary.main,
  fontSize: theme?.typography.h3.fontSize,
}))

const LvlTwoDrawer = (props: LvlTwoDrawerProps) => {
  const { title, categoryChildren, categoryCode, seoFriendlyUrl, handleToggle } = props
  const { t } = useTranslation('common')

  const { getCategoryLink } = uiHelpers()

  return (
    <List>
      <ListItemText>
        <strong>{title}</strong>
      </ListItemText>
      <ListItem sx={{ paddingLeft: 0 }}>
        <StyledLink
          href={getCategoryLink(categoryCode, seoFriendlyUrl)}
          passHref
          onClick={handleToggle}
        >
          {t('shop-all')}
        </StyledLink>
      </ListItem>
      {categoryChildren?.map((cat) => (
        <>
          <ListItem key={cat?.categoryId} sx={{ paddingLeft: 0, paddingTop: 0 }}>
            <StyledLink
              href={getCategoryLink(cat?.categoryCode as string, cat?.content?.slug as string)}
              passHref
              data-testid="categoryLink"
              onClick={handleToggle}
            >
              {cat?.content?.name}
            </StyledLink>
          </ListItem>
        </>
      ))}
    </List>
  )
}

const MegaMenuList: React.FC<MegaMenuListProps> = ({ data, handleTabClick, handleToggle }) => {
  const { getCategoryLink } = uiHelpers()
  const [keyDependency, setKeyDependency] = React.useState<string>('')

  const handleClick = (
    categoryId: string,
    childrenCategories: any[],
    categoryCode: string,
    seoFriendlyUrl: any
  ) => {
    if (categoryId !== keyDependency) {
      setKeyDependency(categoryId)
      if (childrenCategories && childrenCategories.length > 0) {
        handleTabClick(categoryId, childrenCategories, categoryCode, seoFriendlyUrl)
      } else {
        handleTabClick(categoryId, [], categoryCode, seoFriendlyUrl)
        handleToggle()
      }
    } else {
      setKeyDependency('')
      handleTabClick(categoryId, [], categoryCode, seoFriendlyUrl)
    }
  }

  const listItemStyle = {
    '.MuiTypography-root': {
      fontSize: '1rem',
      fontWeight: '550',
      cursor: 'pointer',
      transition: 'font-size 200ms ease-in-out, color 200ms ease-in-out',
    },
    '&:hover .MuiTypography-root': {
      fontSize: '1.05rem',
      color: theme.palette.primary.main,
    },
    '.ChevronRightIcon-root': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
      opacity: 0,
      transition: 'opacity 300ms ease-in-out',
    },
    '&:hover .ChevronRightIcon-root': {
      opacity: 1,
    },
    [`&[data-categoryid="${keyDependency}"] .MuiTypography-root`]: {
      fontSize: '1.05rem',
      color: theme.palette.primary.main,
    },
    [`&[data-categoryid="${keyDependency}"] .ChevronRightIcon-root`]: {
      opacity: 1,
    },
  }

  return (
    <List>
      {data.map((category: any) => (
        <div key={category.categoryId}>
          <ListItem
            onClick={() =>
              handleClick(
                category.categoryId,
                category.childrenCategories,
                category?.categoryCode,
                category?.content?.slug
              )
            }
            sx={{
              ...listItemStyle,
              [`&[data-categoryid="${category.categoryId}"]`]: listItemStyle,
            }}
            data-categoryid={category.categoryId}
          >
            {category.childrenCategories && category.childrenCategories.length > 0 ? (
              <>
                <ListItemText primary={category?.content?.name} />

                <ChevronRightIcon
                  className="ChevronRightIcon-root"
                  sx={{
                    ...listItemStyle,
                    [`&[data-categoryid="${category.categoryId}"]`]: listItemStyle,
                  }}
                  data-categoryid={category.categoryId}
                />
              </>
            ) : (
              <Link
                href={getCategoryLink(
                  category?.categoryCode as string,
                  category?.content?.slug as string
                )}
                passHref
                data-testid="categoryLink"
              >
                <ListItemText primary={category?.content?.name} />
              </Link>
            )}
          </ListItem>
        </div>
      ))}
    </List>
  )
}

const MegaMenuComponent: React.FC<MegaMenuComponentProps> = ({ categories, handleToggle }) => {
  const { t } = useTranslation('common')
  const { getCategoryLink } = uiHelpers()

  const [listTwoData, setListTwoData] = React.useState<any[]>([])
  const [categoryCode, setCategoryCode] = React.useState('')
  const [seoFriendlyUrl, setSeoFriendlyUrl] = React.useState<any>()

  const handleTabClick = (
    categoryId: string,
    childrenCategories: any[],
    categoryCode: string,
    seoFriendlyUrl: any
  ) => {
    // State update:
    setCategoryCode(categoryCode)
    setSeoFriendlyUrl(seoFriendlyUrl)
    setListTwoData(childrenCategories)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <Box>
        <List sx={{ width: '240px' }}>
          <MegaMenuList
            data={categories}
            handleTabClick={handleTabClick}
            handleToggle={handleToggle}
          />
        </List>
      </Box>

      {listTwoData && listTwoData.length > 0 && (
        <>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              marginLeft: '9px',
              marginRight: '9px',
              boxShadow: '5px 0px 10px 0.7px rgb(0 0 0 / 12%)',
            }}
          />
          <Box sx={{ paddingLeft: '30px', paddingTop: '24px' }}>
            <Box>
              <StyledLinkHead
                href={getCategoryLink(categoryCode, seoFriendlyUrl)}
                passHref
                onClick={handleToggle}
              >
                <strong>{t('shop-all')}</strong>
              </StyledLinkHead>
            </Box>
            <Divider sx={{ margin: '1.12rem 0' }} />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 5,
              }}
            >
              {listTwoData.map((child: any) => (
                <LvlTwoDrawer
                  key={child?.categoryCode}
                  title={child?.content?.name as string}
                  categoryChildren={child?.childrenCategories as PrCategory[]}
                  categoryCode={child?.categoryCode as string}
                  seoFriendlyUrl={child?.content?.slug as string}
                  handleToggle={handleToggle}
                />
              ))}
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}

const NestedDrawer = (props: NestedDrawerProps) => {
  const { categoryTree = [], headerSize, sx } = props
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Box sx={sx}>
      {categoryTree?.map((category) => (
        <>
          <Button
            onClick={handleToggle}
            size={headerSize === 'big' ? 'medium' : 'small'}
            variant="contained"
            startIcon={<MenuIcon />}
          >
            <strong>SHOP ALL</strong>
          </Button>
          <Drawer anchor="left" open={open} onClose={handleToggle}>
            <List
              sx={{
                ...sx,
                marginTop: headerSize === 'small' ? 5 : 14,
                minWidth: drawerWidth,
                width: 'auto',
                height: '100%',
              }}
            >
              <ListItem sx={{ justifyContent: 'center', height: '90%', alignItems: 'flex-start' }}>
                <MegaMenuComponent
                  categories={category?.childrenCategories}
                  handleToggle={handleToggle}
                />
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
