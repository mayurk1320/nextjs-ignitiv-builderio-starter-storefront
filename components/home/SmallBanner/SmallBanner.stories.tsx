import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import SmallBanner from './SmallBanner'

export default {
  title: 'home/SmallBanner',
  component: SmallBanner,
} as ComponentMeta<typeof SmallBanner>

const Template: ComponentStory<typeof SmallBanner> = (args) => <SmallBanner {...args} />

export const Common = Template.bind({})

const smallBannerItems = [
  {
    title: 'New collection available now',
    imageUrl:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/18ac3091-5615-4b51-b833-f3d8f909b35c/vomero-16-road-running-shoes-h0KMSg.png',
    mobileImageUrl: 'https://sportsclick.my/wp-content/uploads/2023/01/DC3728-014-2.jpg',
    imageAlt: 'Nike',
    btnColor: '#7B68EE',
    bgColor: '#E4D00A',
    callToAction: { title: 'Check More', url: '/' },
  },
  {
    title: 'Redefining the modern design',
    imageUrl: 'https://www.assamcane.com/wp-content/uploads/2023/01/Untitled-1-copy.jpg',
    mobileImageUrl:
      'https://static.connect2india.com/c2icd/company_resources/6009493/images/products/product-universal-furniture-bamboo-cane-sofa-chair.jpg',
    imageAlt: 'Bamboo Sofa',
    btnColor: '#7B68EE',
    bgColor: '#FFFFFF',
    callToAction: { title: 'Check More', url: '/' },
  },
]

Common.args = {
  smallBannerProps: smallBannerItems,
}
