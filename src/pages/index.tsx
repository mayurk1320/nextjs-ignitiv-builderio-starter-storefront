import { BuilderComponent, builder, Builder } from '@builder.io/react'
import getConfig from 'next/config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import CmsHomePageProducts from '../../cms/components/CmsHomePageProducts/CmsHomePageProducts'
import CmsShopByCategory from '../../cms/components/CmsShopByCategory/CmsShopByCategory'
import {
  KiboHeroCarousel,
  ContentTile,
  SmallBanner,
  IgnHeroBanner,
  Deals,
  SaleBanner,
} from '@/components/home'
import { ProductRecommendations } from '@/components/product'
import { CategorySlider } from '@/components/product-listing'
import getCategoryTree from '@/lib/api/operations/get-category-tree'
import type { CategoryTreeResponse, NextPageWithLayout } from '@/lib/types'

import type { GetStaticPropsContext } from 'next'

interface HomePageProps {
  page: any
}

const { publicRuntimeConfig } = getConfig()
const apiKey = publicRuntimeConfig?.builderIO?.apiKey

builder.init(apiKey)

Builder.registerComponent(SaleBanner, {
  name: 'SaleBanner',
  inputs: [
    {
      name: 'saleBannerProps',
      type: 'object',
      defaultValue: {
        title: 'Save up to 50% + Free Shipping',
        subtitle: 'Valid through 10/31.',
        callToAction: { title: 'Shop Now', url: '/category/deals' },
        backgroundColor: '#A12E87',
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subtitle',
          type: 'string',
        },
        {
          name: 'callToAction',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
        {
          name: 'backgroundColor',
          type: 'string',
        },
      ],
    },
  ],
})

Builder.registerComponent(SmallBanner, {
  name: 'SmallBanner',
  inputs: [
    {
      name: 'smallBannerProps',
      type: 'array',
      defaultValue: [
        {
          title: 'New collection available now',
          imageUrl:
            'https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running.png',
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
          bgColor: '#FBFAF8',
          callToAction: { title: 'Check More', url: '/' },
        },
      ],
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'imageUrl',
          type: 'string',
        },
        {
          name: 'mobileImageUrl',
          type: 'string',
        },
        {
          name: 'imageAlt',
          type: 'string',
        },
        {
          name: 'btnColor',
          type: 'string',
        },
        {
          name: 'bgColor',
          type: 'string',
        },
        {
          name: 'callToAction',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})

Builder.registerComponent(IgnHeroBanner, {
  name: 'IgnHeroBanner',
  inputs: [
    {
      name: 'heroBannerProps',
      type: 'object',
      defaultValue: {
        imageUrl: 'https://cdn-sb.mozu.com/26507-m1/cms/files/655bb09f-e5f2-4027-8cf6-76d0363172d1',
        mobileImageUrl:
          'https://cdn-sb.mozu.com/26507-m1/cms/files/655bb09f-e5f2-4027-8cf6-76d0363172d1',
        imageAlt: 'image Alt text',
        title: 'Make your house into a home',
        subtitle: 'Explore the latest deals.',
        callToAction: { title: 'Shop Now', url: '/category/deals' },
      },
      subFields: [
        {
          name: 'imageUrl',
          type: 'file',
        },
        {
          name: 'mobileImageUrl',
          type: 'file',
        },
        {
          name: 'imageAlt',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subtitle',
          type: 'string',
        },
        {
          name: 'callToAction',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})

Builder.registerComponent(KiboHeroCarousel, {
  name: 'KiboHeroCarousel',
  inputs: [
    {
      name: 'carouselItem',
      type: 'list',
      defaultValue: [
        {
          imageUrl:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/655bb09f-e5f2-4027-8cf6-76d0363172d1',
          mobileImageUrl:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/655bb09f-e5f2-4027-8cf6-76d0363172d1',
          imageAlt: 'image Alt text',
          title: 'Check Off Your List Event',
          subtitle: 'Save up to 50%',
          description: 'Shop early to get your holiday gifts on time.',
          buttonText: 'Shop Holiday Items on Sale',
          buttonLink: 'https://',
        },
        {
          imageUrl:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/7b763015-5d76-4c3c-a5fd-6a14a476b56c',
          mobileImageUrl:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/7b763015-5d76-4c3c-a5fd-6a14a476b56c',
          imageAlt: 'image Alt text',
          title: 'Save upto 70%',
          subtitle: 'Check Off Your List Event',
          description: 'Shop early to get your holiday gifts on time.',
          buttonText: 'Shop Holiday Items on Sale',
          contentPosition: 'right',
          buttonLink: 'https://',
        },
      ],
      subFields: [
        {
          name: 'imageUrl',
          type: 'file',
        },
        {
          name: 'mobileImageUrl',
          type: 'file',
        },
        {
          name: 'imageAlt',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'subtitle',
          type: 'string',
        },
        {
          name: 'description',
          type: 'string',
        },
        {
          name: 'buttonText',
          type: 'string',
        },
        {
          name: 'buttonLink',
          type: 'string',
        },
      ],
    },
  ],
})

Builder.registerComponent(ProductRecommendations, {
  name: 'ProductRecommendations',
  inputs: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'productCodes',
      type: 'KiboCommerceProductsList',
    },
  ],
})

Builder.registerComponent(CmsHomePageProducts, {
  name: 'CmsHomePageProducts',
  inputs: [
    {
      name: 'recentlyViewed',
      type: 'object',
      defaultValue: {
        title: 'Recently Viewed and Related',
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'productCodes',
          type: 'KiboCommerceProductsList',
        },
      ],
    },
    {
      name: 'topSellings',
      type: 'object',
      defaultValue: {
        title: 'Top-selling products',
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'productCodes',
          type: 'KiboCommerceProductsList',
        },
      ],
    },
  ],
})

Builder.registerComponent(CategorySlider, {
  name: 'CategorySlider',
  inputs: [
    {
      name: 'categoryCodes',
      type: 'KiboCommerceCategoriesList',
    },
  ],
})

Builder.registerComponent(ContentTile, {
  name: 'ContentTile',
  inputs: [
    {
      name: 'largeTileProps',
      type: 'list',
      defaultValue: [
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/beaf1756-46ed-4ff5-bc20-49a2116b620e',
          title: 'Up to 50% off running gear',
          subtitle: 'Save on selected footwear, equipment and more',
          link1: { title: 'top deals', url: '/category/deals' },
          link2: { title: 'club deals', url: '/category/deals' },
          link3: { title: 'footwear deals', url: '/category/deals' },
        },
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/9a4155da-c985-44ef-9ac9-fa9cb3bde811',
          title: 'Up to 50% off Nike gear',
          subtitle: 'Save big on clothing and footwear from Nike',
          link1: { title: 'shop mens', url: '/category/deals' },
          link2: { title: 'shop womens', url: '/category/deals' },
          link3: { title: 'shop kids', url: '/category/deals' },
        },
      ],
      subFields: [
        {
          name: 'imgSource',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'link1',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
        {
          name: 'link2',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
        {
          name: 'link3',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'smallTileProps',
      type: 'list',
      defaultValue: [
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/8f3ec3c0-d72b-4369-bf0b-07f3849ad567',
          title: 'Dress for Any Occasion',
          subtitle: 'Dress your best and shine brighter than the sun',
          tileType: 'small',
          link1: { title: 'mens', url: '/category/deals' },
          link2: { title: 'womens', url: '/category/deals' },
          link3: { title: 'kids', url: '/category/deals' },
        },
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/4b2f2a04-765e-4d74-b83b-2df909cc48a6',
          title: 'Plenty to Play With',
          subtitle: 'Unwind this summer with deals on top gear',
          tileType: 'small',
          link1: { title: 'beach', url: '/category/deals' },
          link2: { title: 'bbq', url: '/category/deals' },
          link3: { title: 'hiking', url: '/category/deals' },
        },
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/d7127fd3-3656-4fea-bff7-47063154459c',
          title: 'Power to a Healthier You',
          subtitle: 'Clothing and gear for strength and cardio',
          tileType: 'small',
          link1: { title: 'strength training', url: '/category/deals' },
          link2: { title: 'cardio workout', url: '/category/deals' },
          link3: { title: 'fitness deals', url: '/category/deals' },
        },
        {
          imgSource:
            'https://cdn-sb.mozu.com/26507-m1/cms/files/ebdbfa1e-a3a1-4035-8aa3-e90f59a9478b',
          title: 'Get Your Golf On',
          subtitle: 'Tee up and bring your A-game',
          tileType: 'small',
          link1: { title: 'golf shirts', url: '/category/deals' },
          link2: { title: 'golf pants', url: '/category/deals' },
          link3: { title: 'golf footwear', url: '/category/deals' },
        },
      ],
      subFields: [
        {
          name: 'imgSource',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'link1',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
        {
          name: 'link2',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
        {
          name: 'link3',
          type: 'object',
          subFields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})

Builder.registerComponent(Deals, {
  name: 'Deals',
  inputs: [
    {
      name: 'header',
      type: 'object',
      defaultValue: {
        title: 'Deals Today',
        subTitle: 'Deals refresh every 24 hrs',
        viewAllLink: '/',
      },
    },
    {
      name: 'dealItems',
      type: 'list',
      defaultValue: [
        {
          imgUrl: 'https://cdn-sb.mozu.com/41843-m1/cms/files/c5bb70b2-ad17-41d5-8802-9901e0c77f40',
          title: "ASIAN-CRETA-12 Navy Men's Sports Running Shoes...",
          itemCode: '100100',
          mfrCode: '67890',
          price: 5.99,
          discountedPrice: 5.0,
        },
        {
          imgUrl: 'https://cdn-sb.mozu.com/41843-m1/cms/files/e215eff9-6b65-44b6-a8f3-59c9923e94c5',
          title: 'Fast Modern 3D light cars for kids Remote control...',
          itemCode: '103100',
          mfrCode: '67890',
          price: 6.07,
          discountedPrice: 6.0,
        },
        {
          imgUrl: 'https://cdn-sb.mozu.com/41843-m1/cms/files/c47d98f9-1d31-4624-8ec3-e29d2c2e1b57',
          title: 'Google Pixel 8 Pro',
          itemCode: '106100',
          mfrCode: '67890',
          price: 850.99,
          discountedPrice: 800.99,
        },
        {
          imgUrl: 'https://cdn-sb.mozu.com/41843-m1/cms/files/7810d672-17b6-453a-b1c9-d325906bc4c3',
          title: 'Syska ST1000 Component Home Theatre System...',
          itemCode: '105100',
          mfrCode: '67890',
          price: 400.79,
          discountedPrice: 350.99,
        },
        {
          imgUrl: 'https://cdn-sb.mozu.com/41843-m1/cms/files/755d2d05-1b41-4366-aa32-68ce5ddf847f',
          title: 'FINGERS USB-Tonic H9 Over Ear Wired With Mic Headphones...',
          itemCode: '405101',
          mfrCode: '67890',
          price: 70.99,
          discountedPrice: 50.99,
        },
      ],
      subFields: [
        {
          name: 'imgUrl',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'itemCode',
          type: 'string',
        },
        {
          name: 'mfrCode',
          type: 'string',
        },
        {
          name: 'price',
          type: 'number',
        },
        {
          name: 'discountedPrice',
          type: 'number',
        },
      ],
    },
  ],
})
Builder.registerComponent(CmsShopByCategory, {
  name: 'CmsShopByCategory',
  inputs: [
    {
      name: 'shopByCategory',
      type: 'object',
      defaultValue: {
        title: 'Shop By Category',
      },
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
      ],
    },
    {
      name: 'categoryCodes',
      type: 'KiboCommerceCategoriesList',
    },
  ],
})

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale } = context
  const { serverRuntimeConfig } = getConfig()
  const categoriesTree: CategoryTreeResponse = await getCategoryTree()

  const page = await builder
    .get(publicRuntimeConfig?.builderIO?.modelKeys?.defaultPage, {
      userAttributes: {
        urlPath: '/',
      },
    })
    .toPromise()

  return {
    props: {
      page: page || null,
      categoriesTree,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: serverRuntimeConfig.revalidate,
  }
}

const Home: NextPageWithLayout<HomePageProps> = (props) => {
  const { page } = props
  return (
    <>
      <BuilderComponent
        model={publicRuntimeConfig?.builderIO?.modelKeys?.defaultPage}
        content={page}
      />
    </>
  )
}

export default Home
