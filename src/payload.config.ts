// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Accounts } from './collections/Accounts'
import { Sites } from './collections/Sites'
import { Parties } from './collections/Parties'
import { Reminders } from './collections/Reminders'
import { Reports } from './collections/Reports'
import { Transactions } from './collections/Transactions'
import { Media } from './collections/Media'
import { Mines } from './collections/Mines'
import { Product } from './collections/Product'
import { Labour } from './collections/Labour'
import { Truck } from './collections/Hydra'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Accounts,
    Sites,
    Parties,
    Reminders,
    Reports,
    Transactions,
    Media,
    Product,
    Labour,
    Mines,
    Truck,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
