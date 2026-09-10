import { type SchemaTypeDefinition } from 'sanity'

import {categoryType} from './category'
import {faqType} from './faq'
import {judgeType} from './judge'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, faqType, judgeType],
}
