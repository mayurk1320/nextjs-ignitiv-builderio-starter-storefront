import React from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box, IconButton, NoSsr, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { CartItemActionsMobile } from '@/components/cart'
import { AllAccountActions } from '@/lib/constants'
import { actions, hasPermission } from '@/lib/helpers'

interface AccountHierarchyActionsProps {
  mdScreen?: boolean
  onBuyersClick: () => void
  onQuotesClick: () => void
  onAdd: () => void
  onView: () => void
  onEdit: () => void
}

const AccountHierarchyActions = (props: AccountHierarchyActionsProps) => {
  const { mdScreen, onAdd, onView, onEdit, onBuyersClick, onQuotesClick } = props
  const { t } = useTranslation('common')

  const onMenuItemSelection = (option: string) => {
    const menuItemSelectionMap = {
      [AllAccountActions.ADD_ACCOUNT]: onAdd,
      [AllAccountActions.VIEW_ACCOUNT]: onView,
      [AllAccountActions.EDIT_ACCOUNT]: onEdit,
      [AllAccountActions.VIEW_BUYER_ACCOUNT]: onBuyersClick,
      [AllAccountActions.VIEW_QUOTES]: onQuotesClick,
    }

    const selectedAction = menuItemSelectionMap[option]
    if (selectedAction) {
      selectedAction()
    }
  }
  const actionsList = () => {
    const permissionArray = []
    if (hasPermission(actions.VIEW_USERS)) {
      permissionArray.push(AllAccountActions.VIEW_BUYER_ACCOUNT)
    }
    if (hasPermission(actions.VIEW_CHILD_ACCOUNT_QUOTES)) {
      permissionArray.push(AllAccountActions.VIEW_QUOTES)
    }
    if (hasPermission(actions.CREATE_ACCOUNT)) {
      permissionArray.push(AllAccountActions.ADD_ACCOUNT)
    }
    if (hasPermission(actions.EDIT_ACCOUNT)) {
      permissionArray.push(AllAccountActions.EDIT_ACCOUNT)
    }
    if (hasPermission(actions.VIEW_ACCOUNT)) {
      permissionArray.push(AllAccountActions.VIEW_ACCOUNT)
    }
    return permissionArray
  }

  return mdScreen ? (
    <Box
      data-testid="account-actions"
      display={'flex'}
      gap={2}
      alignItems={'center'}
      onClick={(e) => e.stopPropagation()}
    >
      <NoSsr>
        {hasPermission(actions.VIEW_USERS) && (
          <Typography
            variant="caption"
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={onBuyersClick}
          >
            {t('buyers')}
          </Typography>
        )}
      </NoSsr>
      <NoSsr>
        {hasPermission(actions.VIEW_CHILD_ACCOUNT_QUOTES) && (
          <Typography
            variant="caption"
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={onQuotesClick}
          >
            {t('quotes')}
          </Typography>
        )}
      </NoSsr>
      <Box display={'flex'} gap={2}>
        <NoSsr>
          {hasPermission(actions.VIEW_ACCOUNT) && (
            <IconButton
              size="small"
              sx={{ p: 0.5 }}
              aria-label="item-view"
              name="item-view"
              onClick={onView}
            >
              <VisibilityIcon />
            </IconButton>
          )}
        </NoSsr>
        <NoSsr>
          {hasPermission(actions.CREATE_ACCOUNT) && (
            <IconButton
              size="small"
              sx={{ p: 0.5 }}
              aria-label="item-add"
              name="item-add"
              onClick={onAdd}
            >
              <AddCircleIcon />
            </IconButton>
          )}
          {hasPermission(actions.EDIT_ACCOUNT) && (
            <IconButton
              size="small"
              sx={{ p: 0.5 }}
              aria-label="item-edit"
              name="item-edit"
              onClick={onEdit}
            >
              <EditIcon />
            </IconButton>
          )}
        </NoSsr>
      </Box>
    </Box>
  ) : (
    <CartItemActionsMobile
      data-testid="mobile-account-actions"
      actions={actionsList()}
      width="15.5rem"
      onMenuItemSelection={onMenuItemSelection}
      cartItem={{
        __typename: undefined,
        _get: undefined,
        _root: undefined,
        adjustedLineItemSubtotal: undefined,
        auditInfo: undefined,
        autoAddDiscountId: undefined,
        childItemIds: undefined,
        data: undefined,
        discountTotal: undefined,
        discountedTotal: undefined,
        extendedTotal: undefined,
        feeTotal: undefined,
        fulfillmentLocationCode: undefined,
        fulfillmentMethod: undefined,
        handlingAmount: undefined,
        id: undefined,
        inventoryTags: undefined,
        isAssemblyRequired: undefined,
        isRecurring: undefined,
        isTaxable: undefined,
        itemTaxTotal: undefined,
        lineId: undefined,
        lineItemAdjustment: undefined,
        localeCode: undefined,
        parentItemId: undefined,
        product: undefined,
        productDiscount: undefined,
        productDiscounts: undefined,
        purchaseLocation: undefined,
        quantity: 0,
        shippingAmountBeforeDiscountsAndAdjustments: undefined,
        shippingDiscounts: undefined,
        shippingTaxTotal: undefined,
        shippingTotal: undefined,
        subscription: undefined,
        subtotal: undefined,
        taxData: undefined,
        taxableTotal: undefined,
        total: undefined,
        totalWithWeightedShippingAndHandling: undefined,
        totalWithoutWeightedShippingAndHandling: undefined,
        unitPrice: undefined,
        weightedOrderAdjustment: undefined,
        weightedOrderDiscount: undefined,
        weightedOrderDuty: undefined,
        weightedOrderHandlingAdjustment: undefined,
        weightedOrderHandlingFee: undefined,
        weightedOrderHandlingFeeDiscount: undefined,
        weightedOrderHandlingFeeTax: undefined,
        weightedOrderShipping: undefined,
        weightedOrderShippingDiscount: undefined,
        weightedOrderShippingManualAdjustment: undefined,
        weightedOrderShippingTax: undefined,
        weightedOrderTax: undefined,
      }}
      onCartItemDelete={function (cartItemId: string): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
}

export default AccountHierarchyActions
