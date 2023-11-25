import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import SaleBanner from './SaleBanner'

export default {
  title: 'home/SaleBanner',
  component: SaleBanner,
} as ComponentMeta<typeof SaleBanner>

const Template: ComponentStory<typeof SaleBanner> = (args) => <SaleBanner {...args} />

export const Common = Template.bind({})

const saleBannerItems = {
  title: 'Save up to 50% + Free Shipping',
  subtitle: 'Valid through 10/31.',
  callToAction: { title: 'Shop Now', url: '/category/deals' },
  backgroundColor: '#A12E87',
}

Common.args = {
  saleBannerProps: saleBannerItems,
}
