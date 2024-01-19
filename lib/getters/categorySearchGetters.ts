const getName = (category: any): string => {
  return category?.content?.name || ''
}

const getCategoryCode = (category: any): string => {
  return category?.categoryCode || ''
}

const getCoverImage = (category: any): string =>
  category?.content?.categoryImages?.[0]?.imageUrl || ''

export const categorySearchGetters = {
  getName,
  getCategoryCode,
  getCoverImage,
}
