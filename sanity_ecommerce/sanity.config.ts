import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
//import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {ImageHotspotArray} from 'sanity-plugin-hotspot-array'

export default defineConfig({
  name: 'default',
  title: 'sanity_ecommerce ',

  projectId: 'itsxas7z',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
