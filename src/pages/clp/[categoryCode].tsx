import { BuilderComponent, builder, Builder } from '@builder.io/react'
import getConfig from 'next/config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { ClpHeroBanner } from '@/components/catrgory-list-page'
import { IgnHeroBanner } from '@/components/home'
import getCategoryTree from '@/lib/api/operations/get-category-tree'
import type { CategoryTreeResponse } from '@/lib/types'

import type { GetServerSidePropsContext } from 'next'

const { publicRuntimeConfig } = getConfig()
const apiKey = publicRuntimeConfig?.builderIO?.apiKey

builder.init(apiKey)

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { locale } = context

  // const pathnameArr = context.params?.pagename
  const pageUrl = context.resolvedUrl
  console.log('context', pageUrl, context.query.categoryCode)
  // let pagename
  // if (Array.isArray(pathnameArr) && pathnameArr?.length > 1) {
  //   pagename = pathnameArr.join('/')
  // } else {
  //   pagename = pathnameArr
  // }
  // console.log('pagename', pagename, pathnameArr)

  const categoriesTree: CategoryTreeResponse = await getCategoryTree()

  const page = await builder
    .get(publicRuntimeConfig?.builderIO?.modelKeys?.defaultPage, {
      userAttributes: {
        urlPath: `/${pageUrl}`,
      },
    })
    .toPromise()

  return {
    props: {
      page: page || null,
      categoriesTree,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

Builder.registerComponent(ClpHeroBanner, {
  name: 'ClpHeroBanner',
  inputs: [
    {
      name: 'clpHeroBannerProps',
      type: 'object',
      defaultValue: [
        {
          title: 'Parent Category Name',
          subtitle: 'Catagory description',
          imageUrl:
            'https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running.png',
          mobileImageUrl: 'https://sportsclick.my/wp-content/uploads/2023/01/DC3728-014-2.jpg',
          imageAlt: 'Nike',
        },
      ],
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

const Page = (props: any) => {
  const { page } = props
  return (
    <div>
      <p>i am souvik</p>
      <BuilderComponent
        model={publicRuntimeConfig?.builderIO?.modelKeys?.defaultPage}
        content={page}
      />
    </div>
  )
}

export default Page
