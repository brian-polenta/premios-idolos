import { type SchemaTypeDefinition } from 'sanity'

import {categoryType} from './category'
import {faqType} from './faq'
import {judgeType} from './judge'
import {homePageType} from './home-page'
import {siteSettingsType} from './site-settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageType, siteSettingsType, categoryType, faqType, judgeType],
}
