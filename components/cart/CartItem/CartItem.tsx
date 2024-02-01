import Delete from '@mui/icons-material/Delete'
import { Box, Card, Divider, Button, SxProps, Theme, useMediaQuery, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useTranslation } from 'next-i18next'

import { CartItemStyle } from './CartItem.styles'
import { CartItemActions, CartItemActionsMobile } from '@/components/cart'
import { FulfillmentOptions, Price, ProductItem, QuantitySelector } from '@/components/common'
import { cartGetters, productGetters } from '@/lib/getters'
import { uiHelpers } from '@/lib/helpers'
import type { FulfillmentOption } from '@/lib/types'

import type { CrCartItem as CartItemType, CrProduct, Maybe } from '@/lib/gql/types'

interface CartItemProps {
  cartItem: CartItemType
  maxQuantity: number | undefined
  actions?: Array<string>
  fulfillmentOptions: FulfillmentOption[]
  onQuantityUpdate: (cartItemId: string, quantity: number) => void
  onCartItemDelete: (cartItemId: string) => void
  onCartItemActionSelection: () => void
  onFulfillmentOptionChange: (fulfillmentMethod: string, cartItemId: string) => void
  onProductPickupLocation: (cartItemId: string) => void
}

const CartItem = (props: CartItemProps) => {
  const {
    cartItem,
    maxQuantity,
    actions,
    fulfillmentOptions,
    onQuantityUpdate,
    onCartItemDelete,
    onCartItemActionSelection,
    onFulfillmentOptionChange,
    onProductPickupLocation,
  } = props

  const theme = useTheme()
  const { t } = useTranslation('common')
  const orientationVertical = useMediaQuery(theme.breakpoints.between('xs', 'md'))
  const cartItemQuantity = cartItem?.quantity || 1
  const { getProductLink } = uiHelpers()

  const handleDelete = (cartItemId: string) => onCartItemDelete(cartItemId)
  const handleQuantityUpdate = (quantity: number) =>
    onQuantityUpdate(cartItem?.id as string, quantity)
  const handleActionSelection = () => onCartItemActionSelection()
  const handleFulfillmentOptionChange = (fulfillmentMethod: string, cartItemId: string) =>
    onFulfillmentOptionChange(fulfillmentMethod, cartItemId)
  const handleProductPickupLocation = (cartItemId: string) => onProductPickupLocation(cartItemId)
  const subscriptionDetails = cartGetters.getSubscriptionDetails(cartItem)

  return (
    <>
      <Card sx={CartItemStyle.card} role="group">
        <Box sx={{ position: 'relative' }}>
          <Box sx={CartItemStyle.cartItemContainer}>
            <Box sx={CartItemStyle.subContainer}>
              <ProductItem
                image={productGetters.handleProtocolRelativeUrl(
                  productGetters.getProductImage(cartItem?.product as CrProduct)
                )}
                name={productGetters.getName(cartItem?.product as CrProduct)}
                options={productGetters.getOptions(cartItem?.product as CrProduct)}
                link={getProductLink(cartItem?.product?.productCode as string)}
                subscriptionFrequency={subscriptionDetails as string}
              ></ProductItem>
            </Box>

            <Box sx={CartItemStyle.subContainer}>
              <FulfillmentOptions
                fulfillmentOptions={fulfillmentOptions}
                selected={cartItem?.fulfillmentMethod || ''}
                onFulfillmentOptionChange={(fulfillmentMethod: string) =>
                  handleFulfillmentOptionChange(fulfillmentMethod, cartItem?.id as string)
                }
                onStoreSetOrUpdate={() => handleProductPickupLocation(cartItem?.id as string)} // change store: Open storelocator modal. Should not change global store.
              />
            </Box>
            <Box sx={CartItemStyle.subContainer}>
              <Box sx={{ py: '0.5rem' }}>
                <QuantitySelector
                  quantity={cartItemQuantity}
                  label={t('qty')}
                  maxQuantity={maxQuantity}
                  onIncrease={() => handleQuantityUpdate(cartItemQuantity + 1)}
                  onDecrease={() => handleQuantityUpdate(cartItemQuantity - 1)}
                  onQuantityUpdate={(q) => handleQuantityUpdate(q)}
                />
              </Box>
            </Box>
            <Box sx={CartItemStyle.subContainer}>
              <Box>
                <Price
                  variant="body2"
                  fontWeight="bold"
                  price={t('currency', {
                    val: productGetters
                      .getPrice(cartItem?.product as CrProduct)
                      .regular?.toString(),
                  })}
                  salePrice={
                    productGetters.getPrice(cartItem?.product as CrProduct).special
                      ? t('currency', {
                          val: productGetters.getPrice(cartItem?.product as CrProduct).special,
                        })
                      : undefined
                  }
                />
              </Box>
            </Box>
          </Box>

          <Box sx={CartItemStyle.icon}>
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, alignItems: 'right' }}>
              <CartItemActionsMobile
                cartItem={cartItem}
                actions={actions || []}
                onMenuItemSelection={() => handleActionSelection()}
                onCartItemDelete={() => handleDelete(cartItem?.id as string)}
              />
            </Box>
            <div style={{ alignItems: 'center' }}>
              <Button
                sx={{
                  display: { xs: 'none', sm: 'none', md: 'block' },
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
                display: { xs: 'none', sm: 'none', md: 'block' },
                p: 0.5,
                textDecoration: 'underline',
              }}
              aria-label="add-wishlist"
              name="add-wishlist"
            >
              {t('add-wishlist')}
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default CartItem
