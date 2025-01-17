
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  lastLogin: 'lastLogin',
  isActive: 'isActive'
};

exports.Prisma.UserSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  isExpired: 'isExpired',
  createdAt: 'createdAt',
  lastAccessed: 'lastAccessed'
};

exports.Prisma.TypeAnnonceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nameAr: 'nameAr',
  priority: 'priority',
  createdAt: 'createdAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  typeAnnonceId: 'typeAnnonceId',
  name: 'name',
  nameAr: 'nameAr',
  priority: 'priority',
  createdAt: 'createdAt'
};

exports.Prisma.SubCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nameAr: 'nameAr',
  categorieId: 'categorieId',
  priority: 'priority',
  createdAt: 'createdAt'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  imagePath: 'imagePath',
  createdAt: 'createdAt',
  altText: 'altText'
};

exports.Prisma.WilayaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nameAr: 'nameAr',
  priority: 'priority'
};

exports.Prisma.MoughataaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nameAr: 'nameAr',
  priority: 'priority'
};

exports.Prisma.GPSLocationScalarFieldEnum = {
  id: 'id',
  latitude: 'latitude',
  longitude: 'longitude'
};

exports.Prisma.LieuScalarFieldEnum = {
  id: 'id',
  wilayaId: 'wilayaId',
  moughataaId: 'moughataaId',
  gpsLocationId: 'gpsLocationId'
};

exports.Prisma.AnnonceScalarFieldEnum = {
  id: 'id',
  typeAnnonceId: 'typeAnnonceId',
  categorieId: 'categorieId',
  lieuId: 'lieuId',
  userId: 'userId',
  subcategorieId: 'subcategorieId',
  title: 'title',
  description: 'description',
  price: 'price',
  contact: 'contact',
  haveImage: 'haveImage',
  firstImagePath: 'firstImagePath',
  status: 'status',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  UserSession: 'UserSession',
  TypeAnnonce: 'TypeAnnonce',
  Category: 'Category',
  SubCategory: 'SubCategory',
  Image: 'Image',
  Wilaya: 'Wilaya',
  Moughataa: 'Moughataa',
  GPSLocation: 'GPSLocation',
  Lieu: 'Lieu',
  Annonce: 'Annonce'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\User\\Downloads\\rim-ebay-prisma-setup\\rim-ebay-prisma-setup\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno",
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\User\\Downloads\\rim-ebay-prisma-setup\\rim-ebay-prisma-setup\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.2.1",
  "engineVersion": "4123509d24aa4dede1e864b46351bf2790323b69",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\", \"deno\"]\n  output          = \"../generated/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id        Int           @id @default(autoincrement())\n  email     String        @unique\n  password  String\n  createdAt DateTime      @default(now())\n  lastLogin DateTime?     @db.Timestamptz\n  isActive  Boolean       @default(true)\n  sessions  UserSession[]\n  annonces  Annonce[]\n}\n\nmodel UserSession {\n  id           Int       @id @default(autoincrement())\n  userId       Int\n  token        String\n  isExpired    Boolean   @default(false)\n  createdAt    DateTime  @default(now())\n  lastAccessed DateTime? @db.Timestamptz\n\n  user User @relation(fields: [userId], references: [id])\n}\n\nmodel TypeAnnonce {\n  id         Int        @id @default(autoincrement())\n  name       String\n  nameAr     String\n  priority   Int\n  createdAt  DateTime   @default(now())\n  categories Category[]\n  annonces   Annonce[]\n}\n\nmodel Category {\n  id            Int      @id @default(autoincrement())\n  typeAnnonceId Int\n  name          String\n  nameAr        String\n  priority      Int\n  createdAt     DateTime @default(now())\n\n  typeAnnonce   TypeAnnonce   @relation(fields: [typeAnnonceId], references: [id])\n  annonces      Annonce[]\n  subCategories SubCategory[]\n}\n\nmodel SubCategory {\n  id          Int      @id @default(autoincrement())\n  name        String\n  nameAr      String\n  categorieId Int\n  priority    Int      @default(0)\n  createdAt   DateTime @default(now())\n\n  category Category @relation(fields: [categorieId], references: [id])\n}\n\nmodel Image {\n  id        Int       @id @default(autoincrement())\n  imagePath String\n  createdAt DateTime? @default(now())\n  altText   String?\n\n  annonces Annonce[] @relation(\"AnnonceImages\")\n}\n\nmodel Wilaya {\n  id       Int    @id @default(autoincrement())\n  name     String\n  nameAr   String\n  priority Int\n  lieux    Lieu[]\n}\n\nmodel Moughataa {\n  id       Int    @id @default(autoincrement())\n  name     String\n  nameAr   String\n  priority Int\n  lieux    Lieu[]\n}\n\nmodel GPSLocation {\n  id        Int    @id @default(autoincrement())\n  latitude  Float\n  longitude Float\n  lieux     Lieu[]\n}\n\nmodel Lieu {\n  id            Int  @id @default(autoincrement())\n  wilayaId      Int\n  moughataaId   Int?\n  gpsLocationId Int?\n\n  wilaya      Wilaya?      @relation(fields: [wilayaId], references: [id])\n  moughataa   Moughataa?   @relation(fields: [moughataaId], references: [id])\n  gpsLocation GPSLocation? @relation(fields: [gpsLocationId], references: [id])\n\n  annonces Annonce[]\n}\n\nmodel Annonce {\n  id             Int      @id @default(autoincrement())\n  typeAnnonceId  Int\n  categorieId    Int\n  lieuId         Int\n  userId         Int\n  subcategorieId Int\n  title          String\n  description    String\n  price          Float\n  contact        String\n  haveImage      Boolean  @default(false)\n  firstImagePath String\n  status         String\n  updatedAt      DateTime @default(now()) @updatedAt\n  createdAt      DateTime @default(now())\n\n  typeAnnonce TypeAnnonce @relation(fields: [typeAnnonceId], references: [id])\n  categorie   Category    @relation(fields: [categorieId], references: [id])\n  lieu        Lieu        @relation(fields: [lieuId], references: [id])\n  user        User        @relation(fields: [userId], references: [id])\n  images      Image[]     @relation(\"AnnonceImages\")\n}\n",
  "inlineSchemaHash": "c75f340bde3c34cb2bcd6ac0bcd1206b0b48d3c1ffdf6e34b60f90c71af6cc5a",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"UserSession\",\"relationName\":\"UserToUserSession\"},{\"name\":\"annonces\",\"kind\":\"object\",\"type\":\"Annonce\",\"relationName\":\"AnnonceToUser\"}],\"dbName\":null},\"UserSession\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isExpired\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastAccessed\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserSession\"}],\"dbName\":null},\"TypeAnnonce\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nameAr\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"priority\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"categories\",\"kind\":\"object\",\"type\":\"Category\",\"relationName\":\"CategoryToTypeAnnonce\"},{\"name\":\"annonces\",\"kind\":\"object\",\"type\":\"Annonce\",\"relationName\":\"AnnonceToTypeAnnonce\"}],\"dbName\":null},\"Category\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"typeAnnonceId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nameAr\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"priority\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"typeAnnonce\",\"kind\":\"object\",\"type\":\"TypeAnnonce\",\"relationName\":\"CategoryToTypeAnnonce\"},{\"name\":\"annonces\",\"kind\":\"object\",\"type\":\"Annonce\",\"relationName\":\"AnnonceToCategory\"},{\"name\":\"subCategories\",\"kind\":\"object\",\"type\":\"SubCategory\",\"relationName\":\"CategoryToSubCategory\"}],\"dbName\":null},\"SubCategory\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nameAr\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"categorieId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"priority\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"category\",\"kind\":\"object\",\"type\":\"Category\",\"relationName\":\"CategoryToSubCategory\"}],\"dbName\":null},\"Image\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"imagePath\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"altText\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"annonces\",\"kind\":\"object\",\"type\":\"Annonce\",\"relationName\":\"AnnonceImages\"}],\"dbName\":null},\"Wilaya\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nameAr\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"priority\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"lieux\",\"kind\":\"object\",\"type\":\"Lieu\",\"relationName\":\"LieuToWilaya\"}],\"dbName\":null},\"Moughataa\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nameAr\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"priority\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"lieux\",\"kind\":\"object\",\"type\":\"Lieu\",\"relationName\":\"LieuToMoughataa\"}],\"dbName\":null},\"GPSLocation\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"lieux\",\"kind\":\"object\",\"type\":\"Lieu\",\"relationName\":\"GPSLocationToLieu\"}],\"dbName\":null},\"Lieu\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"wilayaId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"moughataaId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"gpsLocationId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"wilaya\",\"kind\":\"object\",\"type\":\"Wilaya\",\"relationName\":\"LieuToWilaya\"},{\"name\":\"moughataa\",\"kind\":\"object\",\"type\":\"Moughataa\",\"relationName\":\"LieuToMoughataa\"},{\"name\":\"gpsLocation\",\"kind\":\"object\",\"type\":\"GPSLocation\",\"relationName\":\"GPSLocationToLieu\"},{\"name\":\"annonces\",\"kind\":\"object\",\"type\":\"Annonce\",\"relationName\":\"AnnonceToLieu\"}],\"dbName\":null},\"Annonce\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"typeAnnonceId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"categorieId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"lieuId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"subcategorieId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"contact\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"haveImage\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"firstImagePath\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"typeAnnonce\",\"kind\":\"object\",\"type\":\"TypeAnnonce\",\"relationName\":\"AnnonceToTypeAnnonce\"},{\"name\":\"categorie\",\"kind\":\"object\",\"type\":\"Category\",\"relationName\":\"AnnonceToCategory\"},{\"name\":\"lieu\",\"kind\":\"object\",\"type\":\"Lieu\",\"relationName\":\"AnnonceToLieu\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AnnonceToUser\"},{\"name\":\"images\",\"kind\":\"object\",\"type\":\"Image\",\"relationName\":\"AnnonceImages\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

