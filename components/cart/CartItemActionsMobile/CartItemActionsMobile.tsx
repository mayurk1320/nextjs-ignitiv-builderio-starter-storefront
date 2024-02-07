import React, { MouseEvent, useState } from 'react'

import MoreVert from '@mui/icons-material/MoreVert'
import { IconButton, Menu, MenuItem, CardActions, Button } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { CartItemActionsMobileStyle } from './CartItemActionsMobile.styles'

import type { CrCartItem as CartItemType, Maybe } from '@/lib/gql/types'

interface CartItemActionsMobileProps {
  cartItem: CartItemType
  actions: string[]
  onMenuItemSelection: (option: string) => void
  onCartItemDelete: (cartItemId: string) => void
  width?: string
}

const styles = {
  menuItemStyle: {
    typography: {
      sm: 'body2',
    },
    padding: '0.5rem 1rem',
  },
}

const CartItemActionsMobile = (props: CartItemActionsMobileProps) => {
  const { actions, onMenuItemSelection, width, cartItem, onCartItemDelete } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { t } = useTranslation('common')
  const handleDelete = (cartItemId: string) => onCartItemDelete(cartItemId)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = (option: string) => {
    onMenuItemSelection(option)
    handleClose()
  }

  return (
    <>
      <IconButton
        sx={{ p: 0.5 }}
        aria-label={t('more')}
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: width ?? '12.063rem',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div style={{ alignItems: 'center' }}>
          <Button
            sx={{
              display: { xs: 'block', sm: 'block', md: 'none' },
              p: 0.5,
              textDecoration: 'underline',
            }}
            aria-label="item-delete"
            name="item-delete"
            onClick={() => handleDelete(cartItem?.id as string)}
          >
            {t('remove-cart')}
          </Button>
        </div>
        <Button
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            p: 0.5,
            textDecoration: 'underline',
          }}
          aria-label="add-wishlist"
          name="add-wishlist"
        >
          {t('add-wishlist')}
        </Button>
        {actions.map((action) => (
          <MenuItem
            key={action}
            onClick={() => handleMenuItemClick(action)}
            sx={CartItemActionsMobileStyle.menuItemStyle}
          >
            {t('edit')}
            {action}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default CartItemActionsMobile
