import { BuilderComponent, builder, Builder } from '@builder.io/react'
import { Box, Button } from '@mui/material'
import getConfig from 'next/config'
import router from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { ClpHeroBanner, CmsCLPPageCategory } from '@/components/catrgory-list-page'
import { IgnHeroBanner } from '@/components/home'
import getCategoryTree from '@/lib/api/operations/get-category-tree'
import type { CategoryTreeResponse } from '@/lib/types'

import type { GetServerSidePropsContext } from 'next'

const { publicRuntimeConfig } = getConfig()
const apiKey = publicRuntimeConfig?.builderIO?.apiKey

builder.init(apiKey)

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { locale } = context
  const categoriesTree: CategoryTreeResponse = await getCategoryTree()

  const page = await builder
    .get(publicRuntimeConfig?.builderIO?.modelKeys?.defaultPage, {
      userAttributes: {
        urlPath: `/clp/${context.query.categoryCode}`,
      },
    })
    .toPromise()

  return {
    props: {
      page: page || null,
      categoriesTree: categoriesTree || null,
      parentCategoryCode: context.query.categoryCode || null,
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
      defaultValue: {
        imageUrl: 'https://cdn-sb.mozu.com/26507-m1/cms/files/655bb09f-e5f2-4027-8cf6-76d0363172d1',
        mobileImageUrl:
          'https://cdn-sb.mozu.com/26507-m1/cms/files/655bb09f-e5f2-4027-8cf6-76d0363172d1',
        imageAlt: 'image Alt text',
        description: 'Explore the latest deals.',
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
          name: 'description',
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
  const { categoriesTree } = props
  const { parentCategoryCode } = props
  const categoryData = categoriesTree[0]?.childrenCategories.find(
    (e: { categoryCode: string }) => e.categoryCode === parentCategoryCode
  )
  const { t } = useTranslation('common')
  return (
    <>
      <BuilderComponent
        model={publicRuntimeConfig?.builderIO?.modelKeys?.defaultPage}
        content={page}
      />
      <Box>
        <p>
          <Button onClick={() => router.push('/')}>{t('home')}</Button>|{' '}
          {categoryData?.content?.name}{' '}
        </p>
      </Box>
      <Box>
        <CmsCLPPageCategory childCategory={categoryData} />
      </Box>
    </>
  )
}

export default Page