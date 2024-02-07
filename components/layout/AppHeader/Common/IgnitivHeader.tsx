import React, { Dispatch, SetStateAction, useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import {
  Typography,
  Collapse,
  Box,
  AppBar,
  Backdrop,
  Container,
  useMediaQuery,
  useTheme,
  Slide,
  useScrollTrigger,
  styled,
  Toolbar,
} from '@mui/material'
import getConfig from 'next/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import Logo from '@/assets/ignitiv-black.svg'
import { HeaderAction, KiboLogo } from '@/components/common'
import {
  SearchSuggestions,
  MobileHeader,
  StoreFinderIcon,
  AccountIcon,
  CartIcon,
  HamburgerMenu,
  LoginDialog,
  CheckoutHeader,
  NestedDrawer,
} from '@/components/layout'
import { useAuthContext, useHeaderContext, useModalContext } from '@/context'
import { useGetCategoryTree } from '@/hooks'
import type { NavigationLink } from '@/lib/types'

import type { Maybe, PrCategory } from '@/lib/gql/types'

interface KiboHeaderProps {
  navLinks: NavigationLink[]
  categoriesTree: Maybe<PrCategory>[]
  isSticky?: boolean
}

interface HeaderActionAreaProps {
  isHeaderSmall: boolean
  categoriesTree: Maybe<PrCategory>[]
  setIsBackdropOpen: Dispatch<SetStateAction<boolean>>
  onAccountIconClick: () => void
}

interface HideOnScrollProps {
  trigger: boolean
  children: React.ReactElement
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '&.MuiToolbar-root': {
    backgroundColor: 'inherit',
    position: 'relative',
    minHeight: 55,
    display: 'flex',
    borderBottom: '1 solid theme.palette.grey[300]',
    borderTop: '1 solid theme.palette.grey[300]',
    paddingInline: 0,
    whiteSpace: 'nowrap',
    flex: 1,
    color: 'black',
    maxWidth: '100%',
  },
}))

const topHeaderStyles = {
  wrapper: {
    display: 'flex',
    backgroundColor: 'grey.300',
    height: 56,
    justifyContent: 'flex-end',
    zIndex: (theme: any) => theme.zIndex.modal,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}

const headerActionAreaStyles = {
  wrapper: {
    display: 'flex',
    backgroundColor: 'grey.300',
    height: 56,
  },
  container: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  searchSuggestionsWrapper: {
    maxWidth: '65%',
    flex: 1,
    display: { xs: 'none', md: 'inline-flex' },
    alignItems: 'flex-start',
    height: '100%',
    pl: 4,
    pt: 1.3,
  },
  logoWrapper: {
    order: 0,
  },
}

const kiboHeaderStyles = {
  appBarStyles: {
    backgroundColor: 'grey.300',
    zIndex: (theme: any) => theme.zIndex.modal,
    scrollBehavior: 'smooth',
  },
  megaMenuStyles: {
    backgroundColor: 'common.white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'grey.500',
  },
}

const HeaderActionArea = (props: HeaderActionAreaProps) => {
  const { isHeaderSmall, categoriesTree, setIsBackdropOpen, onAccountIconClick } = props
  const { headerState, toggleSearchBar } = useHeaderContext()
  const { isMobileSearchPortalVisible, isSearchBarVisible } = headerState

  const shouldShowSearchIconInSmallHeader = isHeaderSmall && !isSearchBarVisible
  return (
    <Box sx={{ ...headerActionAreaStyles.wrapper }} data-testid="header-action-area">
      <Container
        maxWidth="xl"
        sx={{
          ...topHeaderStyles.container,
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <Box
          position="relative"
          sx={{
            ...headerActionAreaStyles.logoWrapper,
            ...(isHeaderSmall && { top: 0 }),
          }}
        >
          <Link href="/" passHref>
            <KiboLogo logo={Logo} />
          </Link>
        </Box>
        {shouldShowSearchIconInSmallHeader && (
          <Box
            maxWidth="calc(100% - 501px)"
            sx={{ backgroundColor: 'grey.300', marginLeft: '20px' }}
          >
            <StyledToolbar data-testid="bottom-toolbar">
              <Container maxWidth="xl">
                <NestedDrawer categoryTree={categoriesTree} headerSize="small" />
              </Container>
            </StyledToolbar>
          </Box>
        )}
        <Box sx={headerActionAreaStyles.searchSuggestionsWrapper} data-testid="Search-container">
          <SearchSuggestions
            isViewSearchPortal={isMobileSearchPortalVisible}
            onEnterSearch={() => toggleSearchBar(false)}
          />
        </Box>
        <Box display="flex" gap={2}>
          <StoreFinderIcon size={isHeaderSmall ? 'medium' : 'large'} />
          <AccountIcon
            size={isHeaderSmall ? 'medium' : 'large'}
            onAccountIconClick={onAccountIconClick}
          />
          <CartIcon size={isHeaderSmall ? 'medium' : 'large'} />
        </Box>
      </Container>
    </Box>
  )
}

function HideOnScroll(props: HideOnScrollProps) {
  const { trigger, children } = props

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <Box sx={{ ...(trigger && { height: 0 }) }}>{children}</Box>
    </Slide>
  )
}

const IgnitivHeader = (props: KiboHeaderProps) => {
  const { navLinks, categoriesTree: initialCategoryTree, isSticky } = props
  const { data: categoriesTree } = useGetCategoryTree(initialCategoryTree)
  const { headerState, toggleMobileSearchPortal, toggleHamburgerMenu } = useHeaderContext()
  const { isAuthenticated } = useAuthContext()
  const { showModal } = useModalContext()
  const router = useRouter()
  const theme = useTheme()
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'))
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const [isBackdropOpen, setIsBackdropOpen] = useState<boolean>(false)

  const { isHamburgerMenuVisible, isMobileSearchPortalVisible } = headerState
  const isCheckoutPage = router.pathname.includes('checkout')
  const isElementVisible = !isCheckoutPage && mdScreen && !trigger
  const { publicRuntimeConfig } = getConfig()
  const isMultiShipEnabled = publicRuntimeConfig.isMultiShipEnabled

  const handleAccountIconClick = () => {
    isHamburgerMenuVisible && toggleHamburgerMenu()
    if (!isAuthenticated) {
      showModal({ Component: LoginDialog })
    } else {
      router.push('/my-account')
    }
  }

  const getSection = (): React.ReactNode => {
    if (isCheckoutPage) return <CheckoutHeader isMultiShipEnabled={isMultiShipEnabled} />

    if (!mdScreen) return <MobileHeader />

    return (
      <HeaderActionArea
        isHeaderSmall={trigger}
        categoriesTree={categoriesTree}
        setIsBackdropOpen={setIsBackdropOpen}
        onAccountIconClick={handleAccountIconClick}
      />
    )
  }

  return (
    <>
      <AppBar position={isSticky ? 'sticky' : 'static'} sx={kiboHeaderStyles.appBarStyles}>
        <Backdrop open={isBackdropOpen} data-testid="backdrop" />
        <Box
          component={'section'}
          sx={{
            zIndex: (theme) => theme.zIndex.modal,
          }}
        >
          {getSection()}
        </Box>

        <HideOnScroll trigger={trigger}>
          <Box
            component={'section'}
            sx={{
              ...kiboHeaderStyles.megaMenuStyles,
              ...(!isElementVisible && { display: 'none' }),
            }}
            data-testid="mega-menu-container"
          >
            <StyledToolbar data-testid="bottom-toolbar">
              <Container maxWidth="xl">
                <NestedDrawer categoryTree={categoriesTree} headerSize="big" />
              </Container>
            </StyledToolbar>
          </Box>
        </HideOnScroll>

        <Collapse in={isMobileSearchPortalVisible}>
          <Box p={1} height={'55px'} sx={{ display: { xs: 'block', md: 'none' } }}>
            <SearchSuggestions
              isViewSearchPortal={isMobileSearchPortalVisible}
              onEnterSearch={() => toggleMobileSearchPortal()}
            />
          </Box>
        </Collapse>
      </AppBar>

      <HamburgerMenu
        categoryTree={categoriesTree || []}
        isDrawerOpen={isHamburgerMenuVisible}
        setIsDrawerOpen={() => toggleHamburgerMenu()}
        navLinks={navLinks}
        onAccountIconClick={handleAccountIconClick}
        requestAccountIconComponent={undefined}
      />
    </>
  )
}

export default IgnitivHeader
