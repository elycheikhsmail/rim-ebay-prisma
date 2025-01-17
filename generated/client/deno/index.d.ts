
/**
 * Client
**/

import * as runtime from '.././runtime/library.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>
/**
 * Model TypeAnnonce
 * 
 */
export type TypeAnnonce = $Result.DefaultSelection<Prisma.$TypeAnnoncePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Wilaya
 * 
 */
export type Wilaya = $Result.DefaultSelection<Prisma.$WilayaPayload>
/**
 * Model Moughataa
 * 
 */
export type Moughataa = $Result.DefaultSelection<Prisma.$MoughataaPayload>
/**
 * Model GPSLocation
 * 
 */
export type GPSLocation = $Result.DefaultSelection<Prisma.$GPSLocationPayload>
/**
 * Model Lieu
 * 
 */
export type Lieu = $Result.DefaultSelection<Prisma.$LieuPayload>
/**
 * Model Annonce
 * 
 */
export type Annonce = $Result.DefaultSelection<Prisma.$AnnoncePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.typeAnnonce`: Exposes CRUD operations for the **TypeAnnonce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeAnnonces
    * const typeAnnonces = await prisma.typeAnnonce.findMany()
    * ```
    */
  get typeAnnonce(): Prisma.TypeAnnonceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wilaya`: Exposes CRUD operations for the **Wilaya** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wilayas
    * const wilayas = await prisma.wilaya.findMany()
    * ```
    */
  get wilaya(): Prisma.WilayaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moughataa`: Exposes CRUD operations for the **Moughataa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moughataas
    * const moughataas = await prisma.moughataa.findMany()
    * ```
    */
  get moughataa(): Prisma.MoughataaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gPSLocation`: Exposes CRUD operations for the **GPSLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GPSLocations
    * const gPSLocations = await prisma.gPSLocation.findMany()
    * ```
    */
  get gPSLocation(): Prisma.GPSLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lieu`: Exposes CRUD operations for the **Lieu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lieus
    * const lieus = await prisma.lieu.findMany()
    * ```
    */
  get lieu(): Prisma.LieuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annonce`: Exposes CRUD operations for the **Annonce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annonces
    * const annonces = await prisma.annonce.findMany()
    * ```
    */
  get annonce(): Prisma.AnnonceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "userSession" | "typeAnnonce" | "category" | "subCategory" | "image" | "wilaya" | "moughataa" | "gPSLocation" | "lieu" | "annonce"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
      TypeAnnonce: {
        payload: Prisma.$TypeAnnoncePayload<ExtArgs>
        fields: Prisma.TypeAnnonceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeAnnonceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeAnnonceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>
          }
          findFirst: {
            args: Prisma.TypeAnnonceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeAnnonceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>
          }
          findMany: {
            args: Prisma.TypeAnnonceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>[]
          }
          create: {
            args: Prisma.TypeAnnonceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>
          }
          createMany: {
            args: Prisma.TypeAnnonceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeAnnonceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>[]
          }
          delete: {
            args: Prisma.TypeAnnonceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>
          }
          update: {
            args: Prisma.TypeAnnonceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>
          }
          deleteMany: {
            args: Prisma.TypeAnnonceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeAnnonceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeAnnonceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>[]
          }
          upsert: {
            args: Prisma.TypeAnnonceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeAnnoncePayload>
          }
          aggregate: {
            args: Prisma.TypeAnnonceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeAnnonce>
          }
          groupBy: {
            args: Prisma.TypeAnnonceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeAnnonceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeAnnonceCountArgs<ExtArgs>
            result: $Utils.Optional<TypeAnnonceCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Wilaya: {
        payload: Prisma.$WilayaPayload<ExtArgs>
        fields: Prisma.WilayaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WilayaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WilayaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>
          }
          findFirst: {
            args: Prisma.WilayaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WilayaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>
          }
          findMany: {
            args: Prisma.WilayaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>[]
          }
          create: {
            args: Prisma.WilayaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>
          }
          createMany: {
            args: Prisma.WilayaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WilayaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>[]
          }
          delete: {
            args: Prisma.WilayaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>
          }
          update: {
            args: Prisma.WilayaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>
          }
          deleteMany: {
            args: Prisma.WilayaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WilayaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WilayaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>[]
          }
          upsert: {
            args: Prisma.WilayaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WilayaPayload>
          }
          aggregate: {
            args: Prisma.WilayaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWilaya>
          }
          groupBy: {
            args: Prisma.WilayaGroupByArgs<ExtArgs>
            result: $Utils.Optional<WilayaGroupByOutputType>[]
          }
          count: {
            args: Prisma.WilayaCountArgs<ExtArgs>
            result: $Utils.Optional<WilayaCountAggregateOutputType> | number
          }
        }
      }
      Moughataa: {
        payload: Prisma.$MoughataaPayload<ExtArgs>
        fields: Prisma.MoughataaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoughataaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoughataaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>
          }
          findFirst: {
            args: Prisma.MoughataaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoughataaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>
          }
          findMany: {
            args: Prisma.MoughataaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>[]
          }
          create: {
            args: Prisma.MoughataaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>
          }
          createMany: {
            args: Prisma.MoughataaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoughataaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>[]
          }
          delete: {
            args: Prisma.MoughataaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>
          }
          update: {
            args: Prisma.MoughataaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>
          }
          deleteMany: {
            args: Prisma.MoughataaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoughataaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoughataaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>[]
          }
          upsert: {
            args: Prisma.MoughataaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoughataaPayload>
          }
          aggregate: {
            args: Prisma.MoughataaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoughataa>
          }
          groupBy: {
            args: Prisma.MoughataaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoughataaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoughataaCountArgs<ExtArgs>
            result: $Utils.Optional<MoughataaCountAggregateOutputType> | number
          }
        }
      }
      GPSLocation: {
        payload: Prisma.$GPSLocationPayload<ExtArgs>
        fields: Prisma.GPSLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GPSLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GPSLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>
          }
          findFirst: {
            args: Prisma.GPSLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GPSLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>
          }
          findMany: {
            args: Prisma.GPSLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>[]
          }
          create: {
            args: Prisma.GPSLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>
          }
          createMany: {
            args: Prisma.GPSLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GPSLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>[]
          }
          delete: {
            args: Prisma.GPSLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>
          }
          update: {
            args: Prisma.GPSLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>
          }
          deleteMany: {
            args: Prisma.GPSLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GPSLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GPSLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>[]
          }
          upsert: {
            args: Prisma.GPSLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GPSLocationPayload>
          }
          aggregate: {
            args: Prisma.GPSLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGPSLocation>
          }
          groupBy: {
            args: Prisma.GPSLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GPSLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GPSLocationCountArgs<ExtArgs>
            result: $Utils.Optional<GPSLocationCountAggregateOutputType> | number
          }
        }
      }
      Lieu: {
        payload: Prisma.$LieuPayload<ExtArgs>
        fields: Prisma.LieuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LieuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LieuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>
          }
          findFirst: {
            args: Prisma.LieuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LieuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>
          }
          findMany: {
            args: Prisma.LieuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>[]
          }
          create: {
            args: Prisma.LieuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>
          }
          createMany: {
            args: Prisma.LieuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LieuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>[]
          }
          delete: {
            args: Prisma.LieuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>
          }
          update: {
            args: Prisma.LieuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>
          }
          deleteMany: {
            args: Prisma.LieuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LieuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LieuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>[]
          }
          upsert: {
            args: Prisma.LieuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LieuPayload>
          }
          aggregate: {
            args: Prisma.LieuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLieu>
          }
          groupBy: {
            args: Prisma.LieuGroupByArgs<ExtArgs>
            result: $Utils.Optional<LieuGroupByOutputType>[]
          }
          count: {
            args: Prisma.LieuCountArgs<ExtArgs>
            result: $Utils.Optional<LieuCountAggregateOutputType> | number
          }
        }
      }
      Annonce: {
        payload: Prisma.$AnnoncePayload<ExtArgs>
        fields: Prisma.AnnonceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnonceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnonceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findFirst: {
            args: Prisma.AnnonceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnonceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findMany: {
            args: Prisma.AnnonceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          create: {
            args: Prisma.AnnonceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          createMany: {
            args: Prisma.AnnonceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnonceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          delete: {
            args: Prisma.AnnonceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          update: {
            args: Prisma.AnnonceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          deleteMany: {
            args: Prisma.AnnonceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnonceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnonceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          upsert: {
            args: Prisma.AnnonceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          aggregate: {
            args: Prisma.AnnonceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnonce>
          }
          groupBy: {
            args: Prisma.AnnonceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnonceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnonceCountArgs<ExtArgs>
            result: $Utils.Optional<AnnonceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userSession?: UserSessionOmit
    typeAnnonce?: TypeAnnonceOmit
    category?: CategoryOmit
    subCategory?: SubCategoryOmit
    image?: ImageOmit
    wilaya?: WilayaOmit
    moughataa?: MoughataaOmit
    gPSLocation?: GPSLocationOmit
    lieu?: LieuOmit
    annonce?: AnnonceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    annonces: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    annonces?: boolean | UserCountOutputTypeCountAnnoncesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }


  /**
   * Count Type TypeAnnonceCountOutputType
   */

  export type TypeAnnonceCountOutputType = {
    categories: number
    annonces: number
  }

  export type TypeAnnonceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TypeAnnonceCountOutputTypeCountCategoriesArgs
    annonces?: boolean | TypeAnnonceCountOutputTypeCountAnnoncesArgs
  }

  // Custom InputTypes
  /**
   * TypeAnnonceCountOutputType without action
   */
  export type TypeAnnonceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonceCountOutputType
     */
    select?: TypeAnnonceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeAnnonceCountOutputType without action
   */
  export type TypeAnnonceCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * TypeAnnonceCountOutputType without action
   */
  export type TypeAnnonceCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    annonces: number
    subCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | CategoryCountOutputTypeCountAnnoncesArgs
    subCategories?: boolean | CategoryCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    annonces: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | ImageCountOutputTypeCountAnnoncesArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }


  /**
   * Count Type WilayaCountOutputType
   */

  export type WilayaCountOutputType = {
    lieux: number
  }

  export type WilayaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lieux?: boolean | WilayaCountOutputTypeCountLieuxArgs
  }

  // Custom InputTypes
  /**
   * WilayaCountOutputType without action
   */
  export type WilayaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WilayaCountOutputType
     */
    select?: WilayaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WilayaCountOutputType without action
   */
  export type WilayaCountOutputTypeCountLieuxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LieuWhereInput
  }


  /**
   * Count Type MoughataaCountOutputType
   */

  export type MoughataaCountOutputType = {
    lieux: number
  }

  export type MoughataaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lieux?: boolean | MoughataaCountOutputTypeCountLieuxArgs
  }

  // Custom InputTypes
  /**
   * MoughataaCountOutputType without action
   */
  export type MoughataaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoughataaCountOutputType
     */
    select?: MoughataaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoughataaCountOutputType without action
   */
  export type MoughataaCountOutputTypeCountLieuxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LieuWhereInput
  }


  /**
   * Count Type GPSLocationCountOutputType
   */

  export type GPSLocationCountOutputType = {
    lieux: number
  }

  export type GPSLocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lieux?: boolean | GPSLocationCountOutputTypeCountLieuxArgs
  }

  // Custom InputTypes
  /**
   * GPSLocationCountOutputType without action
   */
  export type GPSLocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocationCountOutputType
     */
    select?: GPSLocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GPSLocationCountOutputType without action
   */
  export type GPSLocationCountOutputTypeCountLieuxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LieuWhereInput
  }


  /**
   * Count Type LieuCountOutputType
   */

  export type LieuCountOutputType = {
    annonces: number
  }

  export type LieuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | LieuCountOutputTypeCountAnnoncesArgs
  }

  // Custom InputTypes
  /**
   * LieuCountOutputType without action
   */
  export type LieuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LieuCountOutputType
     */
    select?: LieuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LieuCountOutputType without action
   */
  export type LieuCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }


  /**
   * Count Type AnnonceCountOutputType
   */

  export type AnnonceCountOutputType = {
    images: number
  }

  export type AnnonceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | AnnonceCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceCountOutputType
     */
    select?: AnnonceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    lastLogin: Date | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    lastLogin: Date | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    lastLogin: number
    isActive: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    lastLogin: Date | null
    isActive: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    annonces?: boolean | User$annoncesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "lastLogin" | "isActive", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    annonces?: boolean | User$annoncesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$UserSessionPayload<ExtArgs>[]
      annonces: Prisma.$AnnoncePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
      lastLogin: Date | null
      isActive: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    annonces<T extends User$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, User$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    cursor?: UserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * User.annonces
   */
  export type User$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _avg: UserSessionAvgAggregateOutputType | null
    _sum: UserSessionSumAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    isExpired: boolean | null
    createdAt: Date | null
    lastAccessed: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    isExpired: boolean | null
    createdAt: Date | null
    lastAccessed: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    isExpired: number
    createdAt: number
    lastAccessed: number
    _all: number
  }


  export type UserSessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    isExpired?: true
    createdAt?: true
    lastAccessed?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    isExpired?: true
    createdAt?: true
    lastAccessed?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    isExpired?: true
    createdAt?: true
    lastAccessed?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _avg?: UserSessionAvgAggregateInputType
    _sum?: UserSessionSumAggregateInputType
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: number
    userId: number
    token: string
    isExpired: boolean
    createdAt: Date
    lastAccessed: Date | null
    _count: UserSessionCountAggregateOutputType | null
    _avg: UserSessionAvgAggregateOutputType | null
    _sum: UserSessionSumAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    isExpired?: boolean
    createdAt?: boolean
    lastAccessed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    isExpired?: boolean
    createdAt?: boolean
    lastAccessed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    isExpired?: boolean
    createdAt?: boolean
    lastAccessed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    isExpired?: boolean
    createdAt?: boolean
    lastAccessed?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "isExpired" | "createdAt" | "lastAccessed", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      isExpired: boolean
      createdAt: Date
      lastAccessed: Date | null
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSession model
   */ 
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'Int'>
    readonly userId: FieldRef<"UserSession", 'Int'>
    readonly token: FieldRef<"UserSession", 'String'>
    readonly isExpired: FieldRef<"UserSession", 'Boolean'>
    readonly createdAt: FieldRef<"UserSession", 'DateTime'>
    readonly lastAccessed: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
  }

  /**
   * UserSession updateManyAndReturn
   */
  export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Model TypeAnnonce
   */

  export type AggregateTypeAnnonce = {
    _count: TypeAnnonceCountAggregateOutputType | null
    _avg: TypeAnnonceAvgAggregateOutputType | null
    _sum: TypeAnnonceSumAggregateOutputType | null
    _min: TypeAnnonceMinAggregateOutputType | null
    _max: TypeAnnonceMaxAggregateOutputType | null
  }

  export type TypeAnnonceAvgAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type TypeAnnonceSumAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type TypeAnnonceMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameAr: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type TypeAnnonceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameAr: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type TypeAnnonceCountAggregateOutputType = {
    id: number
    name: number
    nameAr: number
    priority: number
    createdAt: number
    _all: number
  }


  export type TypeAnnonceAvgAggregateInputType = {
    id?: true
    priority?: true
  }

  export type TypeAnnonceSumAggregateInputType = {
    id?: true
    priority?: true
  }

  export type TypeAnnonceMinAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
    createdAt?: true
  }

  export type TypeAnnonceMaxAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
    createdAt?: true
  }

  export type TypeAnnonceCountAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
    createdAt?: true
    _all?: true
  }

  export type TypeAnnonceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeAnnonce to aggregate.
     */
    where?: TypeAnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeAnnonces to fetch.
     */
    orderBy?: TypeAnnonceOrderByWithRelationInput | TypeAnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeAnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeAnnonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeAnnonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeAnnonces
    **/
    _count?: true | TypeAnnonceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAnnonceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeAnnonceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeAnnonceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeAnnonceMaxAggregateInputType
  }

  export type GetTypeAnnonceAggregateType<T extends TypeAnnonceAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeAnnonce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeAnnonce[P]>
      : GetScalarType<T[P], AggregateTypeAnnonce[P]>
  }




  export type TypeAnnonceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeAnnonceWhereInput
    orderBy?: TypeAnnonceOrderByWithAggregationInput | TypeAnnonceOrderByWithAggregationInput[]
    by: TypeAnnonceScalarFieldEnum[] | TypeAnnonceScalarFieldEnum
    having?: TypeAnnonceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeAnnonceCountAggregateInputType | true
    _avg?: TypeAnnonceAvgAggregateInputType
    _sum?: TypeAnnonceSumAggregateInputType
    _min?: TypeAnnonceMinAggregateInputType
    _max?: TypeAnnonceMaxAggregateInputType
  }

  export type TypeAnnonceGroupByOutputType = {
    id: number
    name: string
    nameAr: string
    priority: number
    createdAt: Date
    _count: TypeAnnonceCountAggregateOutputType | null
    _avg: TypeAnnonceAvgAggregateOutputType | null
    _sum: TypeAnnonceSumAggregateOutputType | null
    _min: TypeAnnonceMinAggregateOutputType | null
    _max: TypeAnnonceMaxAggregateOutputType | null
  }

  type GetTypeAnnonceGroupByPayload<T extends TypeAnnonceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeAnnonceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeAnnonceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeAnnonceGroupByOutputType[P]>
            : GetScalarType<T[P], TypeAnnonceGroupByOutputType[P]>
        }
      >
    >


  export type TypeAnnonceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    createdAt?: boolean
    categories?: boolean | TypeAnnonce$categoriesArgs<ExtArgs>
    annonces?: boolean | TypeAnnonce$annoncesArgs<ExtArgs>
    _count?: boolean | TypeAnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeAnnonce"]>

  export type TypeAnnonceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["typeAnnonce"]>

  export type TypeAnnonceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["typeAnnonce"]>

  export type TypeAnnonceSelectScalar = {
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    createdAt?: boolean
  }

  export type TypeAnnonceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameAr" | "priority" | "createdAt", ExtArgs["result"]["typeAnnonce"]>
  export type TypeAnnonceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TypeAnnonce$categoriesArgs<ExtArgs>
    annonces?: boolean | TypeAnnonce$annoncesArgs<ExtArgs>
    _count?: boolean | TypeAnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeAnnonceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeAnnonceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypeAnnoncePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeAnnonce"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      annonces: Prisma.$AnnoncePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nameAr: string
      priority: number
      createdAt: Date
    }, ExtArgs["result"]["typeAnnonce"]>
    composites: {}
  }

  type TypeAnnonceGetPayload<S extends boolean | null | undefined | TypeAnnonceDefaultArgs> = $Result.GetResult<Prisma.$TypeAnnoncePayload, S>

  type TypeAnnonceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeAnnonceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeAnnonceCountAggregateInputType | true
    }

  export interface TypeAnnonceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeAnnonce'], meta: { name: 'TypeAnnonce' } }
    /**
     * Find zero or one TypeAnnonce that matches the filter.
     * @param {TypeAnnonceFindUniqueArgs} args - Arguments to find a TypeAnnonce
     * @example
     * // Get one TypeAnnonce
     * const typeAnnonce = await prisma.typeAnnonce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeAnnonceFindUniqueArgs>(args: SelectSubset<T, TypeAnnonceFindUniqueArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TypeAnnonce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeAnnonceFindUniqueOrThrowArgs} args - Arguments to find a TypeAnnonce
     * @example
     * // Get one TypeAnnonce
     * const typeAnnonce = await prisma.typeAnnonce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeAnnonceFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeAnnonceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TypeAnnonce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAnnonceFindFirstArgs} args - Arguments to find a TypeAnnonce
     * @example
     * // Get one TypeAnnonce
     * const typeAnnonce = await prisma.typeAnnonce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeAnnonceFindFirstArgs>(args?: SelectSubset<T, TypeAnnonceFindFirstArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TypeAnnonce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAnnonceFindFirstOrThrowArgs} args - Arguments to find a TypeAnnonce
     * @example
     * // Get one TypeAnnonce
     * const typeAnnonce = await prisma.typeAnnonce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeAnnonceFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeAnnonceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TypeAnnonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAnnonceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeAnnonces
     * const typeAnnonces = await prisma.typeAnnonce.findMany()
     * 
     * // Get first 10 TypeAnnonces
     * const typeAnnonces = await prisma.typeAnnonce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeAnnonceWithIdOnly = await prisma.typeAnnonce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeAnnonceFindManyArgs>(args?: SelectSubset<T, TypeAnnonceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TypeAnnonce.
     * @param {TypeAnnonceCreateArgs} args - Arguments to create a TypeAnnonce.
     * @example
     * // Create one TypeAnnonce
     * const TypeAnnonce = await prisma.typeAnnonce.create({
     *   data: {
     *     // ... data to create a TypeAnnonce
     *   }
     * })
     * 
     */
    create<T extends TypeAnnonceCreateArgs>(args: SelectSubset<T, TypeAnnonceCreateArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TypeAnnonces.
     * @param {TypeAnnonceCreateManyArgs} args - Arguments to create many TypeAnnonces.
     * @example
     * // Create many TypeAnnonces
     * const typeAnnonce = await prisma.typeAnnonce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeAnnonceCreateManyArgs>(args?: SelectSubset<T, TypeAnnonceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TypeAnnonces and returns the data saved in the database.
     * @param {TypeAnnonceCreateManyAndReturnArgs} args - Arguments to create many TypeAnnonces.
     * @example
     * // Create many TypeAnnonces
     * const typeAnnonce = await prisma.typeAnnonce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TypeAnnonces and only return the `id`
     * const typeAnnonceWithIdOnly = await prisma.typeAnnonce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeAnnonceCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeAnnonceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TypeAnnonce.
     * @param {TypeAnnonceDeleteArgs} args - Arguments to delete one TypeAnnonce.
     * @example
     * // Delete one TypeAnnonce
     * const TypeAnnonce = await prisma.typeAnnonce.delete({
     *   where: {
     *     // ... filter to delete one TypeAnnonce
     *   }
     * })
     * 
     */
    delete<T extends TypeAnnonceDeleteArgs>(args: SelectSubset<T, TypeAnnonceDeleteArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TypeAnnonce.
     * @param {TypeAnnonceUpdateArgs} args - Arguments to update one TypeAnnonce.
     * @example
     * // Update one TypeAnnonce
     * const typeAnnonce = await prisma.typeAnnonce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeAnnonceUpdateArgs>(args: SelectSubset<T, TypeAnnonceUpdateArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TypeAnnonces.
     * @param {TypeAnnonceDeleteManyArgs} args - Arguments to filter TypeAnnonces to delete.
     * @example
     * // Delete a few TypeAnnonces
     * const { count } = await prisma.typeAnnonce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeAnnonceDeleteManyArgs>(args?: SelectSubset<T, TypeAnnonceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeAnnonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAnnonceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeAnnonces
     * const typeAnnonce = await prisma.typeAnnonce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeAnnonceUpdateManyArgs>(args: SelectSubset<T, TypeAnnonceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeAnnonces and returns the data updated in the database.
     * @param {TypeAnnonceUpdateManyAndReturnArgs} args - Arguments to update many TypeAnnonces.
     * @example
     * // Update many TypeAnnonces
     * const typeAnnonce = await prisma.typeAnnonce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TypeAnnonces and only return the `id`
     * const typeAnnonceWithIdOnly = await prisma.typeAnnonce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeAnnonceUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeAnnonceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TypeAnnonce.
     * @param {TypeAnnonceUpsertArgs} args - Arguments to update or create a TypeAnnonce.
     * @example
     * // Update or create a TypeAnnonce
     * const typeAnnonce = await prisma.typeAnnonce.upsert({
     *   create: {
     *     // ... data to create a TypeAnnonce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeAnnonce we want to update
     *   }
     * })
     */
    upsert<T extends TypeAnnonceUpsertArgs>(args: SelectSubset<T, TypeAnnonceUpsertArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TypeAnnonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAnnonceCountArgs} args - Arguments to filter TypeAnnonces to count.
     * @example
     * // Count the number of TypeAnnonces
     * const count = await prisma.typeAnnonce.count({
     *   where: {
     *     // ... the filter for the TypeAnnonces we want to count
     *   }
     * })
    **/
    count<T extends TypeAnnonceCountArgs>(
      args?: Subset<T, TypeAnnonceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeAnnonceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeAnnonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAnnonceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAnnonceAggregateArgs>(args: Subset<T, TypeAnnonceAggregateArgs>): Prisma.PrismaPromise<GetTypeAnnonceAggregateType<T>>

    /**
     * Group by TypeAnnonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAnnonceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeAnnonceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeAnnonceGroupByArgs['orderBy'] }
        : { orderBy?: TypeAnnonceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeAnnonceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeAnnonceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeAnnonce model
   */
  readonly fields: TypeAnnonceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeAnnonce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeAnnonceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends TypeAnnonce$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, TypeAnnonce$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    annonces<T extends TypeAnnonce$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, TypeAnnonce$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TypeAnnonce model
   */ 
  interface TypeAnnonceFieldRefs {
    readonly id: FieldRef<"TypeAnnonce", 'Int'>
    readonly name: FieldRef<"TypeAnnonce", 'String'>
    readonly nameAr: FieldRef<"TypeAnnonce", 'String'>
    readonly priority: FieldRef<"TypeAnnonce", 'Int'>
    readonly createdAt: FieldRef<"TypeAnnonce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TypeAnnonce findUnique
   */
  export type TypeAnnonceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which TypeAnnonce to fetch.
     */
    where: TypeAnnonceWhereUniqueInput
  }

  /**
   * TypeAnnonce findUniqueOrThrow
   */
  export type TypeAnnonceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which TypeAnnonce to fetch.
     */
    where: TypeAnnonceWhereUniqueInput
  }

  /**
   * TypeAnnonce findFirst
   */
  export type TypeAnnonceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which TypeAnnonce to fetch.
     */
    where?: TypeAnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeAnnonces to fetch.
     */
    orderBy?: TypeAnnonceOrderByWithRelationInput | TypeAnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeAnnonces.
     */
    cursor?: TypeAnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeAnnonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeAnnonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeAnnonces.
     */
    distinct?: TypeAnnonceScalarFieldEnum | TypeAnnonceScalarFieldEnum[]
  }

  /**
   * TypeAnnonce findFirstOrThrow
   */
  export type TypeAnnonceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which TypeAnnonce to fetch.
     */
    where?: TypeAnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeAnnonces to fetch.
     */
    orderBy?: TypeAnnonceOrderByWithRelationInput | TypeAnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeAnnonces.
     */
    cursor?: TypeAnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeAnnonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeAnnonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeAnnonces.
     */
    distinct?: TypeAnnonceScalarFieldEnum | TypeAnnonceScalarFieldEnum[]
  }

  /**
   * TypeAnnonce findMany
   */
  export type TypeAnnonceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which TypeAnnonces to fetch.
     */
    where?: TypeAnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeAnnonces to fetch.
     */
    orderBy?: TypeAnnonceOrderByWithRelationInput | TypeAnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeAnnonces.
     */
    cursor?: TypeAnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeAnnonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeAnnonces.
     */
    skip?: number
    distinct?: TypeAnnonceScalarFieldEnum | TypeAnnonceScalarFieldEnum[]
  }

  /**
   * TypeAnnonce create
   */
  export type TypeAnnonceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeAnnonce.
     */
    data: XOR<TypeAnnonceCreateInput, TypeAnnonceUncheckedCreateInput>
  }

  /**
   * TypeAnnonce createMany
   */
  export type TypeAnnonceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeAnnonces.
     */
    data: TypeAnnonceCreateManyInput | TypeAnnonceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeAnnonce createManyAndReturn
   */
  export type TypeAnnonceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * The data used to create many TypeAnnonces.
     */
    data: TypeAnnonceCreateManyInput | TypeAnnonceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeAnnonce update
   */
  export type TypeAnnonceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeAnnonce.
     */
    data: XOR<TypeAnnonceUpdateInput, TypeAnnonceUncheckedUpdateInput>
    /**
     * Choose, which TypeAnnonce to update.
     */
    where: TypeAnnonceWhereUniqueInput
  }

  /**
   * TypeAnnonce updateMany
   */
  export type TypeAnnonceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeAnnonces.
     */
    data: XOR<TypeAnnonceUpdateManyMutationInput, TypeAnnonceUncheckedUpdateManyInput>
    /**
     * Filter which TypeAnnonces to update
     */
    where?: TypeAnnonceWhereInput
  }

  /**
   * TypeAnnonce updateManyAndReturn
   */
  export type TypeAnnonceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * The data used to update TypeAnnonces.
     */
    data: XOR<TypeAnnonceUpdateManyMutationInput, TypeAnnonceUncheckedUpdateManyInput>
    /**
     * Filter which TypeAnnonces to update
     */
    where?: TypeAnnonceWhereInput
  }

  /**
   * TypeAnnonce upsert
   */
  export type TypeAnnonceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeAnnonce to update in case it exists.
     */
    where: TypeAnnonceWhereUniqueInput
    /**
     * In case the TypeAnnonce found by the `where` argument doesn't exist, create a new TypeAnnonce with this data.
     */
    create: XOR<TypeAnnonceCreateInput, TypeAnnonceUncheckedCreateInput>
    /**
     * In case the TypeAnnonce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeAnnonceUpdateInput, TypeAnnonceUncheckedUpdateInput>
  }

  /**
   * TypeAnnonce delete
   */
  export type TypeAnnonceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
    /**
     * Filter which TypeAnnonce to delete.
     */
    where: TypeAnnonceWhereUniqueInput
  }

  /**
   * TypeAnnonce deleteMany
   */
  export type TypeAnnonceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeAnnonces to delete
     */
    where?: TypeAnnonceWhereInput
  }

  /**
   * TypeAnnonce.categories
   */
  export type TypeAnnonce$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * TypeAnnonce.annonces
   */
  export type TypeAnnonce$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * TypeAnnonce without action
   */
  export type TypeAnnonceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeAnnonce
     */
    select?: TypeAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeAnnonce
     */
    omit?: TypeAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeAnnonceInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    typeAnnonceId: number | null
    priority: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    typeAnnonceId: number | null
    priority: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    typeAnnonceId: number | null
    name: string | null
    nameAr: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    typeAnnonceId: number | null
    name: string | null
    nameAr: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    typeAnnonceId: number
    name: number
    nameAr: number
    priority: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    priority?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    priority?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    name?: true
    nameAr?: true
    priority?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    name?: true
    nameAr?: true
    priority?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    name?: true
    nameAr?: true
    priority?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    typeAnnonceId: number
    name: string
    nameAr: string
    priority: number
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeAnnonceId?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    createdAt?: boolean
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
    annonces?: boolean | Category$annoncesArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeAnnonceId?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    createdAt?: boolean
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeAnnonceId?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    createdAt?: boolean
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    typeAnnonceId?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "typeAnnonceId" | "name" | "nameAr" | "priority" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
    annonces?: boolean | Category$annoncesArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      typeAnnonce: Prisma.$TypeAnnoncePayload<ExtArgs>
      annonces: Prisma.$AnnoncePayload<ExtArgs>[]
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      typeAnnonceId: number
      name: string
      nameAr: string
      priority: number
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    typeAnnonce<T extends TypeAnnonceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeAnnonceDefaultArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    annonces<T extends Category$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, Category$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    subCategories<T extends Category$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly typeAnnonceId: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly nameAr: FieldRef<"Category", 'String'>
    readonly priority: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.annonces
   */
  export type Category$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Category.subCategories
   */
  export type Category$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryAvgAggregateOutputType = {
    id: number | null
    categorieId: number | null
    priority: number | null
  }

  export type SubCategorySumAggregateOutputType = {
    id: number | null
    categorieId: number | null
    priority: number | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameAr: string | null
    categorieId: number | null
    priority: number | null
    createdAt: Date | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameAr: string | null
    categorieId: number | null
    priority: number | null
    createdAt: Date | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    name: number
    nameAr: number
    categorieId: number
    priority: number
    createdAt: number
    _all: number
  }


  export type SubCategoryAvgAggregateInputType = {
    id?: true
    categorieId?: true
    priority?: true
  }

  export type SubCategorySumAggregateInputType = {
    id?: true
    categorieId?: true
    priority?: true
  }

  export type SubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    categorieId?: true
    priority?: true
    createdAt?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    categorieId?: true
    priority?: true
    createdAt?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    categorieId?: true
    priority?: true
    createdAt?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _avg?: SubCategoryAvgAggregateInputType
    _sum?: SubCategorySumAggregateInputType
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: number
    name: string
    nameAr: string
    categorieId: number
    priority: number
    createdAt: Date
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    categorieId?: boolean
    priority?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    categorieId?: boolean
    priority?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    categorieId?: boolean
    priority?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    nameAr?: boolean
    categorieId?: boolean
    priority?: boolean
    createdAt?: boolean
  }

  export type SubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameAr" | "categorieId" | "priority" | "createdAt", ExtArgs["result"]["subCategory"]>
  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SubCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SubCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nameAr: string
      categorieId: number
      priority: number
      createdAt: Date
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }

  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoryFindUniqueArgs>(args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoryFindFirstArgs>(args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoryFindManyArgs>(args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
     */
    create<T extends SubCategoryCreateArgs>(args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoryCreateManyArgs>(args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {SubCategoryCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
     */
    delete<T extends SubCategoryDeleteArgs>(args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoryUpdateArgs>(args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoryDeleteManyArgs>(args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoryUpdateManyArgs>(args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {SubCategoryUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoryUpsertArgs>(args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubCategory model
   */ 
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'Int'>
    readonly name: FieldRef<"SubCategory", 'String'>
    readonly nameAr: FieldRef<"SubCategory", 'String'>
    readonly categorieId: FieldRef<"SubCategory", 'Int'>
    readonly priority: FieldRef<"SubCategory", 'Int'>
    readonly createdAt: FieldRef<"SubCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }

  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategory createManyAndReturn
   */
  export type SubCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
  }

  /**
   * SubCategory updateManyAndReturn
   */
  export type SubCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }

  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
  }

  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    imagePath: string | null
    createdAt: Date | null
    altText: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    imagePath: string | null
    createdAt: Date | null
    altText: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    imagePath: number
    createdAt: number
    altText: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    imagePath?: true
    createdAt?: true
    altText?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    imagePath?: true
    createdAt?: true
    altText?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    imagePath?: true
    createdAt?: true
    altText?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    imagePath: string
    createdAt: Date | null
    altText: string | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagePath?: boolean
    createdAt?: boolean
    altText?: boolean
    annonces?: boolean | Image$annoncesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagePath?: boolean
    createdAt?: boolean
    altText?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagePath?: boolean
    createdAt?: boolean
    altText?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    imagePath?: boolean
    createdAt?: boolean
    altText?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imagePath" | "createdAt" | "altText", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | Image$annoncesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      annonces: Prisma.$AnnoncePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imagePath: string
      createdAt: Date | null
      altText: string | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    annonces<T extends Image$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, Image$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly imagePath: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly altText: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }

  /**
   * Image.annonces
   */
  export type Image$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Wilaya
   */

  export type AggregateWilaya = {
    _count: WilayaCountAggregateOutputType | null
    _avg: WilayaAvgAggregateOutputType | null
    _sum: WilayaSumAggregateOutputType | null
    _min: WilayaMinAggregateOutputType | null
    _max: WilayaMaxAggregateOutputType | null
  }

  export type WilayaAvgAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type WilayaSumAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type WilayaMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameAr: string | null
    priority: number | null
  }

  export type WilayaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameAr: string | null
    priority: number | null
  }

  export type WilayaCountAggregateOutputType = {
    id: number
    name: number
    nameAr: number
    priority: number
    _all: number
  }


  export type WilayaAvgAggregateInputType = {
    id?: true
    priority?: true
  }

  export type WilayaSumAggregateInputType = {
    id?: true
    priority?: true
  }

  export type WilayaMinAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
  }

  export type WilayaMaxAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
  }

  export type WilayaCountAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
    _all?: true
  }

  export type WilayaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wilaya to aggregate.
     */
    where?: WilayaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wilayas to fetch.
     */
    orderBy?: WilayaOrderByWithRelationInput | WilayaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WilayaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wilayas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wilayas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wilayas
    **/
    _count?: true | WilayaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WilayaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WilayaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WilayaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WilayaMaxAggregateInputType
  }

  export type GetWilayaAggregateType<T extends WilayaAggregateArgs> = {
        [P in keyof T & keyof AggregateWilaya]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWilaya[P]>
      : GetScalarType<T[P], AggregateWilaya[P]>
  }




  export type WilayaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WilayaWhereInput
    orderBy?: WilayaOrderByWithAggregationInput | WilayaOrderByWithAggregationInput[]
    by: WilayaScalarFieldEnum[] | WilayaScalarFieldEnum
    having?: WilayaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WilayaCountAggregateInputType | true
    _avg?: WilayaAvgAggregateInputType
    _sum?: WilayaSumAggregateInputType
    _min?: WilayaMinAggregateInputType
    _max?: WilayaMaxAggregateInputType
  }

  export type WilayaGroupByOutputType = {
    id: number
    name: string
    nameAr: string
    priority: number
    _count: WilayaCountAggregateOutputType | null
    _avg: WilayaAvgAggregateOutputType | null
    _sum: WilayaSumAggregateOutputType | null
    _min: WilayaMinAggregateOutputType | null
    _max: WilayaMaxAggregateOutputType | null
  }

  type GetWilayaGroupByPayload<T extends WilayaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WilayaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WilayaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WilayaGroupByOutputType[P]>
            : GetScalarType<T[P], WilayaGroupByOutputType[P]>
        }
      >
    >


  export type WilayaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    lieux?: boolean | Wilaya$lieuxArgs<ExtArgs>
    _count?: boolean | WilayaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wilaya"]>

  export type WilayaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
  }, ExtArgs["result"]["wilaya"]>

  export type WilayaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
  }, ExtArgs["result"]["wilaya"]>

  export type WilayaSelectScalar = {
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
  }

  export type WilayaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameAr" | "priority", ExtArgs["result"]["wilaya"]>
  export type WilayaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lieux?: boolean | Wilaya$lieuxArgs<ExtArgs>
    _count?: boolean | WilayaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WilayaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WilayaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WilayaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wilaya"
    objects: {
      lieux: Prisma.$LieuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nameAr: string
      priority: number
    }, ExtArgs["result"]["wilaya"]>
    composites: {}
  }

  type WilayaGetPayload<S extends boolean | null | undefined | WilayaDefaultArgs> = $Result.GetResult<Prisma.$WilayaPayload, S>

  type WilayaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WilayaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WilayaCountAggregateInputType | true
    }

  export interface WilayaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wilaya'], meta: { name: 'Wilaya' } }
    /**
     * Find zero or one Wilaya that matches the filter.
     * @param {WilayaFindUniqueArgs} args - Arguments to find a Wilaya
     * @example
     * // Get one Wilaya
     * const wilaya = await prisma.wilaya.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WilayaFindUniqueArgs>(args: SelectSubset<T, WilayaFindUniqueArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Wilaya that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WilayaFindUniqueOrThrowArgs} args - Arguments to find a Wilaya
     * @example
     * // Get one Wilaya
     * const wilaya = await prisma.wilaya.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WilayaFindUniqueOrThrowArgs>(args: SelectSubset<T, WilayaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Wilaya that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayaFindFirstArgs} args - Arguments to find a Wilaya
     * @example
     * // Get one Wilaya
     * const wilaya = await prisma.wilaya.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WilayaFindFirstArgs>(args?: SelectSubset<T, WilayaFindFirstArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Wilaya that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayaFindFirstOrThrowArgs} args - Arguments to find a Wilaya
     * @example
     * // Get one Wilaya
     * const wilaya = await prisma.wilaya.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WilayaFindFirstOrThrowArgs>(args?: SelectSubset<T, WilayaFindFirstOrThrowArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Wilayas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wilayas
     * const wilayas = await prisma.wilaya.findMany()
     * 
     * // Get first 10 Wilayas
     * const wilayas = await prisma.wilaya.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wilayaWithIdOnly = await prisma.wilaya.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WilayaFindManyArgs>(args?: SelectSubset<T, WilayaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Wilaya.
     * @param {WilayaCreateArgs} args - Arguments to create a Wilaya.
     * @example
     * // Create one Wilaya
     * const Wilaya = await prisma.wilaya.create({
     *   data: {
     *     // ... data to create a Wilaya
     *   }
     * })
     * 
     */
    create<T extends WilayaCreateArgs>(args: SelectSubset<T, WilayaCreateArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Wilayas.
     * @param {WilayaCreateManyArgs} args - Arguments to create many Wilayas.
     * @example
     * // Create many Wilayas
     * const wilaya = await prisma.wilaya.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WilayaCreateManyArgs>(args?: SelectSubset<T, WilayaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wilayas and returns the data saved in the database.
     * @param {WilayaCreateManyAndReturnArgs} args - Arguments to create many Wilayas.
     * @example
     * // Create many Wilayas
     * const wilaya = await prisma.wilaya.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wilayas and only return the `id`
     * const wilayaWithIdOnly = await prisma.wilaya.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WilayaCreateManyAndReturnArgs>(args?: SelectSubset<T, WilayaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Wilaya.
     * @param {WilayaDeleteArgs} args - Arguments to delete one Wilaya.
     * @example
     * // Delete one Wilaya
     * const Wilaya = await prisma.wilaya.delete({
     *   where: {
     *     // ... filter to delete one Wilaya
     *   }
     * })
     * 
     */
    delete<T extends WilayaDeleteArgs>(args: SelectSubset<T, WilayaDeleteArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Wilaya.
     * @param {WilayaUpdateArgs} args - Arguments to update one Wilaya.
     * @example
     * // Update one Wilaya
     * const wilaya = await prisma.wilaya.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WilayaUpdateArgs>(args: SelectSubset<T, WilayaUpdateArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Wilayas.
     * @param {WilayaDeleteManyArgs} args - Arguments to filter Wilayas to delete.
     * @example
     * // Delete a few Wilayas
     * const { count } = await prisma.wilaya.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WilayaDeleteManyArgs>(args?: SelectSubset<T, WilayaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wilayas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wilayas
     * const wilaya = await prisma.wilaya.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WilayaUpdateManyArgs>(args: SelectSubset<T, WilayaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wilayas and returns the data updated in the database.
     * @param {WilayaUpdateManyAndReturnArgs} args - Arguments to update many Wilayas.
     * @example
     * // Update many Wilayas
     * const wilaya = await prisma.wilaya.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wilayas and only return the `id`
     * const wilayaWithIdOnly = await prisma.wilaya.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WilayaUpdateManyAndReturnArgs>(args: SelectSubset<T, WilayaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Wilaya.
     * @param {WilayaUpsertArgs} args - Arguments to update or create a Wilaya.
     * @example
     * // Update or create a Wilaya
     * const wilaya = await prisma.wilaya.upsert({
     *   create: {
     *     // ... data to create a Wilaya
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wilaya we want to update
     *   }
     * })
     */
    upsert<T extends WilayaUpsertArgs>(args: SelectSubset<T, WilayaUpsertArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Wilayas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayaCountArgs} args - Arguments to filter Wilayas to count.
     * @example
     * // Count the number of Wilayas
     * const count = await prisma.wilaya.count({
     *   where: {
     *     // ... the filter for the Wilayas we want to count
     *   }
     * })
    **/
    count<T extends WilayaCountArgs>(
      args?: Subset<T, WilayaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WilayaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wilaya.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WilayaAggregateArgs>(args: Subset<T, WilayaAggregateArgs>): Prisma.PrismaPromise<GetWilayaAggregateType<T>>

    /**
     * Group by Wilaya.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WilayaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WilayaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WilayaGroupByArgs['orderBy'] }
        : { orderBy?: WilayaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WilayaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWilayaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wilaya model
   */
  readonly fields: WilayaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wilaya.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WilayaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lieux<T extends Wilaya$lieuxArgs<ExtArgs> = {}>(args?: Subset<T, Wilaya$lieuxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wilaya model
   */ 
  interface WilayaFieldRefs {
    readonly id: FieldRef<"Wilaya", 'Int'>
    readonly name: FieldRef<"Wilaya", 'String'>
    readonly nameAr: FieldRef<"Wilaya", 'String'>
    readonly priority: FieldRef<"Wilaya", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Wilaya findUnique
   */
  export type WilayaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * Filter, which Wilaya to fetch.
     */
    where: WilayaWhereUniqueInput
  }

  /**
   * Wilaya findUniqueOrThrow
   */
  export type WilayaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * Filter, which Wilaya to fetch.
     */
    where: WilayaWhereUniqueInput
  }

  /**
   * Wilaya findFirst
   */
  export type WilayaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * Filter, which Wilaya to fetch.
     */
    where?: WilayaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wilayas to fetch.
     */
    orderBy?: WilayaOrderByWithRelationInput | WilayaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wilayas.
     */
    cursor?: WilayaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wilayas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wilayas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wilayas.
     */
    distinct?: WilayaScalarFieldEnum | WilayaScalarFieldEnum[]
  }

  /**
   * Wilaya findFirstOrThrow
   */
  export type WilayaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * Filter, which Wilaya to fetch.
     */
    where?: WilayaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wilayas to fetch.
     */
    orderBy?: WilayaOrderByWithRelationInput | WilayaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wilayas.
     */
    cursor?: WilayaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wilayas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wilayas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wilayas.
     */
    distinct?: WilayaScalarFieldEnum | WilayaScalarFieldEnum[]
  }

  /**
   * Wilaya findMany
   */
  export type WilayaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * Filter, which Wilayas to fetch.
     */
    where?: WilayaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wilayas to fetch.
     */
    orderBy?: WilayaOrderByWithRelationInput | WilayaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wilayas.
     */
    cursor?: WilayaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wilayas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wilayas.
     */
    skip?: number
    distinct?: WilayaScalarFieldEnum | WilayaScalarFieldEnum[]
  }

  /**
   * Wilaya create
   */
  export type WilayaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * The data needed to create a Wilaya.
     */
    data: XOR<WilayaCreateInput, WilayaUncheckedCreateInput>
  }

  /**
   * Wilaya createMany
   */
  export type WilayaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wilayas.
     */
    data: WilayaCreateManyInput | WilayaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wilaya createManyAndReturn
   */
  export type WilayaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * The data used to create many Wilayas.
     */
    data: WilayaCreateManyInput | WilayaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wilaya update
   */
  export type WilayaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * The data needed to update a Wilaya.
     */
    data: XOR<WilayaUpdateInput, WilayaUncheckedUpdateInput>
    /**
     * Choose, which Wilaya to update.
     */
    where: WilayaWhereUniqueInput
  }

  /**
   * Wilaya updateMany
   */
  export type WilayaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wilayas.
     */
    data: XOR<WilayaUpdateManyMutationInput, WilayaUncheckedUpdateManyInput>
    /**
     * Filter which Wilayas to update
     */
    where?: WilayaWhereInput
  }

  /**
   * Wilaya updateManyAndReturn
   */
  export type WilayaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * The data used to update Wilayas.
     */
    data: XOR<WilayaUpdateManyMutationInput, WilayaUncheckedUpdateManyInput>
    /**
     * Filter which Wilayas to update
     */
    where?: WilayaWhereInput
  }

  /**
   * Wilaya upsert
   */
  export type WilayaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * The filter to search for the Wilaya to update in case it exists.
     */
    where: WilayaWhereUniqueInput
    /**
     * In case the Wilaya found by the `where` argument doesn't exist, create a new Wilaya with this data.
     */
    create: XOR<WilayaCreateInput, WilayaUncheckedCreateInput>
    /**
     * In case the Wilaya was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WilayaUpdateInput, WilayaUncheckedUpdateInput>
  }

  /**
   * Wilaya delete
   */
  export type WilayaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    /**
     * Filter which Wilaya to delete.
     */
    where: WilayaWhereUniqueInput
  }

  /**
   * Wilaya deleteMany
   */
  export type WilayaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wilayas to delete
     */
    where?: WilayaWhereInput
  }

  /**
   * Wilaya.lieux
   */
  export type Wilaya$lieuxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    where?: LieuWhereInput
    orderBy?: LieuOrderByWithRelationInput | LieuOrderByWithRelationInput[]
    cursor?: LieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LieuScalarFieldEnum | LieuScalarFieldEnum[]
  }

  /**
   * Wilaya without action
   */
  export type WilayaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
  }


  /**
   * Model Moughataa
   */

  export type AggregateMoughataa = {
    _count: MoughataaCountAggregateOutputType | null
    _avg: MoughataaAvgAggregateOutputType | null
    _sum: MoughataaSumAggregateOutputType | null
    _min: MoughataaMinAggregateOutputType | null
    _max: MoughataaMaxAggregateOutputType | null
  }

  export type MoughataaAvgAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type MoughataaSumAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type MoughataaMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameAr: string | null
    priority: number | null
  }

  export type MoughataaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameAr: string | null
    priority: number | null
  }

  export type MoughataaCountAggregateOutputType = {
    id: number
    name: number
    nameAr: number
    priority: number
    _all: number
  }


  export type MoughataaAvgAggregateInputType = {
    id?: true
    priority?: true
  }

  export type MoughataaSumAggregateInputType = {
    id?: true
    priority?: true
  }

  export type MoughataaMinAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
  }

  export type MoughataaMaxAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
  }

  export type MoughataaCountAggregateInputType = {
    id?: true
    name?: true
    nameAr?: true
    priority?: true
    _all?: true
  }

  export type MoughataaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moughataa to aggregate.
     */
    where?: MoughataaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moughataas to fetch.
     */
    orderBy?: MoughataaOrderByWithRelationInput | MoughataaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoughataaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moughataas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moughataas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moughataas
    **/
    _count?: true | MoughataaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoughataaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoughataaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoughataaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoughataaMaxAggregateInputType
  }

  export type GetMoughataaAggregateType<T extends MoughataaAggregateArgs> = {
        [P in keyof T & keyof AggregateMoughataa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoughataa[P]>
      : GetScalarType<T[P], AggregateMoughataa[P]>
  }




  export type MoughataaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoughataaWhereInput
    orderBy?: MoughataaOrderByWithAggregationInput | MoughataaOrderByWithAggregationInput[]
    by: MoughataaScalarFieldEnum[] | MoughataaScalarFieldEnum
    having?: MoughataaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoughataaCountAggregateInputType | true
    _avg?: MoughataaAvgAggregateInputType
    _sum?: MoughataaSumAggregateInputType
    _min?: MoughataaMinAggregateInputType
    _max?: MoughataaMaxAggregateInputType
  }

  export type MoughataaGroupByOutputType = {
    id: number
    name: string
    nameAr: string
    priority: number
    _count: MoughataaCountAggregateOutputType | null
    _avg: MoughataaAvgAggregateOutputType | null
    _sum: MoughataaSumAggregateOutputType | null
    _min: MoughataaMinAggregateOutputType | null
    _max: MoughataaMaxAggregateOutputType | null
  }

  type GetMoughataaGroupByPayload<T extends MoughataaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoughataaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoughataaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoughataaGroupByOutputType[P]>
            : GetScalarType<T[P], MoughataaGroupByOutputType[P]>
        }
      >
    >


  export type MoughataaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
    lieux?: boolean | Moughataa$lieuxArgs<ExtArgs>
    _count?: boolean | MoughataaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moughataa"]>

  export type MoughataaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
  }, ExtArgs["result"]["moughataa"]>

  export type MoughataaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
  }, ExtArgs["result"]["moughataa"]>

  export type MoughataaSelectScalar = {
    id?: boolean
    name?: boolean
    nameAr?: boolean
    priority?: boolean
  }

  export type MoughataaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameAr" | "priority", ExtArgs["result"]["moughataa"]>
  export type MoughataaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lieux?: boolean | Moughataa$lieuxArgs<ExtArgs>
    _count?: boolean | MoughataaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MoughataaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MoughataaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoughataaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Moughataa"
    objects: {
      lieux: Prisma.$LieuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nameAr: string
      priority: number
    }, ExtArgs["result"]["moughataa"]>
    composites: {}
  }

  type MoughataaGetPayload<S extends boolean | null | undefined | MoughataaDefaultArgs> = $Result.GetResult<Prisma.$MoughataaPayload, S>

  type MoughataaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoughataaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoughataaCountAggregateInputType | true
    }

  export interface MoughataaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Moughataa'], meta: { name: 'Moughataa' } }
    /**
     * Find zero or one Moughataa that matches the filter.
     * @param {MoughataaFindUniqueArgs} args - Arguments to find a Moughataa
     * @example
     * // Get one Moughataa
     * const moughataa = await prisma.moughataa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoughataaFindUniqueArgs>(args: SelectSubset<T, MoughataaFindUniqueArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Moughataa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoughataaFindUniqueOrThrowArgs} args - Arguments to find a Moughataa
     * @example
     * // Get one Moughataa
     * const moughataa = await prisma.moughataa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoughataaFindUniqueOrThrowArgs>(args: SelectSubset<T, MoughataaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Moughataa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoughataaFindFirstArgs} args - Arguments to find a Moughataa
     * @example
     * // Get one Moughataa
     * const moughataa = await prisma.moughataa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoughataaFindFirstArgs>(args?: SelectSubset<T, MoughataaFindFirstArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Moughataa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoughataaFindFirstOrThrowArgs} args - Arguments to find a Moughataa
     * @example
     * // Get one Moughataa
     * const moughataa = await prisma.moughataa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoughataaFindFirstOrThrowArgs>(args?: SelectSubset<T, MoughataaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Moughataas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoughataaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moughataas
     * const moughataas = await prisma.moughataa.findMany()
     * 
     * // Get first 10 Moughataas
     * const moughataas = await prisma.moughataa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moughataaWithIdOnly = await prisma.moughataa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoughataaFindManyArgs>(args?: SelectSubset<T, MoughataaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Moughataa.
     * @param {MoughataaCreateArgs} args - Arguments to create a Moughataa.
     * @example
     * // Create one Moughataa
     * const Moughataa = await prisma.moughataa.create({
     *   data: {
     *     // ... data to create a Moughataa
     *   }
     * })
     * 
     */
    create<T extends MoughataaCreateArgs>(args: SelectSubset<T, MoughataaCreateArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Moughataas.
     * @param {MoughataaCreateManyArgs} args - Arguments to create many Moughataas.
     * @example
     * // Create many Moughataas
     * const moughataa = await prisma.moughataa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoughataaCreateManyArgs>(args?: SelectSubset<T, MoughataaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moughataas and returns the data saved in the database.
     * @param {MoughataaCreateManyAndReturnArgs} args - Arguments to create many Moughataas.
     * @example
     * // Create many Moughataas
     * const moughataa = await prisma.moughataa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moughataas and only return the `id`
     * const moughataaWithIdOnly = await prisma.moughataa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoughataaCreateManyAndReturnArgs>(args?: SelectSubset<T, MoughataaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Moughataa.
     * @param {MoughataaDeleteArgs} args - Arguments to delete one Moughataa.
     * @example
     * // Delete one Moughataa
     * const Moughataa = await prisma.moughataa.delete({
     *   where: {
     *     // ... filter to delete one Moughataa
     *   }
     * })
     * 
     */
    delete<T extends MoughataaDeleteArgs>(args: SelectSubset<T, MoughataaDeleteArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Moughataa.
     * @param {MoughataaUpdateArgs} args - Arguments to update one Moughataa.
     * @example
     * // Update one Moughataa
     * const moughataa = await prisma.moughataa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoughataaUpdateArgs>(args: SelectSubset<T, MoughataaUpdateArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Moughataas.
     * @param {MoughataaDeleteManyArgs} args - Arguments to filter Moughataas to delete.
     * @example
     * // Delete a few Moughataas
     * const { count } = await prisma.moughataa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoughataaDeleteManyArgs>(args?: SelectSubset<T, MoughataaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moughataas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoughataaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moughataas
     * const moughataa = await prisma.moughataa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoughataaUpdateManyArgs>(args: SelectSubset<T, MoughataaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moughataas and returns the data updated in the database.
     * @param {MoughataaUpdateManyAndReturnArgs} args - Arguments to update many Moughataas.
     * @example
     * // Update many Moughataas
     * const moughataa = await prisma.moughataa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moughataas and only return the `id`
     * const moughataaWithIdOnly = await prisma.moughataa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoughataaUpdateManyAndReturnArgs>(args: SelectSubset<T, MoughataaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Moughataa.
     * @param {MoughataaUpsertArgs} args - Arguments to update or create a Moughataa.
     * @example
     * // Update or create a Moughataa
     * const moughataa = await prisma.moughataa.upsert({
     *   create: {
     *     // ... data to create a Moughataa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Moughataa we want to update
     *   }
     * })
     */
    upsert<T extends MoughataaUpsertArgs>(args: SelectSubset<T, MoughataaUpsertArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Moughataas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoughataaCountArgs} args - Arguments to filter Moughataas to count.
     * @example
     * // Count the number of Moughataas
     * const count = await prisma.moughataa.count({
     *   where: {
     *     // ... the filter for the Moughataas we want to count
     *   }
     * })
    **/
    count<T extends MoughataaCountArgs>(
      args?: Subset<T, MoughataaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoughataaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Moughataa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoughataaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoughataaAggregateArgs>(args: Subset<T, MoughataaAggregateArgs>): Prisma.PrismaPromise<GetMoughataaAggregateType<T>>

    /**
     * Group by Moughataa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoughataaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoughataaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoughataaGroupByArgs['orderBy'] }
        : { orderBy?: MoughataaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoughataaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoughataaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Moughataa model
   */
  readonly fields: MoughataaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Moughataa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoughataaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lieux<T extends Moughataa$lieuxArgs<ExtArgs> = {}>(args?: Subset<T, Moughataa$lieuxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Moughataa model
   */ 
  interface MoughataaFieldRefs {
    readonly id: FieldRef<"Moughataa", 'Int'>
    readonly name: FieldRef<"Moughataa", 'String'>
    readonly nameAr: FieldRef<"Moughataa", 'String'>
    readonly priority: FieldRef<"Moughataa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Moughataa findUnique
   */
  export type MoughataaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * Filter, which Moughataa to fetch.
     */
    where: MoughataaWhereUniqueInput
  }

  /**
   * Moughataa findUniqueOrThrow
   */
  export type MoughataaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * Filter, which Moughataa to fetch.
     */
    where: MoughataaWhereUniqueInput
  }

  /**
   * Moughataa findFirst
   */
  export type MoughataaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * Filter, which Moughataa to fetch.
     */
    where?: MoughataaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moughataas to fetch.
     */
    orderBy?: MoughataaOrderByWithRelationInput | MoughataaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moughataas.
     */
    cursor?: MoughataaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moughataas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moughataas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moughataas.
     */
    distinct?: MoughataaScalarFieldEnum | MoughataaScalarFieldEnum[]
  }

  /**
   * Moughataa findFirstOrThrow
   */
  export type MoughataaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * Filter, which Moughataa to fetch.
     */
    where?: MoughataaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moughataas to fetch.
     */
    orderBy?: MoughataaOrderByWithRelationInput | MoughataaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moughataas.
     */
    cursor?: MoughataaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moughataas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moughataas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moughataas.
     */
    distinct?: MoughataaScalarFieldEnum | MoughataaScalarFieldEnum[]
  }

  /**
   * Moughataa findMany
   */
  export type MoughataaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * Filter, which Moughataas to fetch.
     */
    where?: MoughataaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moughataas to fetch.
     */
    orderBy?: MoughataaOrderByWithRelationInput | MoughataaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moughataas.
     */
    cursor?: MoughataaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moughataas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moughataas.
     */
    skip?: number
    distinct?: MoughataaScalarFieldEnum | MoughataaScalarFieldEnum[]
  }

  /**
   * Moughataa create
   */
  export type MoughataaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * The data needed to create a Moughataa.
     */
    data: XOR<MoughataaCreateInput, MoughataaUncheckedCreateInput>
  }

  /**
   * Moughataa createMany
   */
  export type MoughataaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moughataas.
     */
    data: MoughataaCreateManyInput | MoughataaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Moughataa createManyAndReturn
   */
  export type MoughataaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * The data used to create many Moughataas.
     */
    data: MoughataaCreateManyInput | MoughataaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Moughataa update
   */
  export type MoughataaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * The data needed to update a Moughataa.
     */
    data: XOR<MoughataaUpdateInput, MoughataaUncheckedUpdateInput>
    /**
     * Choose, which Moughataa to update.
     */
    where: MoughataaWhereUniqueInput
  }

  /**
   * Moughataa updateMany
   */
  export type MoughataaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moughataas.
     */
    data: XOR<MoughataaUpdateManyMutationInput, MoughataaUncheckedUpdateManyInput>
    /**
     * Filter which Moughataas to update
     */
    where?: MoughataaWhereInput
  }

  /**
   * Moughataa updateManyAndReturn
   */
  export type MoughataaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * The data used to update Moughataas.
     */
    data: XOR<MoughataaUpdateManyMutationInput, MoughataaUncheckedUpdateManyInput>
    /**
     * Filter which Moughataas to update
     */
    where?: MoughataaWhereInput
  }

  /**
   * Moughataa upsert
   */
  export type MoughataaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * The filter to search for the Moughataa to update in case it exists.
     */
    where: MoughataaWhereUniqueInput
    /**
     * In case the Moughataa found by the `where` argument doesn't exist, create a new Moughataa with this data.
     */
    create: XOR<MoughataaCreateInput, MoughataaUncheckedCreateInput>
    /**
     * In case the Moughataa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoughataaUpdateInput, MoughataaUncheckedUpdateInput>
  }

  /**
   * Moughataa delete
   */
  export type MoughataaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    /**
     * Filter which Moughataa to delete.
     */
    where: MoughataaWhereUniqueInput
  }

  /**
   * Moughataa deleteMany
   */
  export type MoughataaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moughataas to delete
     */
    where?: MoughataaWhereInput
  }

  /**
   * Moughataa.lieux
   */
  export type Moughataa$lieuxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    where?: LieuWhereInput
    orderBy?: LieuOrderByWithRelationInput | LieuOrderByWithRelationInput[]
    cursor?: LieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LieuScalarFieldEnum | LieuScalarFieldEnum[]
  }

  /**
   * Moughataa without action
   */
  export type MoughataaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
  }


  /**
   * Model GPSLocation
   */

  export type AggregateGPSLocation = {
    _count: GPSLocationCountAggregateOutputType | null
    _avg: GPSLocationAvgAggregateOutputType | null
    _sum: GPSLocationSumAggregateOutputType | null
    _min: GPSLocationMinAggregateOutputType | null
    _max: GPSLocationMaxAggregateOutputType | null
  }

  export type GPSLocationAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type GPSLocationSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type GPSLocationMinAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type GPSLocationMaxAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type GPSLocationCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    _all: number
  }


  export type GPSLocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type GPSLocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type GPSLocationMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type GPSLocationMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type GPSLocationCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type GPSLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GPSLocation to aggregate.
     */
    where?: GPSLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GPSLocations to fetch.
     */
    orderBy?: GPSLocationOrderByWithRelationInput | GPSLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GPSLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GPSLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GPSLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GPSLocations
    **/
    _count?: true | GPSLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GPSLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GPSLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GPSLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GPSLocationMaxAggregateInputType
  }

  export type GetGPSLocationAggregateType<T extends GPSLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateGPSLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGPSLocation[P]>
      : GetScalarType<T[P], AggregateGPSLocation[P]>
  }




  export type GPSLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GPSLocationWhereInput
    orderBy?: GPSLocationOrderByWithAggregationInput | GPSLocationOrderByWithAggregationInput[]
    by: GPSLocationScalarFieldEnum[] | GPSLocationScalarFieldEnum
    having?: GPSLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GPSLocationCountAggregateInputType | true
    _avg?: GPSLocationAvgAggregateInputType
    _sum?: GPSLocationSumAggregateInputType
    _min?: GPSLocationMinAggregateInputType
    _max?: GPSLocationMaxAggregateInputType
  }

  export type GPSLocationGroupByOutputType = {
    id: number
    latitude: number
    longitude: number
    _count: GPSLocationCountAggregateOutputType | null
    _avg: GPSLocationAvgAggregateOutputType | null
    _sum: GPSLocationSumAggregateOutputType | null
    _min: GPSLocationMinAggregateOutputType | null
    _max: GPSLocationMaxAggregateOutputType | null
  }

  type GetGPSLocationGroupByPayload<T extends GPSLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GPSLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GPSLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GPSLocationGroupByOutputType[P]>
            : GetScalarType<T[P], GPSLocationGroupByOutputType[P]>
        }
      >
    >


  export type GPSLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    lieux?: boolean | GPSLocation$lieuxArgs<ExtArgs>
    _count?: boolean | GPSLocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gPSLocation"]>

  export type GPSLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["gPSLocation"]>

  export type GPSLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["gPSLocation"]>

  export type GPSLocationSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type GPSLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latitude" | "longitude", ExtArgs["result"]["gPSLocation"]>
  export type GPSLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lieux?: boolean | GPSLocation$lieuxArgs<ExtArgs>
    _count?: boolean | GPSLocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GPSLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GPSLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GPSLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GPSLocation"
    objects: {
      lieux: Prisma.$LieuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      latitude: number
      longitude: number
    }, ExtArgs["result"]["gPSLocation"]>
    composites: {}
  }

  type GPSLocationGetPayload<S extends boolean | null | undefined | GPSLocationDefaultArgs> = $Result.GetResult<Prisma.$GPSLocationPayload, S>

  type GPSLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GPSLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GPSLocationCountAggregateInputType | true
    }

  export interface GPSLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GPSLocation'], meta: { name: 'GPSLocation' } }
    /**
     * Find zero or one GPSLocation that matches the filter.
     * @param {GPSLocationFindUniqueArgs} args - Arguments to find a GPSLocation
     * @example
     * // Get one GPSLocation
     * const gPSLocation = await prisma.gPSLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GPSLocationFindUniqueArgs>(args: SelectSubset<T, GPSLocationFindUniqueArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one GPSLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GPSLocationFindUniqueOrThrowArgs} args - Arguments to find a GPSLocation
     * @example
     * // Get one GPSLocation
     * const gPSLocation = await prisma.gPSLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GPSLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, GPSLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first GPSLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GPSLocationFindFirstArgs} args - Arguments to find a GPSLocation
     * @example
     * // Get one GPSLocation
     * const gPSLocation = await prisma.gPSLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GPSLocationFindFirstArgs>(args?: SelectSubset<T, GPSLocationFindFirstArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first GPSLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GPSLocationFindFirstOrThrowArgs} args - Arguments to find a GPSLocation
     * @example
     * // Get one GPSLocation
     * const gPSLocation = await prisma.gPSLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GPSLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, GPSLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more GPSLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GPSLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GPSLocations
     * const gPSLocations = await prisma.gPSLocation.findMany()
     * 
     * // Get first 10 GPSLocations
     * const gPSLocations = await prisma.gPSLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gPSLocationWithIdOnly = await prisma.gPSLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GPSLocationFindManyArgs>(args?: SelectSubset<T, GPSLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a GPSLocation.
     * @param {GPSLocationCreateArgs} args - Arguments to create a GPSLocation.
     * @example
     * // Create one GPSLocation
     * const GPSLocation = await prisma.gPSLocation.create({
     *   data: {
     *     // ... data to create a GPSLocation
     *   }
     * })
     * 
     */
    create<T extends GPSLocationCreateArgs>(args: SelectSubset<T, GPSLocationCreateArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many GPSLocations.
     * @param {GPSLocationCreateManyArgs} args - Arguments to create many GPSLocations.
     * @example
     * // Create many GPSLocations
     * const gPSLocation = await prisma.gPSLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GPSLocationCreateManyArgs>(args?: SelectSubset<T, GPSLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GPSLocations and returns the data saved in the database.
     * @param {GPSLocationCreateManyAndReturnArgs} args - Arguments to create many GPSLocations.
     * @example
     * // Create many GPSLocations
     * const gPSLocation = await prisma.gPSLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GPSLocations and only return the `id`
     * const gPSLocationWithIdOnly = await prisma.gPSLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GPSLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, GPSLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a GPSLocation.
     * @param {GPSLocationDeleteArgs} args - Arguments to delete one GPSLocation.
     * @example
     * // Delete one GPSLocation
     * const GPSLocation = await prisma.gPSLocation.delete({
     *   where: {
     *     // ... filter to delete one GPSLocation
     *   }
     * })
     * 
     */
    delete<T extends GPSLocationDeleteArgs>(args: SelectSubset<T, GPSLocationDeleteArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one GPSLocation.
     * @param {GPSLocationUpdateArgs} args - Arguments to update one GPSLocation.
     * @example
     * // Update one GPSLocation
     * const gPSLocation = await prisma.gPSLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GPSLocationUpdateArgs>(args: SelectSubset<T, GPSLocationUpdateArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more GPSLocations.
     * @param {GPSLocationDeleteManyArgs} args - Arguments to filter GPSLocations to delete.
     * @example
     * // Delete a few GPSLocations
     * const { count } = await prisma.gPSLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GPSLocationDeleteManyArgs>(args?: SelectSubset<T, GPSLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GPSLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GPSLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GPSLocations
     * const gPSLocation = await prisma.gPSLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GPSLocationUpdateManyArgs>(args: SelectSubset<T, GPSLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GPSLocations and returns the data updated in the database.
     * @param {GPSLocationUpdateManyAndReturnArgs} args - Arguments to update many GPSLocations.
     * @example
     * // Update many GPSLocations
     * const gPSLocation = await prisma.gPSLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GPSLocations and only return the `id`
     * const gPSLocationWithIdOnly = await prisma.gPSLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GPSLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, GPSLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one GPSLocation.
     * @param {GPSLocationUpsertArgs} args - Arguments to update or create a GPSLocation.
     * @example
     * // Update or create a GPSLocation
     * const gPSLocation = await prisma.gPSLocation.upsert({
     *   create: {
     *     // ... data to create a GPSLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GPSLocation we want to update
     *   }
     * })
     */
    upsert<T extends GPSLocationUpsertArgs>(args: SelectSubset<T, GPSLocationUpsertArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of GPSLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GPSLocationCountArgs} args - Arguments to filter GPSLocations to count.
     * @example
     * // Count the number of GPSLocations
     * const count = await prisma.gPSLocation.count({
     *   where: {
     *     // ... the filter for the GPSLocations we want to count
     *   }
     * })
    **/
    count<T extends GPSLocationCountArgs>(
      args?: Subset<T, GPSLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GPSLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GPSLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GPSLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GPSLocationAggregateArgs>(args: Subset<T, GPSLocationAggregateArgs>): Prisma.PrismaPromise<GetGPSLocationAggregateType<T>>

    /**
     * Group by GPSLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GPSLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GPSLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GPSLocationGroupByArgs['orderBy'] }
        : { orderBy?: GPSLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GPSLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGPSLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GPSLocation model
   */
  readonly fields: GPSLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GPSLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GPSLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lieux<T extends GPSLocation$lieuxArgs<ExtArgs> = {}>(args?: Subset<T, GPSLocation$lieuxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GPSLocation model
   */ 
  interface GPSLocationFieldRefs {
    readonly id: FieldRef<"GPSLocation", 'Int'>
    readonly latitude: FieldRef<"GPSLocation", 'Float'>
    readonly longitude: FieldRef<"GPSLocation", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * GPSLocation findUnique
   */
  export type GPSLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * Filter, which GPSLocation to fetch.
     */
    where: GPSLocationWhereUniqueInput
  }

  /**
   * GPSLocation findUniqueOrThrow
   */
  export type GPSLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * Filter, which GPSLocation to fetch.
     */
    where: GPSLocationWhereUniqueInput
  }

  /**
   * GPSLocation findFirst
   */
  export type GPSLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * Filter, which GPSLocation to fetch.
     */
    where?: GPSLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GPSLocations to fetch.
     */
    orderBy?: GPSLocationOrderByWithRelationInput | GPSLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GPSLocations.
     */
    cursor?: GPSLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GPSLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GPSLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GPSLocations.
     */
    distinct?: GPSLocationScalarFieldEnum | GPSLocationScalarFieldEnum[]
  }

  /**
   * GPSLocation findFirstOrThrow
   */
  export type GPSLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * Filter, which GPSLocation to fetch.
     */
    where?: GPSLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GPSLocations to fetch.
     */
    orderBy?: GPSLocationOrderByWithRelationInput | GPSLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GPSLocations.
     */
    cursor?: GPSLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GPSLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GPSLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GPSLocations.
     */
    distinct?: GPSLocationScalarFieldEnum | GPSLocationScalarFieldEnum[]
  }

  /**
   * GPSLocation findMany
   */
  export type GPSLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * Filter, which GPSLocations to fetch.
     */
    where?: GPSLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GPSLocations to fetch.
     */
    orderBy?: GPSLocationOrderByWithRelationInput | GPSLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GPSLocations.
     */
    cursor?: GPSLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GPSLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GPSLocations.
     */
    skip?: number
    distinct?: GPSLocationScalarFieldEnum | GPSLocationScalarFieldEnum[]
  }

  /**
   * GPSLocation create
   */
  export type GPSLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a GPSLocation.
     */
    data: XOR<GPSLocationCreateInput, GPSLocationUncheckedCreateInput>
  }

  /**
   * GPSLocation createMany
   */
  export type GPSLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GPSLocations.
     */
    data: GPSLocationCreateManyInput | GPSLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GPSLocation createManyAndReturn
   */
  export type GPSLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * The data used to create many GPSLocations.
     */
    data: GPSLocationCreateManyInput | GPSLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GPSLocation update
   */
  export type GPSLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a GPSLocation.
     */
    data: XOR<GPSLocationUpdateInput, GPSLocationUncheckedUpdateInput>
    /**
     * Choose, which GPSLocation to update.
     */
    where: GPSLocationWhereUniqueInput
  }

  /**
   * GPSLocation updateMany
   */
  export type GPSLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GPSLocations.
     */
    data: XOR<GPSLocationUpdateManyMutationInput, GPSLocationUncheckedUpdateManyInput>
    /**
     * Filter which GPSLocations to update
     */
    where?: GPSLocationWhereInput
  }

  /**
   * GPSLocation updateManyAndReturn
   */
  export type GPSLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * The data used to update GPSLocations.
     */
    data: XOR<GPSLocationUpdateManyMutationInput, GPSLocationUncheckedUpdateManyInput>
    /**
     * Filter which GPSLocations to update
     */
    where?: GPSLocationWhereInput
  }

  /**
   * GPSLocation upsert
   */
  export type GPSLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the GPSLocation to update in case it exists.
     */
    where: GPSLocationWhereUniqueInput
    /**
     * In case the GPSLocation found by the `where` argument doesn't exist, create a new GPSLocation with this data.
     */
    create: XOR<GPSLocationCreateInput, GPSLocationUncheckedCreateInput>
    /**
     * In case the GPSLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GPSLocationUpdateInput, GPSLocationUncheckedUpdateInput>
  }

  /**
   * GPSLocation delete
   */
  export type GPSLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    /**
     * Filter which GPSLocation to delete.
     */
    where: GPSLocationWhereUniqueInput
  }

  /**
   * GPSLocation deleteMany
   */
  export type GPSLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GPSLocations to delete
     */
    where?: GPSLocationWhereInput
  }

  /**
   * GPSLocation.lieux
   */
  export type GPSLocation$lieuxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    where?: LieuWhereInput
    orderBy?: LieuOrderByWithRelationInput | LieuOrderByWithRelationInput[]
    cursor?: LieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LieuScalarFieldEnum | LieuScalarFieldEnum[]
  }

  /**
   * GPSLocation without action
   */
  export type GPSLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
  }


  /**
   * Model Lieu
   */

  export type AggregateLieu = {
    _count: LieuCountAggregateOutputType | null
    _avg: LieuAvgAggregateOutputType | null
    _sum: LieuSumAggregateOutputType | null
    _min: LieuMinAggregateOutputType | null
    _max: LieuMaxAggregateOutputType | null
  }

  export type LieuAvgAggregateOutputType = {
    id: number | null
    wilayaId: number | null
    moughataaId: number | null
    gpsLocationId: number | null
  }

  export type LieuSumAggregateOutputType = {
    id: number | null
    wilayaId: number | null
    moughataaId: number | null
    gpsLocationId: number | null
  }

  export type LieuMinAggregateOutputType = {
    id: number | null
    wilayaId: number | null
    moughataaId: number | null
    gpsLocationId: number | null
  }

  export type LieuMaxAggregateOutputType = {
    id: number | null
    wilayaId: number | null
    moughataaId: number | null
    gpsLocationId: number | null
  }

  export type LieuCountAggregateOutputType = {
    id: number
    wilayaId: number
    moughataaId: number
    gpsLocationId: number
    _all: number
  }


  export type LieuAvgAggregateInputType = {
    id?: true
    wilayaId?: true
    moughataaId?: true
    gpsLocationId?: true
  }

  export type LieuSumAggregateInputType = {
    id?: true
    wilayaId?: true
    moughataaId?: true
    gpsLocationId?: true
  }

  export type LieuMinAggregateInputType = {
    id?: true
    wilayaId?: true
    moughataaId?: true
    gpsLocationId?: true
  }

  export type LieuMaxAggregateInputType = {
    id?: true
    wilayaId?: true
    moughataaId?: true
    gpsLocationId?: true
  }

  export type LieuCountAggregateInputType = {
    id?: true
    wilayaId?: true
    moughataaId?: true
    gpsLocationId?: true
    _all?: true
  }

  export type LieuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lieu to aggregate.
     */
    where?: LieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lieus to fetch.
     */
    orderBy?: LieuOrderByWithRelationInput | LieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lieus
    **/
    _count?: true | LieuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LieuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LieuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LieuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LieuMaxAggregateInputType
  }

  export type GetLieuAggregateType<T extends LieuAggregateArgs> = {
        [P in keyof T & keyof AggregateLieu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLieu[P]>
      : GetScalarType<T[P], AggregateLieu[P]>
  }




  export type LieuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LieuWhereInput
    orderBy?: LieuOrderByWithAggregationInput | LieuOrderByWithAggregationInput[]
    by: LieuScalarFieldEnum[] | LieuScalarFieldEnum
    having?: LieuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LieuCountAggregateInputType | true
    _avg?: LieuAvgAggregateInputType
    _sum?: LieuSumAggregateInputType
    _min?: LieuMinAggregateInputType
    _max?: LieuMaxAggregateInputType
  }

  export type LieuGroupByOutputType = {
    id: number
    wilayaId: number
    moughataaId: number | null
    gpsLocationId: number | null
    _count: LieuCountAggregateOutputType | null
    _avg: LieuAvgAggregateOutputType | null
    _sum: LieuSumAggregateOutputType | null
    _min: LieuMinAggregateOutputType | null
    _max: LieuMaxAggregateOutputType | null
  }

  type GetLieuGroupByPayload<T extends LieuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LieuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LieuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LieuGroupByOutputType[P]>
            : GetScalarType<T[P], LieuGroupByOutputType[P]>
        }
      >
    >


  export type LieuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wilayaId?: boolean
    moughataaId?: boolean
    gpsLocationId?: boolean
    wilaya?: boolean | Lieu$wilayaArgs<ExtArgs>
    moughataa?: boolean | Lieu$moughataaArgs<ExtArgs>
    gpsLocation?: boolean | Lieu$gpsLocationArgs<ExtArgs>
    annonces?: boolean | Lieu$annoncesArgs<ExtArgs>
    _count?: boolean | LieuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lieu"]>

  export type LieuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wilayaId?: boolean
    moughataaId?: boolean
    gpsLocationId?: boolean
    wilaya?: boolean | Lieu$wilayaArgs<ExtArgs>
    moughataa?: boolean | Lieu$moughataaArgs<ExtArgs>
    gpsLocation?: boolean | Lieu$gpsLocationArgs<ExtArgs>
  }, ExtArgs["result"]["lieu"]>

  export type LieuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wilayaId?: boolean
    moughataaId?: boolean
    gpsLocationId?: boolean
    wilaya?: boolean | Lieu$wilayaArgs<ExtArgs>
    moughataa?: boolean | Lieu$moughataaArgs<ExtArgs>
    gpsLocation?: boolean | Lieu$gpsLocationArgs<ExtArgs>
  }, ExtArgs["result"]["lieu"]>

  export type LieuSelectScalar = {
    id?: boolean
    wilayaId?: boolean
    moughataaId?: boolean
    gpsLocationId?: boolean
  }

  export type LieuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wilayaId" | "moughataaId" | "gpsLocationId", ExtArgs["result"]["lieu"]>
  export type LieuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wilaya?: boolean | Lieu$wilayaArgs<ExtArgs>
    moughataa?: boolean | Lieu$moughataaArgs<ExtArgs>
    gpsLocation?: boolean | Lieu$gpsLocationArgs<ExtArgs>
    annonces?: boolean | Lieu$annoncesArgs<ExtArgs>
    _count?: boolean | LieuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LieuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wilaya?: boolean | Lieu$wilayaArgs<ExtArgs>
    moughataa?: boolean | Lieu$moughataaArgs<ExtArgs>
    gpsLocation?: boolean | Lieu$gpsLocationArgs<ExtArgs>
  }
  export type LieuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wilaya?: boolean | Lieu$wilayaArgs<ExtArgs>
    moughataa?: boolean | Lieu$moughataaArgs<ExtArgs>
    gpsLocation?: boolean | Lieu$gpsLocationArgs<ExtArgs>
  }

  export type $LieuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lieu"
    objects: {
      wilaya: Prisma.$WilayaPayload<ExtArgs> | null
      moughataa: Prisma.$MoughataaPayload<ExtArgs> | null
      gpsLocation: Prisma.$GPSLocationPayload<ExtArgs> | null
      annonces: Prisma.$AnnoncePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wilayaId: number
      moughataaId: number | null
      gpsLocationId: number | null
    }, ExtArgs["result"]["lieu"]>
    composites: {}
  }

  type LieuGetPayload<S extends boolean | null | undefined | LieuDefaultArgs> = $Result.GetResult<Prisma.$LieuPayload, S>

  type LieuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LieuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LieuCountAggregateInputType | true
    }

  export interface LieuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lieu'], meta: { name: 'Lieu' } }
    /**
     * Find zero or one Lieu that matches the filter.
     * @param {LieuFindUniqueArgs} args - Arguments to find a Lieu
     * @example
     * // Get one Lieu
     * const lieu = await prisma.lieu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LieuFindUniqueArgs>(args: SelectSubset<T, LieuFindUniqueArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Lieu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LieuFindUniqueOrThrowArgs} args - Arguments to find a Lieu
     * @example
     * // Get one Lieu
     * const lieu = await prisma.lieu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LieuFindUniqueOrThrowArgs>(args: SelectSubset<T, LieuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Lieu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LieuFindFirstArgs} args - Arguments to find a Lieu
     * @example
     * // Get one Lieu
     * const lieu = await prisma.lieu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LieuFindFirstArgs>(args?: SelectSubset<T, LieuFindFirstArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Lieu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LieuFindFirstOrThrowArgs} args - Arguments to find a Lieu
     * @example
     * // Get one Lieu
     * const lieu = await prisma.lieu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LieuFindFirstOrThrowArgs>(args?: SelectSubset<T, LieuFindFirstOrThrowArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Lieus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LieuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lieus
     * const lieus = await prisma.lieu.findMany()
     * 
     * // Get first 10 Lieus
     * const lieus = await prisma.lieu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lieuWithIdOnly = await prisma.lieu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LieuFindManyArgs>(args?: SelectSubset<T, LieuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Lieu.
     * @param {LieuCreateArgs} args - Arguments to create a Lieu.
     * @example
     * // Create one Lieu
     * const Lieu = await prisma.lieu.create({
     *   data: {
     *     // ... data to create a Lieu
     *   }
     * })
     * 
     */
    create<T extends LieuCreateArgs>(args: SelectSubset<T, LieuCreateArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Lieus.
     * @param {LieuCreateManyArgs} args - Arguments to create many Lieus.
     * @example
     * // Create many Lieus
     * const lieu = await prisma.lieu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LieuCreateManyArgs>(args?: SelectSubset<T, LieuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lieus and returns the data saved in the database.
     * @param {LieuCreateManyAndReturnArgs} args - Arguments to create many Lieus.
     * @example
     * // Create many Lieus
     * const lieu = await prisma.lieu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lieus and only return the `id`
     * const lieuWithIdOnly = await prisma.lieu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LieuCreateManyAndReturnArgs>(args?: SelectSubset<T, LieuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Lieu.
     * @param {LieuDeleteArgs} args - Arguments to delete one Lieu.
     * @example
     * // Delete one Lieu
     * const Lieu = await prisma.lieu.delete({
     *   where: {
     *     // ... filter to delete one Lieu
     *   }
     * })
     * 
     */
    delete<T extends LieuDeleteArgs>(args: SelectSubset<T, LieuDeleteArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Lieu.
     * @param {LieuUpdateArgs} args - Arguments to update one Lieu.
     * @example
     * // Update one Lieu
     * const lieu = await prisma.lieu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LieuUpdateArgs>(args: SelectSubset<T, LieuUpdateArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Lieus.
     * @param {LieuDeleteManyArgs} args - Arguments to filter Lieus to delete.
     * @example
     * // Delete a few Lieus
     * const { count } = await prisma.lieu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LieuDeleteManyArgs>(args?: SelectSubset<T, LieuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lieus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LieuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lieus
     * const lieu = await prisma.lieu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LieuUpdateManyArgs>(args: SelectSubset<T, LieuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lieus and returns the data updated in the database.
     * @param {LieuUpdateManyAndReturnArgs} args - Arguments to update many Lieus.
     * @example
     * // Update many Lieus
     * const lieu = await prisma.lieu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lieus and only return the `id`
     * const lieuWithIdOnly = await prisma.lieu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LieuUpdateManyAndReturnArgs>(args: SelectSubset<T, LieuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Lieu.
     * @param {LieuUpsertArgs} args - Arguments to update or create a Lieu.
     * @example
     * // Update or create a Lieu
     * const lieu = await prisma.lieu.upsert({
     *   create: {
     *     // ... data to create a Lieu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lieu we want to update
     *   }
     * })
     */
    upsert<T extends LieuUpsertArgs>(args: SelectSubset<T, LieuUpsertArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Lieus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LieuCountArgs} args - Arguments to filter Lieus to count.
     * @example
     * // Count the number of Lieus
     * const count = await prisma.lieu.count({
     *   where: {
     *     // ... the filter for the Lieus we want to count
     *   }
     * })
    **/
    count<T extends LieuCountArgs>(
      args?: Subset<T, LieuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LieuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lieu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LieuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LieuAggregateArgs>(args: Subset<T, LieuAggregateArgs>): Prisma.PrismaPromise<GetLieuAggregateType<T>>

    /**
     * Group by Lieu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LieuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LieuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LieuGroupByArgs['orderBy'] }
        : { orderBy?: LieuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LieuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLieuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lieu model
   */
  readonly fields: LieuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lieu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LieuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wilaya<T extends Lieu$wilayaArgs<ExtArgs> = {}>(args?: Subset<T, Lieu$wilayaArgs<ExtArgs>>): Prisma__WilayaClient<$Result.GetResult<Prisma.$WilayaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    moughataa<T extends Lieu$moughataaArgs<ExtArgs> = {}>(args?: Subset<T, Lieu$moughataaArgs<ExtArgs>>): Prisma__MoughataaClient<$Result.GetResult<Prisma.$MoughataaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    gpsLocation<T extends Lieu$gpsLocationArgs<ExtArgs> = {}>(args?: Subset<T, Lieu$gpsLocationArgs<ExtArgs>>): Prisma__GPSLocationClient<$Result.GetResult<Prisma.$GPSLocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    annonces<T extends Lieu$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, Lieu$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lieu model
   */ 
  interface LieuFieldRefs {
    readonly id: FieldRef<"Lieu", 'Int'>
    readonly wilayaId: FieldRef<"Lieu", 'Int'>
    readonly moughataaId: FieldRef<"Lieu", 'Int'>
    readonly gpsLocationId: FieldRef<"Lieu", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lieu findUnique
   */
  export type LieuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * Filter, which Lieu to fetch.
     */
    where: LieuWhereUniqueInput
  }

  /**
   * Lieu findUniqueOrThrow
   */
  export type LieuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * Filter, which Lieu to fetch.
     */
    where: LieuWhereUniqueInput
  }

  /**
   * Lieu findFirst
   */
  export type LieuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * Filter, which Lieu to fetch.
     */
    where?: LieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lieus to fetch.
     */
    orderBy?: LieuOrderByWithRelationInput | LieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lieus.
     */
    cursor?: LieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lieus.
     */
    distinct?: LieuScalarFieldEnum | LieuScalarFieldEnum[]
  }

  /**
   * Lieu findFirstOrThrow
   */
  export type LieuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * Filter, which Lieu to fetch.
     */
    where?: LieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lieus to fetch.
     */
    orderBy?: LieuOrderByWithRelationInput | LieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lieus.
     */
    cursor?: LieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lieus.
     */
    distinct?: LieuScalarFieldEnum | LieuScalarFieldEnum[]
  }

  /**
   * Lieu findMany
   */
  export type LieuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * Filter, which Lieus to fetch.
     */
    where?: LieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lieus to fetch.
     */
    orderBy?: LieuOrderByWithRelationInput | LieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lieus.
     */
    cursor?: LieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lieus.
     */
    skip?: number
    distinct?: LieuScalarFieldEnum | LieuScalarFieldEnum[]
  }

  /**
   * Lieu create
   */
  export type LieuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * The data needed to create a Lieu.
     */
    data: XOR<LieuCreateInput, LieuUncheckedCreateInput>
  }

  /**
   * Lieu createMany
   */
  export type LieuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lieus.
     */
    data: LieuCreateManyInput | LieuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lieu createManyAndReturn
   */
  export type LieuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * The data used to create many Lieus.
     */
    data: LieuCreateManyInput | LieuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lieu update
   */
  export type LieuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * The data needed to update a Lieu.
     */
    data: XOR<LieuUpdateInput, LieuUncheckedUpdateInput>
    /**
     * Choose, which Lieu to update.
     */
    where: LieuWhereUniqueInput
  }

  /**
   * Lieu updateMany
   */
  export type LieuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lieus.
     */
    data: XOR<LieuUpdateManyMutationInput, LieuUncheckedUpdateManyInput>
    /**
     * Filter which Lieus to update
     */
    where?: LieuWhereInput
  }

  /**
   * Lieu updateManyAndReturn
   */
  export type LieuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * The data used to update Lieus.
     */
    data: XOR<LieuUpdateManyMutationInput, LieuUncheckedUpdateManyInput>
    /**
     * Filter which Lieus to update
     */
    where?: LieuWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lieu upsert
   */
  export type LieuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * The filter to search for the Lieu to update in case it exists.
     */
    where: LieuWhereUniqueInput
    /**
     * In case the Lieu found by the `where` argument doesn't exist, create a new Lieu with this data.
     */
    create: XOR<LieuCreateInput, LieuUncheckedCreateInput>
    /**
     * In case the Lieu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LieuUpdateInput, LieuUncheckedUpdateInput>
  }

  /**
   * Lieu delete
   */
  export type LieuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
    /**
     * Filter which Lieu to delete.
     */
    where: LieuWhereUniqueInput
  }

  /**
   * Lieu deleteMany
   */
  export type LieuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lieus to delete
     */
    where?: LieuWhereInput
  }

  /**
   * Lieu.wilaya
   */
  export type Lieu$wilayaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wilaya
     */
    select?: WilayaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wilaya
     */
    omit?: WilayaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WilayaInclude<ExtArgs> | null
    where?: WilayaWhereInput
  }

  /**
   * Lieu.moughataa
   */
  export type Lieu$moughataaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moughataa
     */
    select?: MoughataaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moughataa
     */
    omit?: MoughataaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoughataaInclude<ExtArgs> | null
    where?: MoughataaWhereInput
  }

  /**
   * Lieu.gpsLocation
   */
  export type Lieu$gpsLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GPSLocation
     */
    select?: GPSLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GPSLocation
     */
    omit?: GPSLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GPSLocationInclude<ExtArgs> | null
    where?: GPSLocationWhereInput
  }

  /**
   * Lieu.annonces
   */
  export type Lieu$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Lieu without action
   */
  export type LieuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lieu
     */
    select?: LieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lieu
     */
    omit?: LieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LieuInclude<ExtArgs> | null
  }


  /**
   * Model Annonce
   */

  export type AggregateAnnonce = {
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  export type AnnonceAvgAggregateOutputType = {
    id: number | null
    typeAnnonceId: number | null
    categorieId: number | null
    lieuId: number | null
    userId: number | null
    subcategorieId: number | null
    price: number | null
  }

  export type AnnonceSumAggregateOutputType = {
    id: number | null
    typeAnnonceId: number | null
    categorieId: number | null
    lieuId: number | null
    userId: number | null
    subcategorieId: number | null
    price: number | null
  }

  export type AnnonceMinAggregateOutputType = {
    id: number | null
    typeAnnonceId: number | null
    categorieId: number | null
    lieuId: number | null
    userId: number | null
    subcategorieId: number | null
    title: string | null
    description: string | null
    price: number | null
    contact: string | null
    haveImage: boolean | null
    firstImagePath: string | null
    status: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type AnnonceMaxAggregateOutputType = {
    id: number | null
    typeAnnonceId: number | null
    categorieId: number | null
    lieuId: number | null
    userId: number | null
    subcategorieId: number | null
    title: string | null
    description: string | null
    price: number | null
    contact: string | null
    haveImage: boolean | null
    firstImagePath: string | null
    status: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type AnnonceCountAggregateOutputType = {
    id: number
    typeAnnonceId: number
    categorieId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: number
    description: number
    price: number
    contact: number
    haveImage: number
    firstImagePath: number
    status: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type AnnonceAvgAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    categorieId?: true
    lieuId?: true
    userId?: true
    subcategorieId?: true
    price?: true
  }

  export type AnnonceSumAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    categorieId?: true
    lieuId?: true
    userId?: true
    subcategorieId?: true
    price?: true
  }

  export type AnnonceMinAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    categorieId?: true
    lieuId?: true
    userId?: true
    subcategorieId?: true
    title?: true
    description?: true
    price?: true
    contact?: true
    haveImage?: true
    firstImagePath?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type AnnonceMaxAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    categorieId?: true
    lieuId?: true
    userId?: true
    subcategorieId?: true
    title?: true
    description?: true
    price?: true
    contact?: true
    haveImage?: true
    firstImagePath?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type AnnonceCountAggregateInputType = {
    id?: true
    typeAnnonceId?: true
    categorieId?: true
    lieuId?: true
    userId?: true
    subcategorieId?: true
    title?: true
    description?: true
    price?: true
    contact?: true
    haveImage?: true
    firstImagePath?: true
    status?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AnnonceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonce to aggregate.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annonces
    **/
    _count?: true | AnnonceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnonceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnonceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnonceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnonceMaxAggregateInputType
  }

  export type GetAnnonceAggregateType<T extends AnnonceAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnonce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonce[P]>
      : GetScalarType<T[P], AggregateAnnonce[P]>
  }




  export type AnnonceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithAggregationInput | AnnonceOrderByWithAggregationInput[]
    by: AnnonceScalarFieldEnum[] | AnnonceScalarFieldEnum
    having?: AnnonceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnonceCountAggregateInputType | true
    _avg?: AnnonceAvgAggregateInputType
    _sum?: AnnonceSumAggregateInputType
    _min?: AnnonceMinAggregateInputType
    _max?: AnnonceMaxAggregateInputType
  }

  export type AnnonceGroupByOutputType = {
    id: number
    typeAnnonceId: number
    categorieId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage: boolean
    firstImagePath: string
    status: string
    updatedAt: Date
    createdAt: Date
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  type GetAnnonceGroupByPayload<T extends AnnonceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnonceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnonceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
            : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
        }
      >
    >


  export type AnnonceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeAnnonceId?: boolean
    categorieId?: boolean
    lieuId?: boolean
    userId?: boolean
    subcategorieId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    contact?: boolean
    haveImage?: boolean
    firstImagePath?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
    categorie?: boolean | CategoryDefaultArgs<ExtArgs>
    lieu?: boolean | LieuDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Annonce$imagesArgs<ExtArgs>
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeAnnonceId?: boolean
    categorieId?: boolean
    lieuId?: boolean
    userId?: boolean
    subcategorieId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    contact?: boolean
    haveImage?: boolean
    firstImagePath?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
    categorie?: boolean | CategoryDefaultArgs<ExtArgs>
    lieu?: boolean | LieuDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeAnnonceId?: boolean
    categorieId?: boolean
    lieuId?: boolean
    userId?: boolean
    subcategorieId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    contact?: boolean
    haveImage?: boolean
    firstImagePath?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
    categorie?: boolean | CategoryDefaultArgs<ExtArgs>
    lieu?: boolean | LieuDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectScalar = {
    id?: boolean
    typeAnnonceId?: boolean
    categorieId?: boolean
    lieuId?: boolean
    userId?: boolean
    subcategorieId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    contact?: boolean
    haveImage?: boolean
    firstImagePath?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type AnnonceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "typeAnnonceId" | "categorieId" | "lieuId" | "userId" | "subcategorieId" | "title" | "description" | "price" | "contact" | "haveImage" | "firstImagePath" | "status" | "updatedAt" | "createdAt", ExtArgs["result"]["annonce"]>
  export type AnnonceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
    categorie?: boolean | CategoryDefaultArgs<ExtArgs>
    lieu?: boolean | LieuDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Annonce$imagesArgs<ExtArgs>
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnonceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
    categorie?: boolean | CategoryDefaultArgs<ExtArgs>
    lieu?: boolean | LieuDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnonceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeAnnonce?: boolean | TypeAnnonceDefaultArgs<ExtArgs>
    categorie?: boolean | CategoryDefaultArgs<ExtArgs>
    lieu?: boolean | LieuDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnoncePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annonce"
    objects: {
      typeAnnonce: Prisma.$TypeAnnoncePayload<ExtArgs>
      categorie: Prisma.$CategoryPayload<ExtArgs>
      lieu: Prisma.$LieuPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      typeAnnonceId: number
      categorieId: number
      lieuId: number
      userId: number
      subcategorieId: number
      title: string
      description: string
      price: number
      contact: string
      haveImage: boolean
      firstImagePath: string
      status: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["annonce"]>
    composites: {}
  }

  type AnnonceGetPayload<S extends boolean | null | undefined | AnnonceDefaultArgs> = $Result.GetResult<Prisma.$AnnoncePayload, S>

  type AnnonceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnonceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnonceCountAggregateInputType | true
    }

  export interface AnnonceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annonce'], meta: { name: 'Annonce' } }
    /**
     * Find zero or one Annonce that matches the filter.
     * @param {AnnonceFindUniqueArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnonceFindUniqueArgs>(args: SelectSubset<T, AnnonceFindUniqueArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Annonce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnonceFindUniqueOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnonceFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnonceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Annonce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnonceFindFirstArgs>(args?: SelectSubset<T, AnnonceFindFirstArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Annonce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnonceFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnonceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Annonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annonces
     * const annonces = await prisma.annonce.findMany()
     * 
     * // Get first 10 Annonces
     * const annonces = await prisma.annonce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annonceWithIdOnly = await prisma.annonce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnonceFindManyArgs>(args?: SelectSubset<T, AnnonceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Annonce.
     * @param {AnnonceCreateArgs} args - Arguments to create a Annonce.
     * @example
     * // Create one Annonce
     * const Annonce = await prisma.annonce.create({
     *   data: {
     *     // ... data to create a Annonce
     *   }
     * })
     * 
     */
    create<T extends AnnonceCreateArgs>(args: SelectSubset<T, AnnonceCreateArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Annonces.
     * @param {AnnonceCreateManyArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnonceCreateManyArgs>(args?: SelectSubset<T, AnnonceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Annonces and returns the data saved in the database.
     * @param {AnnonceCreateManyAndReturnArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Annonces and only return the `id`
     * const annonceWithIdOnly = await prisma.annonce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnonceCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnonceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Annonce.
     * @param {AnnonceDeleteArgs} args - Arguments to delete one Annonce.
     * @example
     * // Delete one Annonce
     * const Annonce = await prisma.annonce.delete({
     *   where: {
     *     // ... filter to delete one Annonce
     *   }
     * })
     * 
     */
    delete<T extends AnnonceDeleteArgs>(args: SelectSubset<T, AnnonceDeleteArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Annonce.
     * @param {AnnonceUpdateArgs} args - Arguments to update one Annonce.
     * @example
     * // Update one Annonce
     * const annonce = await prisma.annonce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnonceUpdateArgs>(args: SelectSubset<T, AnnonceUpdateArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Annonces.
     * @param {AnnonceDeleteManyArgs} args - Arguments to filter Annonces to delete.
     * @example
     * // Delete a few Annonces
     * const { count } = await prisma.annonce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnonceDeleteManyArgs>(args?: SelectSubset<T, AnnonceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnonceUpdateManyArgs>(args: SelectSubset<T, AnnonceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces and returns the data updated in the database.
     * @param {AnnonceUpdateManyAndReturnArgs} args - Arguments to update many Annonces.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Annonces and only return the `id`
     * const annonceWithIdOnly = await prisma.annonce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnonceUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnonceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Annonce.
     * @param {AnnonceUpsertArgs} args - Arguments to update or create a Annonce.
     * @example
     * // Update or create a Annonce
     * const annonce = await prisma.annonce.upsert({
     *   create: {
     *     // ... data to create a Annonce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annonce we want to update
     *   }
     * })
     */
    upsert<T extends AnnonceUpsertArgs>(args: SelectSubset<T, AnnonceUpsertArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceCountArgs} args - Arguments to filter Annonces to count.
     * @example
     * // Count the number of Annonces
     * const count = await prisma.annonce.count({
     *   where: {
     *     // ... the filter for the Annonces we want to count
     *   }
     * })
    **/
    count<T extends AnnonceCountArgs>(
      args?: Subset<T, AnnonceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnonceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnonceAggregateArgs>(args: Subset<T, AnnonceAggregateArgs>): Prisma.PrismaPromise<GetAnnonceAggregateType<T>>

    /**
     * Group by Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnonceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnonceGroupByArgs['orderBy'] }
        : { orderBy?: AnnonceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnonceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnonceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annonce model
   */
  readonly fields: AnnonceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annonce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnonceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    typeAnnonce<T extends TypeAnnonceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeAnnonceDefaultArgs<ExtArgs>>): Prisma__TypeAnnonceClient<$Result.GetResult<Prisma.$TypeAnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    categorie<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    lieu<T extends LieuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LieuDefaultArgs<ExtArgs>>): Prisma__LieuClient<$Result.GetResult<Prisma.$LieuPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    images<T extends Annonce$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Annonce$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Annonce model
   */ 
  interface AnnonceFieldRefs {
    readonly id: FieldRef<"Annonce", 'Int'>
    readonly typeAnnonceId: FieldRef<"Annonce", 'Int'>
    readonly categorieId: FieldRef<"Annonce", 'Int'>
    readonly lieuId: FieldRef<"Annonce", 'Int'>
    readonly userId: FieldRef<"Annonce", 'Int'>
    readonly subcategorieId: FieldRef<"Annonce", 'Int'>
    readonly title: FieldRef<"Annonce", 'String'>
    readonly description: FieldRef<"Annonce", 'String'>
    readonly price: FieldRef<"Annonce", 'Float'>
    readonly contact: FieldRef<"Annonce", 'String'>
    readonly haveImage: FieldRef<"Annonce", 'Boolean'>
    readonly firstImagePath: FieldRef<"Annonce", 'String'>
    readonly status: FieldRef<"Annonce", 'String'>
    readonly updatedAt: FieldRef<"Annonce", 'DateTime'>
    readonly createdAt: FieldRef<"Annonce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Annonce findUnique
   */
  export type AnnonceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce findUniqueOrThrow
   */
  export type AnnonceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce findFirst
   */
  export type AnnonceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce findFirstOrThrow
   */
  export type AnnonceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce findMany
   */
  export type AnnonceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce create
   */
  export type AnnonceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The data needed to create a Annonce.
     */
    data: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
  }

  /**
   * Annonce createMany
   */
  export type AnnonceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annonce createManyAndReturn
   */
  export type AnnonceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annonce update
   */
  export type AnnonceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The data needed to update a Annonce.
     */
    data: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
    /**
     * Choose, which Annonce to update.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce updateMany
   */
  export type AnnonceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
  }

  /**
   * Annonce updateManyAndReturn
   */
  export type AnnonceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annonce upsert
   */
  export type AnnonceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The filter to search for the Annonce to update in case it exists.
     */
    where: AnnonceWhereUniqueInput
    /**
     * In case the Annonce found by the `where` argument doesn't exist, create a new Annonce with this data.
     */
    create: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
    /**
     * In case the Annonce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
  }

  /**
   * Annonce delete
   */
  export type AnnonceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter which Annonce to delete.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce deleteMany
   */
  export type AnnonceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonces to delete
     */
    where?: AnnonceWhereInput
  }

  /**
   * Annonce.images
   */
  export type Annonce$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Annonce without action
   */
  export type AnnonceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin',
    isActive: 'isActive'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    isExpired: 'isExpired',
    createdAt: 'createdAt',
    lastAccessed: 'lastAccessed'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const TypeAnnonceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameAr: 'nameAr',
    priority: 'priority',
    createdAt: 'createdAt'
  };

  export type TypeAnnonceScalarFieldEnum = (typeof TypeAnnonceScalarFieldEnum)[keyof typeof TypeAnnonceScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    typeAnnonceId: 'typeAnnonceId',
    name: 'name',
    nameAr: 'nameAr',
    priority: 'priority',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameAr: 'nameAr',
    categorieId: 'categorieId',
    priority: 'priority',
    createdAt: 'createdAt'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    imagePath: 'imagePath',
    createdAt: 'createdAt',
    altText: 'altText'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const WilayaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameAr: 'nameAr',
    priority: 'priority'
  };

  export type WilayaScalarFieldEnum = (typeof WilayaScalarFieldEnum)[keyof typeof WilayaScalarFieldEnum]


  export const MoughataaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameAr: 'nameAr',
    priority: 'priority'
  };

  export type MoughataaScalarFieldEnum = (typeof MoughataaScalarFieldEnum)[keyof typeof MoughataaScalarFieldEnum]


  export const GPSLocationScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type GPSLocationScalarFieldEnum = (typeof GPSLocationScalarFieldEnum)[keyof typeof GPSLocationScalarFieldEnum]


  export const LieuScalarFieldEnum: {
    id: 'id',
    wilayaId: 'wilayaId',
    moughataaId: 'moughataaId',
    gpsLocationId: 'gpsLocationId'
  };

  export type LieuScalarFieldEnum = (typeof LieuScalarFieldEnum)[keyof typeof LieuScalarFieldEnum]


  export const AnnonceScalarFieldEnum: {
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

  export type AnnonceScalarFieldEnum = (typeof AnnonceScalarFieldEnum)[keyof typeof AnnonceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    sessions?: UserSessionListRelationFilter
    annonces?: AnnonceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sessions?: UserSessionOrderByRelationAggregateInput
    annonces?: AnnonceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    sessions?: UserSessionListRelationFilter
    annonces?: AnnonceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: IntFilter<"UserSession"> | number
    userId?: IntFilter<"UserSession"> | number
    token?: StringFilter<"UserSession"> | string
    isExpired?: BoolFilter<"UserSession"> | boolean
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    lastAccessed?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isExpired?: SortOrder
    createdAt?: SortOrder
    lastAccessed?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    userId?: IntFilter<"UserSession"> | number
    token?: StringFilter<"UserSession"> | string
    isExpired?: BoolFilter<"UserSession"> | boolean
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    lastAccessed?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isExpired?: SortOrder
    createdAt?: SortOrder
    lastAccessed?: SortOrderInput | SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _avg?: UserSessionAvgOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
    _sum?: UserSessionSumOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSession"> | number
    userId?: IntWithAggregatesFilter<"UserSession"> | number
    token?: StringWithAggregatesFilter<"UserSession"> | string
    isExpired?: BoolWithAggregatesFilter<"UserSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    lastAccessed?: DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null
  }

  export type TypeAnnonceWhereInput = {
    AND?: TypeAnnonceWhereInput | TypeAnnonceWhereInput[]
    OR?: TypeAnnonceWhereInput[]
    NOT?: TypeAnnonceWhereInput | TypeAnnonceWhereInput[]
    id?: IntFilter<"TypeAnnonce"> | number
    name?: StringFilter<"TypeAnnonce"> | string
    nameAr?: StringFilter<"TypeAnnonce"> | string
    priority?: IntFilter<"TypeAnnonce"> | number
    createdAt?: DateTimeFilter<"TypeAnnonce"> | Date | string
    categories?: CategoryListRelationFilter
    annonces?: AnnonceListRelationFilter
  }

  export type TypeAnnonceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    annonces?: AnnonceOrderByRelationAggregateInput
  }

  export type TypeAnnonceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TypeAnnonceWhereInput | TypeAnnonceWhereInput[]
    OR?: TypeAnnonceWhereInput[]
    NOT?: TypeAnnonceWhereInput | TypeAnnonceWhereInput[]
    name?: StringFilter<"TypeAnnonce"> | string
    nameAr?: StringFilter<"TypeAnnonce"> | string
    priority?: IntFilter<"TypeAnnonce"> | number
    createdAt?: DateTimeFilter<"TypeAnnonce"> | Date | string
    categories?: CategoryListRelationFilter
    annonces?: AnnonceListRelationFilter
  }, "id">

  export type TypeAnnonceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    _count?: TypeAnnonceCountOrderByAggregateInput
    _avg?: TypeAnnonceAvgOrderByAggregateInput
    _max?: TypeAnnonceMaxOrderByAggregateInput
    _min?: TypeAnnonceMinOrderByAggregateInput
    _sum?: TypeAnnonceSumOrderByAggregateInput
  }

  export type TypeAnnonceScalarWhereWithAggregatesInput = {
    AND?: TypeAnnonceScalarWhereWithAggregatesInput | TypeAnnonceScalarWhereWithAggregatesInput[]
    OR?: TypeAnnonceScalarWhereWithAggregatesInput[]
    NOT?: TypeAnnonceScalarWhereWithAggregatesInput | TypeAnnonceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TypeAnnonce"> | number
    name?: StringWithAggregatesFilter<"TypeAnnonce"> | string
    nameAr?: StringWithAggregatesFilter<"TypeAnnonce"> | string
    priority?: IntWithAggregatesFilter<"TypeAnnonce"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TypeAnnonce"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    typeAnnonceId?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    nameAr?: StringFilter<"Category"> | string
    priority?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    typeAnnonce?: XOR<TypeAnnonceScalarRelationFilter, TypeAnnonceWhereInput>
    annonces?: AnnonceListRelationFilter
    subCategories?: SubCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    typeAnnonce?: TypeAnnonceOrderByWithRelationInput
    annonces?: AnnonceOrderByRelationAggregateInput
    subCategories?: SubCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    typeAnnonceId?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    nameAr?: StringFilter<"Category"> | string
    priority?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    typeAnnonce?: XOR<TypeAnnonceScalarRelationFilter, TypeAnnonceWhereInput>
    annonces?: AnnonceListRelationFilter
    subCategories?: SubCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    typeAnnonceId?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    nameAr?: StringWithAggregatesFilter<"Category"> | string
    priority?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    nameAr?: StringFilter<"SubCategory"> | string
    categorieId?: IntFilter<"SubCategory"> | number
    priority?: IntFilter<"SubCategory"> | number
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    categorieId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    name?: StringFilter<"SubCategory"> | string
    nameAr?: StringFilter<"SubCategory"> | string
    categorieId?: IntFilter<"SubCategory"> | number
    priority?: IntFilter<"SubCategory"> | number
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    categorieId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _avg?: SubCategoryAvgOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
    _sum?: SubCategorySumOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubCategory"> | number
    name?: StringWithAggregatesFilter<"SubCategory"> | string
    nameAr?: StringWithAggregatesFilter<"SubCategory"> | string
    categorieId?: IntWithAggregatesFilter<"SubCategory"> | number
    priority?: IntWithAggregatesFilter<"SubCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    imagePath?: StringFilter<"Image"> | string
    createdAt?: DateTimeNullableFilter<"Image"> | Date | string | null
    altText?: StringNullableFilter<"Image"> | string | null
    annonces?: AnnonceListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    altText?: SortOrderInput | SortOrder
    annonces?: AnnonceOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    imagePath?: StringFilter<"Image"> | string
    createdAt?: DateTimeNullableFilter<"Image"> | Date | string | null
    altText?: StringNullableFilter<"Image"> | string | null
    annonces?: AnnonceListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    altText?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    imagePath?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Image"> | Date | string | null
    altText?: StringNullableWithAggregatesFilter<"Image"> | string | null
  }

  export type WilayaWhereInput = {
    AND?: WilayaWhereInput | WilayaWhereInput[]
    OR?: WilayaWhereInput[]
    NOT?: WilayaWhereInput | WilayaWhereInput[]
    id?: IntFilter<"Wilaya"> | number
    name?: StringFilter<"Wilaya"> | string
    nameAr?: StringFilter<"Wilaya"> | string
    priority?: IntFilter<"Wilaya"> | number
    lieux?: LieuListRelationFilter
  }

  export type WilayaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    lieux?: LieuOrderByRelationAggregateInput
  }

  export type WilayaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WilayaWhereInput | WilayaWhereInput[]
    OR?: WilayaWhereInput[]
    NOT?: WilayaWhereInput | WilayaWhereInput[]
    name?: StringFilter<"Wilaya"> | string
    nameAr?: StringFilter<"Wilaya"> | string
    priority?: IntFilter<"Wilaya"> | number
    lieux?: LieuListRelationFilter
  }, "id">

  export type WilayaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    _count?: WilayaCountOrderByAggregateInput
    _avg?: WilayaAvgOrderByAggregateInput
    _max?: WilayaMaxOrderByAggregateInput
    _min?: WilayaMinOrderByAggregateInput
    _sum?: WilayaSumOrderByAggregateInput
  }

  export type WilayaScalarWhereWithAggregatesInput = {
    AND?: WilayaScalarWhereWithAggregatesInput | WilayaScalarWhereWithAggregatesInput[]
    OR?: WilayaScalarWhereWithAggregatesInput[]
    NOT?: WilayaScalarWhereWithAggregatesInput | WilayaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wilaya"> | number
    name?: StringWithAggregatesFilter<"Wilaya"> | string
    nameAr?: StringWithAggregatesFilter<"Wilaya"> | string
    priority?: IntWithAggregatesFilter<"Wilaya"> | number
  }

  export type MoughataaWhereInput = {
    AND?: MoughataaWhereInput | MoughataaWhereInput[]
    OR?: MoughataaWhereInput[]
    NOT?: MoughataaWhereInput | MoughataaWhereInput[]
    id?: IntFilter<"Moughataa"> | number
    name?: StringFilter<"Moughataa"> | string
    nameAr?: StringFilter<"Moughataa"> | string
    priority?: IntFilter<"Moughataa"> | number
    lieux?: LieuListRelationFilter
  }

  export type MoughataaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    lieux?: LieuOrderByRelationAggregateInput
  }

  export type MoughataaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MoughataaWhereInput | MoughataaWhereInput[]
    OR?: MoughataaWhereInput[]
    NOT?: MoughataaWhereInput | MoughataaWhereInput[]
    name?: StringFilter<"Moughataa"> | string
    nameAr?: StringFilter<"Moughataa"> | string
    priority?: IntFilter<"Moughataa"> | number
    lieux?: LieuListRelationFilter
  }, "id">

  export type MoughataaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    _count?: MoughataaCountOrderByAggregateInput
    _avg?: MoughataaAvgOrderByAggregateInput
    _max?: MoughataaMaxOrderByAggregateInput
    _min?: MoughataaMinOrderByAggregateInput
    _sum?: MoughataaSumOrderByAggregateInput
  }

  export type MoughataaScalarWhereWithAggregatesInput = {
    AND?: MoughataaScalarWhereWithAggregatesInput | MoughataaScalarWhereWithAggregatesInput[]
    OR?: MoughataaScalarWhereWithAggregatesInput[]
    NOT?: MoughataaScalarWhereWithAggregatesInput | MoughataaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Moughataa"> | number
    name?: StringWithAggregatesFilter<"Moughataa"> | string
    nameAr?: StringWithAggregatesFilter<"Moughataa"> | string
    priority?: IntWithAggregatesFilter<"Moughataa"> | number
  }

  export type GPSLocationWhereInput = {
    AND?: GPSLocationWhereInput | GPSLocationWhereInput[]
    OR?: GPSLocationWhereInput[]
    NOT?: GPSLocationWhereInput | GPSLocationWhereInput[]
    id?: IntFilter<"GPSLocation"> | number
    latitude?: FloatFilter<"GPSLocation"> | number
    longitude?: FloatFilter<"GPSLocation"> | number
    lieux?: LieuListRelationFilter
  }

  export type GPSLocationOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    lieux?: LieuOrderByRelationAggregateInput
  }

  export type GPSLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GPSLocationWhereInput | GPSLocationWhereInput[]
    OR?: GPSLocationWhereInput[]
    NOT?: GPSLocationWhereInput | GPSLocationWhereInput[]
    latitude?: FloatFilter<"GPSLocation"> | number
    longitude?: FloatFilter<"GPSLocation"> | number
    lieux?: LieuListRelationFilter
  }, "id">

  export type GPSLocationOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: GPSLocationCountOrderByAggregateInput
    _avg?: GPSLocationAvgOrderByAggregateInput
    _max?: GPSLocationMaxOrderByAggregateInput
    _min?: GPSLocationMinOrderByAggregateInput
    _sum?: GPSLocationSumOrderByAggregateInput
  }

  export type GPSLocationScalarWhereWithAggregatesInput = {
    AND?: GPSLocationScalarWhereWithAggregatesInput | GPSLocationScalarWhereWithAggregatesInput[]
    OR?: GPSLocationScalarWhereWithAggregatesInput[]
    NOT?: GPSLocationScalarWhereWithAggregatesInput | GPSLocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GPSLocation"> | number
    latitude?: FloatWithAggregatesFilter<"GPSLocation"> | number
    longitude?: FloatWithAggregatesFilter<"GPSLocation"> | number
  }

  export type LieuWhereInput = {
    AND?: LieuWhereInput | LieuWhereInput[]
    OR?: LieuWhereInput[]
    NOT?: LieuWhereInput | LieuWhereInput[]
    id?: IntFilter<"Lieu"> | number
    wilayaId?: IntFilter<"Lieu"> | number
    moughataaId?: IntNullableFilter<"Lieu"> | number | null
    gpsLocationId?: IntNullableFilter<"Lieu"> | number | null
    wilaya?: XOR<WilayaNullableScalarRelationFilter, WilayaWhereInput> | null
    moughataa?: XOR<MoughataaNullableScalarRelationFilter, MoughataaWhereInput> | null
    gpsLocation?: XOR<GPSLocationNullableScalarRelationFilter, GPSLocationWhereInput> | null
    annonces?: AnnonceListRelationFilter
  }

  export type LieuOrderByWithRelationInput = {
    id?: SortOrder
    wilayaId?: SortOrder
    moughataaId?: SortOrderInput | SortOrder
    gpsLocationId?: SortOrderInput | SortOrder
    wilaya?: WilayaOrderByWithRelationInput
    moughataa?: MoughataaOrderByWithRelationInput
    gpsLocation?: GPSLocationOrderByWithRelationInput
    annonces?: AnnonceOrderByRelationAggregateInput
  }

  export type LieuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LieuWhereInput | LieuWhereInput[]
    OR?: LieuWhereInput[]
    NOT?: LieuWhereInput | LieuWhereInput[]
    wilayaId?: IntFilter<"Lieu"> | number
    moughataaId?: IntNullableFilter<"Lieu"> | number | null
    gpsLocationId?: IntNullableFilter<"Lieu"> | number | null
    wilaya?: XOR<WilayaNullableScalarRelationFilter, WilayaWhereInput> | null
    moughataa?: XOR<MoughataaNullableScalarRelationFilter, MoughataaWhereInput> | null
    gpsLocation?: XOR<GPSLocationNullableScalarRelationFilter, GPSLocationWhereInput> | null
    annonces?: AnnonceListRelationFilter
  }, "id">

  export type LieuOrderByWithAggregationInput = {
    id?: SortOrder
    wilayaId?: SortOrder
    moughataaId?: SortOrderInput | SortOrder
    gpsLocationId?: SortOrderInput | SortOrder
    _count?: LieuCountOrderByAggregateInput
    _avg?: LieuAvgOrderByAggregateInput
    _max?: LieuMaxOrderByAggregateInput
    _min?: LieuMinOrderByAggregateInput
    _sum?: LieuSumOrderByAggregateInput
  }

  export type LieuScalarWhereWithAggregatesInput = {
    AND?: LieuScalarWhereWithAggregatesInput | LieuScalarWhereWithAggregatesInput[]
    OR?: LieuScalarWhereWithAggregatesInput[]
    NOT?: LieuScalarWhereWithAggregatesInput | LieuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lieu"> | number
    wilayaId?: IntWithAggregatesFilter<"Lieu"> | number
    moughataaId?: IntNullableWithAggregatesFilter<"Lieu"> | number | null
    gpsLocationId?: IntNullableWithAggregatesFilter<"Lieu"> | number | null
  }

  export type AnnonceWhereInput = {
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    id?: IntFilter<"Annonce"> | number
    typeAnnonceId?: IntFilter<"Annonce"> | number
    categorieId?: IntFilter<"Annonce"> | number
    lieuId?: IntFilter<"Annonce"> | number
    userId?: IntFilter<"Annonce"> | number
    subcategorieId?: IntFilter<"Annonce"> | number
    title?: StringFilter<"Annonce"> | string
    description?: StringFilter<"Annonce"> | string
    price?: FloatFilter<"Annonce"> | number
    contact?: StringFilter<"Annonce"> | string
    haveImage?: BoolFilter<"Annonce"> | boolean
    firstImagePath?: StringFilter<"Annonce"> | string
    status?: StringFilter<"Annonce"> | string
    updatedAt?: DateTimeFilter<"Annonce"> | Date | string
    createdAt?: DateTimeFilter<"Annonce"> | Date | string
    typeAnnonce?: XOR<TypeAnnonceScalarRelationFilter, TypeAnnonceWhereInput>
    categorie?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    lieu?: XOR<LieuScalarRelationFilter, LieuWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ImageListRelationFilter
  }

  export type AnnonceOrderByWithRelationInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    categorieId?: SortOrder
    lieuId?: SortOrder
    userId?: SortOrder
    subcategorieId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    contact?: SortOrder
    haveImage?: SortOrder
    firstImagePath?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    typeAnnonce?: TypeAnnonceOrderByWithRelationInput
    categorie?: CategoryOrderByWithRelationInput
    lieu?: LieuOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type AnnonceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    typeAnnonceId?: IntFilter<"Annonce"> | number
    categorieId?: IntFilter<"Annonce"> | number
    lieuId?: IntFilter<"Annonce"> | number
    userId?: IntFilter<"Annonce"> | number
    subcategorieId?: IntFilter<"Annonce"> | number
    title?: StringFilter<"Annonce"> | string
    description?: StringFilter<"Annonce"> | string
    price?: FloatFilter<"Annonce"> | number
    contact?: StringFilter<"Annonce"> | string
    haveImage?: BoolFilter<"Annonce"> | boolean
    firstImagePath?: StringFilter<"Annonce"> | string
    status?: StringFilter<"Annonce"> | string
    updatedAt?: DateTimeFilter<"Annonce"> | Date | string
    createdAt?: DateTimeFilter<"Annonce"> | Date | string
    typeAnnonce?: XOR<TypeAnnonceScalarRelationFilter, TypeAnnonceWhereInput>
    categorie?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    lieu?: XOR<LieuScalarRelationFilter, LieuWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ImageListRelationFilter
  }, "id">

  export type AnnonceOrderByWithAggregationInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    categorieId?: SortOrder
    lieuId?: SortOrder
    userId?: SortOrder
    subcategorieId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    contact?: SortOrder
    haveImage?: SortOrder
    firstImagePath?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: AnnonceCountOrderByAggregateInput
    _avg?: AnnonceAvgOrderByAggregateInput
    _max?: AnnonceMaxOrderByAggregateInput
    _min?: AnnonceMinOrderByAggregateInput
    _sum?: AnnonceSumOrderByAggregateInput
  }

  export type AnnonceScalarWhereWithAggregatesInput = {
    AND?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    OR?: AnnonceScalarWhereWithAggregatesInput[]
    NOT?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Annonce"> | number
    typeAnnonceId?: IntWithAggregatesFilter<"Annonce"> | number
    categorieId?: IntWithAggregatesFilter<"Annonce"> | number
    lieuId?: IntWithAggregatesFilter<"Annonce"> | number
    userId?: IntWithAggregatesFilter<"Annonce"> | number
    subcategorieId?: IntWithAggregatesFilter<"Annonce"> | number
    title?: StringWithAggregatesFilter<"Annonce"> | string
    description?: StringWithAggregatesFilter<"Annonce"> | string
    price?: FloatWithAggregatesFilter<"Annonce"> | number
    contact?: StringWithAggregatesFilter<"Annonce"> | string
    haveImage?: BoolWithAggregatesFilter<"Annonce"> | boolean
    firstImagePath?: StringWithAggregatesFilter<"Annonce"> | string
    status?: StringWithAggregatesFilter<"Annonce"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    annonces?: AnnonceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    annonces?: AnnonceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionCreateInput = {
    token: string
    isExpired?: boolean
    createdAt?: Date | string
    lastAccessed?: Date | string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    isExpired?: boolean
    createdAt?: Date | string
    lastAccessed?: Date | string | null
  }

  export type UserSessionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionCreateManyInput = {
    id?: number
    userId: number
    token: string
    isExpired?: boolean
    createdAt?: Date | string
    lastAccessed?: Date | string | null
  }

  export type UserSessionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypeAnnonceCreateInput = {
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutTypeAnnonceInput
    annonces?: AnnonceCreateNestedManyWithoutTypeAnnonceInput
  }

  export type TypeAnnonceUncheckedCreateInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutTypeAnnonceInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutTypeAnnonceInput
  }

  export type TypeAnnonceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutTypeAnnonceNestedInput
    annonces?: AnnonceUpdateManyWithoutTypeAnnonceNestedInput
  }

  export type TypeAnnonceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutTypeAnnonceNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutTypeAnnonceNestedInput
  }

  export type TypeAnnonceCreateManyInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
  }

  export type TypeAnnonceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeAnnonceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    typeAnnonce: TypeAnnonceCreateNestedOneWithoutCategoriesInput
    annonces?: AnnonceCreateNestedManyWithoutCategorieInput
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    typeAnnonceId: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutCategorieInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAnnonce?: TypeAnnonceUpdateOneRequiredWithoutCategoriesNestedInput
    annonces?: AnnonceUpdateManyWithoutCategorieNestedInput
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutCategorieNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    typeAnnonceId: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateInput = {
    name: string
    nameAr: string
    priority?: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: number
    name: string
    nameAr: string
    categorieId: number
    priority?: number
    createdAt?: Date | string
  }

  export type SubCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    categorieId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateManyInput = {
    id?: number
    name: string
    nameAr: string
    categorieId: number
    priority?: number
    createdAt?: Date | string
  }

  export type SubCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    categorieId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    imagePath: string
    createdAt?: Date | string | null
    altText?: string | null
    annonces?: AnnonceCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    imagePath: string
    createdAt?: Date | string | null
    altText?: string | null
    annonces?: AnnonceUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageUpdateInput = {
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    annonces?: AnnonceUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    annonces?: AnnonceUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    imagePath: string
    createdAt?: Date | string | null
    altText?: string | null
  }

  export type ImageUpdateManyMutationInput = {
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WilayaCreateInput = {
    name: string
    nameAr: string
    priority: number
    lieux?: LieuCreateNestedManyWithoutWilayaInput
  }

  export type WilayaUncheckedCreateInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
    lieux?: LieuUncheckedCreateNestedManyWithoutWilayaInput
  }

  export type WilayaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    lieux?: LieuUpdateManyWithoutWilayaNestedInput
  }

  export type WilayaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    lieux?: LieuUncheckedUpdateManyWithoutWilayaNestedInput
  }

  export type WilayaCreateManyInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
  }

  export type WilayaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type WilayaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type MoughataaCreateInput = {
    name: string
    nameAr: string
    priority: number
    lieux?: LieuCreateNestedManyWithoutMoughataaInput
  }

  export type MoughataaUncheckedCreateInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
    lieux?: LieuUncheckedCreateNestedManyWithoutMoughataaInput
  }

  export type MoughataaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    lieux?: LieuUpdateManyWithoutMoughataaNestedInput
  }

  export type MoughataaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    lieux?: LieuUncheckedUpdateManyWithoutMoughataaNestedInput
  }

  export type MoughataaCreateManyInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
  }

  export type MoughataaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type MoughataaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type GPSLocationCreateInput = {
    latitude: number
    longitude: number
    lieux?: LieuCreateNestedManyWithoutGpsLocationInput
  }

  export type GPSLocationUncheckedCreateInput = {
    id?: number
    latitude: number
    longitude: number
    lieux?: LieuUncheckedCreateNestedManyWithoutGpsLocationInput
  }

  export type GPSLocationUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    lieux?: LieuUpdateManyWithoutGpsLocationNestedInput
  }

  export type GPSLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    lieux?: LieuUncheckedUpdateManyWithoutGpsLocationNestedInput
  }

  export type GPSLocationCreateManyInput = {
    id?: number
    latitude: number
    longitude: number
  }

  export type GPSLocationUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type GPSLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type LieuCreateInput = {
    wilaya?: WilayaCreateNestedOneWithoutLieuxInput
    moughataa?: MoughataaCreateNestedOneWithoutLieuxInput
    gpsLocation?: GPSLocationCreateNestedOneWithoutLieuxInput
    annonces?: AnnonceCreateNestedManyWithoutLieuInput
  }

  export type LieuUncheckedCreateInput = {
    id?: number
    wilayaId: number
    moughataaId?: number | null
    gpsLocationId?: number | null
    annonces?: AnnonceUncheckedCreateNestedManyWithoutLieuInput
  }

  export type LieuUpdateInput = {
    wilaya?: WilayaUpdateOneWithoutLieuxNestedInput
    moughataa?: MoughataaUpdateOneWithoutLieuxNestedInput
    gpsLocation?: GPSLocationUpdateOneWithoutLieuxNestedInput
    annonces?: AnnonceUpdateManyWithoutLieuNestedInput
  }

  export type LieuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wilayaId?: IntFieldUpdateOperationsInput | number
    moughataaId?: NullableIntFieldUpdateOperationsInput | number | null
    gpsLocationId?: NullableIntFieldUpdateOperationsInput | number | null
    annonces?: AnnonceUncheckedUpdateManyWithoutLieuNestedInput
  }

  export type LieuCreateManyInput = {
    id?: number
    wilayaId: number
    moughataaId?: number | null
    gpsLocationId?: number | null
  }

  export type LieuUpdateManyMutationInput = {

  }

  export type LieuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wilayaId?: IntFieldUpdateOperationsInput | number
    moughataaId?: NullableIntFieldUpdateOperationsInput | number | null
    gpsLocationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnnonceCreateInput = {
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    typeAnnonce: TypeAnnonceCreateNestedOneWithoutAnnoncesInput
    categorie: CategoryCreateNestedOneWithoutAnnoncesInput
    lieu: LieuCreateNestedOneWithoutAnnoncesInput
    user: UserCreateNestedOneWithoutAnnoncesInput
    images?: ImageCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceUncheckedCreateInput = {
    id?: number
    typeAnnonceId: number
    categorieId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceUpdateInput = {
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAnnonce?: TypeAnnonceUpdateOneRequiredWithoutAnnoncesNestedInput
    categorie?: CategoryUpdateOneRequiredWithoutAnnoncesNestedInput
    lieu?: LieuUpdateOneRequiredWithoutAnnoncesNestedInput
    user?: UserUpdateOneRequiredWithoutAnnoncesNestedInput
    images?: ImageUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceCreateManyInput = {
    id?: number
    typeAnnonceId: number
    categorieId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type AnnonceUpdateManyMutationInput = {
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserSessionListRelationFilter = {
    every?: UserSessionWhereInput
    some?: UserSessionWhereInput
    none?: UserSessionWhereInput
  }

  export type AnnonceListRelationFilter = {
    every?: AnnonceWhereInput
    some?: AnnonceWhereInput
    none?: AnnonceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnonceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isExpired?: SortOrder
    createdAt?: SortOrder
    lastAccessed?: SortOrder
  }

  export type UserSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isExpired?: SortOrder
    createdAt?: SortOrder
    lastAccessed?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isExpired?: SortOrder
    createdAt?: SortOrder
    lastAccessed?: SortOrder
  }

  export type UserSessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeAnnonceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeAnnonceAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type TypeAnnonceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeAnnonceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeAnnonceSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type TypeAnnonceScalarRelationFilter = {
    is?: TypeAnnonceWhereInput
    isNot?: TypeAnnonceWhereInput
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    priority?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    priority?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    categorieId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type SubCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categorieId?: SortOrder
    priority?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    categorieId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    categorieId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type SubCategorySumOrderByAggregateInput = {
    id?: SortOrder
    categorieId?: SortOrder
    priority?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
    altText?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
    altText?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
    altText?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LieuListRelationFilter = {
    every?: LieuWhereInput
    some?: LieuWhereInput
    none?: LieuWhereInput
  }

  export type LieuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WilayaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
  }

  export type WilayaAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type WilayaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
  }

  export type WilayaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
  }

  export type WilayaSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type MoughataaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
  }

  export type MoughataaAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type MoughataaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
  }

  export type MoughataaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameAr?: SortOrder
    priority?: SortOrder
  }

  export type MoughataaSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GPSLocationCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GPSLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GPSLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GPSLocationMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GPSLocationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WilayaNullableScalarRelationFilter = {
    is?: WilayaWhereInput | null
    isNot?: WilayaWhereInput | null
  }

  export type MoughataaNullableScalarRelationFilter = {
    is?: MoughataaWhereInput | null
    isNot?: MoughataaWhereInput | null
  }

  export type GPSLocationNullableScalarRelationFilter = {
    is?: GPSLocationWhereInput | null
    isNot?: GPSLocationWhereInput | null
  }

  export type LieuCountOrderByAggregateInput = {
    id?: SortOrder
    wilayaId?: SortOrder
    moughataaId?: SortOrder
    gpsLocationId?: SortOrder
  }

  export type LieuAvgOrderByAggregateInput = {
    id?: SortOrder
    wilayaId?: SortOrder
    moughataaId?: SortOrder
    gpsLocationId?: SortOrder
  }

  export type LieuMaxOrderByAggregateInput = {
    id?: SortOrder
    wilayaId?: SortOrder
    moughataaId?: SortOrder
    gpsLocationId?: SortOrder
  }

  export type LieuMinOrderByAggregateInput = {
    id?: SortOrder
    wilayaId?: SortOrder
    moughataaId?: SortOrder
    gpsLocationId?: SortOrder
  }

  export type LieuSumOrderByAggregateInput = {
    id?: SortOrder
    wilayaId?: SortOrder
    moughataaId?: SortOrder
    gpsLocationId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LieuScalarRelationFilter = {
    is?: LieuWhereInput
    isNot?: LieuWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnonceCountOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    categorieId?: SortOrder
    lieuId?: SortOrder
    userId?: SortOrder
    subcategorieId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    contact?: SortOrder
    haveImage?: SortOrder
    firstImagePath?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnonceAvgOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    categorieId?: SortOrder
    lieuId?: SortOrder
    userId?: SortOrder
    subcategorieId?: SortOrder
    price?: SortOrder
  }

  export type AnnonceMaxOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    categorieId?: SortOrder
    lieuId?: SortOrder
    userId?: SortOrder
    subcategorieId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    contact?: SortOrder
    haveImage?: SortOrder
    firstImagePath?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnonceMinOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    categorieId?: SortOrder
    lieuId?: SortOrder
    userId?: SortOrder
    subcategorieId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    contact?: SortOrder
    haveImage?: SortOrder
    firstImagePath?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnonceSumOrderByAggregateInput = {
    id?: SortOrder
    typeAnnonceId?: SortOrder
    categorieId?: SortOrder
    lieuId?: SortOrder
    userId?: SortOrder
    subcategorieId?: SortOrder
    price?: SortOrder
  }

  export type UserSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type AnnonceCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnonceCreateWithoutUserInput, AnnonceUncheckedCreateWithoutUserInput> | AnnonceCreateWithoutUserInput[] | AnnonceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutUserInput | AnnonceCreateOrConnectWithoutUserInput[]
    createMany?: AnnonceCreateManyUserInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnonceCreateWithoutUserInput, AnnonceUncheckedCreateWithoutUserInput> | AnnonceCreateWithoutUserInput[] | AnnonceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutUserInput | AnnonceCreateOrConnectWithoutUserInput[]
    createMany?: AnnonceCreateManyUserInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type AnnonceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnonceCreateWithoutUserInput, AnnonceUncheckedCreateWithoutUserInput> | AnnonceCreateWithoutUserInput[] | AnnonceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutUserInput | AnnonceCreateOrConnectWithoutUserInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutUserInput | AnnonceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnonceCreateManyUserInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutUserInput | AnnonceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutUserInput | AnnonceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type AnnonceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnonceCreateWithoutUserInput, AnnonceUncheckedCreateWithoutUserInput> | AnnonceCreateWithoutUserInput[] | AnnonceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutUserInput | AnnonceCreateOrConnectWithoutUserInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutUserInput | AnnonceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnonceCreateManyUserInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutUserInput | AnnonceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutUserInput | AnnonceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type CategoryCreateNestedManyWithoutTypeAnnonceInput = {
    create?: XOR<CategoryCreateWithoutTypeAnnonceInput, CategoryUncheckedCreateWithoutTypeAnnonceInput> | CategoryCreateWithoutTypeAnnonceInput[] | CategoryUncheckedCreateWithoutTypeAnnonceInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeAnnonceInput | CategoryCreateOrConnectWithoutTypeAnnonceInput[]
    createMany?: CategoryCreateManyTypeAnnonceInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AnnonceCreateNestedManyWithoutTypeAnnonceInput = {
    create?: XOR<AnnonceCreateWithoutTypeAnnonceInput, AnnonceUncheckedCreateWithoutTypeAnnonceInput> | AnnonceCreateWithoutTypeAnnonceInput[] | AnnonceUncheckedCreateWithoutTypeAnnonceInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutTypeAnnonceInput | AnnonceCreateOrConnectWithoutTypeAnnonceInput[]
    createMany?: AnnonceCreateManyTypeAnnonceInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutTypeAnnonceInput = {
    create?: XOR<CategoryCreateWithoutTypeAnnonceInput, CategoryUncheckedCreateWithoutTypeAnnonceInput> | CategoryCreateWithoutTypeAnnonceInput[] | CategoryUncheckedCreateWithoutTypeAnnonceInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeAnnonceInput | CategoryCreateOrConnectWithoutTypeAnnonceInput[]
    createMany?: CategoryCreateManyTypeAnnonceInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutTypeAnnonceInput = {
    create?: XOR<AnnonceCreateWithoutTypeAnnonceInput, AnnonceUncheckedCreateWithoutTypeAnnonceInput> | AnnonceCreateWithoutTypeAnnonceInput[] | AnnonceUncheckedCreateWithoutTypeAnnonceInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutTypeAnnonceInput | AnnonceCreateOrConnectWithoutTypeAnnonceInput[]
    createMany?: AnnonceCreateManyTypeAnnonceInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutTypeAnnonceNestedInput = {
    create?: XOR<CategoryCreateWithoutTypeAnnonceInput, CategoryUncheckedCreateWithoutTypeAnnonceInput> | CategoryCreateWithoutTypeAnnonceInput[] | CategoryUncheckedCreateWithoutTypeAnnonceInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeAnnonceInput | CategoryCreateOrConnectWithoutTypeAnnonceInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutTypeAnnonceInput | CategoryUpsertWithWhereUniqueWithoutTypeAnnonceInput[]
    createMany?: CategoryCreateManyTypeAnnonceInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutTypeAnnonceInput | CategoryUpdateWithWhereUniqueWithoutTypeAnnonceInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutTypeAnnonceInput | CategoryUpdateManyWithWhereWithoutTypeAnnonceInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AnnonceUpdateManyWithoutTypeAnnonceNestedInput = {
    create?: XOR<AnnonceCreateWithoutTypeAnnonceInput, AnnonceUncheckedCreateWithoutTypeAnnonceInput> | AnnonceCreateWithoutTypeAnnonceInput[] | AnnonceUncheckedCreateWithoutTypeAnnonceInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutTypeAnnonceInput | AnnonceCreateOrConnectWithoutTypeAnnonceInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutTypeAnnonceInput | AnnonceUpsertWithWhereUniqueWithoutTypeAnnonceInput[]
    createMany?: AnnonceCreateManyTypeAnnonceInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutTypeAnnonceInput | AnnonceUpdateWithWhereUniqueWithoutTypeAnnonceInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutTypeAnnonceInput | AnnonceUpdateManyWithWhereWithoutTypeAnnonceInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutTypeAnnonceNestedInput = {
    create?: XOR<CategoryCreateWithoutTypeAnnonceInput, CategoryUncheckedCreateWithoutTypeAnnonceInput> | CategoryCreateWithoutTypeAnnonceInput[] | CategoryUncheckedCreateWithoutTypeAnnonceInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeAnnonceInput | CategoryCreateOrConnectWithoutTypeAnnonceInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutTypeAnnonceInput | CategoryUpsertWithWhereUniqueWithoutTypeAnnonceInput[]
    createMany?: CategoryCreateManyTypeAnnonceInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutTypeAnnonceInput | CategoryUpdateWithWhereUniqueWithoutTypeAnnonceInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutTypeAnnonceInput | CategoryUpdateManyWithWhereWithoutTypeAnnonceInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AnnonceUncheckedUpdateManyWithoutTypeAnnonceNestedInput = {
    create?: XOR<AnnonceCreateWithoutTypeAnnonceInput, AnnonceUncheckedCreateWithoutTypeAnnonceInput> | AnnonceCreateWithoutTypeAnnonceInput[] | AnnonceUncheckedCreateWithoutTypeAnnonceInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutTypeAnnonceInput | AnnonceCreateOrConnectWithoutTypeAnnonceInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutTypeAnnonceInput | AnnonceUpsertWithWhereUniqueWithoutTypeAnnonceInput[]
    createMany?: AnnonceCreateManyTypeAnnonceInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutTypeAnnonceInput | AnnonceUpdateWithWhereUniqueWithoutTypeAnnonceInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutTypeAnnonceInput | AnnonceUpdateManyWithWhereWithoutTypeAnnonceInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type TypeAnnonceCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TypeAnnonceCreateWithoutCategoriesInput, TypeAnnonceUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TypeAnnonceCreateOrConnectWithoutCategoriesInput
    connect?: TypeAnnonceWhereUniqueInput
  }

  export type AnnonceCreateNestedManyWithoutCategorieInput = {
    create?: XOR<AnnonceCreateWithoutCategorieInput, AnnonceUncheckedCreateWithoutCategorieInput> | AnnonceCreateWithoutCategorieInput[] | AnnonceUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutCategorieInput | AnnonceCreateOrConnectWithoutCategorieInput[]
    createMany?: AnnonceCreateManyCategorieInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type SubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<AnnonceCreateWithoutCategorieInput, AnnonceUncheckedCreateWithoutCategorieInput> | AnnonceCreateWithoutCategorieInput[] | AnnonceUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutCategorieInput | AnnonceCreateOrConnectWithoutCategorieInput[]
    createMany?: AnnonceCreateManyCategorieInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type TypeAnnonceUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TypeAnnonceCreateWithoutCategoriesInput, TypeAnnonceUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TypeAnnonceCreateOrConnectWithoutCategoriesInput
    upsert?: TypeAnnonceUpsertWithoutCategoriesInput
    connect?: TypeAnnonceWhereUniqueInput
    update?: XOR<XOR<TypeAnnonceUpdateToOneWithWhereWithoutCategoriesInput, TypeAnnonceUpdateWithoutCategoriesInput>, TypeAnnonceUncheckedUpdateWithoutCategoriesInput>
  }

  export type AnnonceUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<AnnonceCreateWithoutCategorieInput, AnnonceUncheckedCreateWithoutCategorieInput> | AnnonceCreateWithoutCategorieInput[] | AnnonceUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutCategorieInput | AnnonceCreateOrConnectWithoutCategorieInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutCategorieInput | AnnonceUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: AnnonceCreateManyCategorieInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutCategorieInput | AnnonceUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutCategorieInput | AnnonceUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type AnnonceUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<AnnonceCreateWithoutCategorieInput, AnnonceUncheckedCreateWithoutCategorieInput> | AnnonceCreateWithoutCategorieInput[] | AnnonceUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutCategorieInput | AnnonceCreateOrConnectWithoutCategorieInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutCategorieInput | AnnonceUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: AnnonceCreateManyCategorieInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutCategorieInput | AnnonceUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutCategorieInput | AnnonceUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoryUpsertWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CategoryUpdateWithoutSubCategoriesInput>, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type AnnonceCreateNestedManyWithoutImagesInput = {
    create?: XOR<AnnonceCreateWithoutImagesInput, AnnonceUncheckedCreateWithoutImagesInput> | AnnonceCreateWithoutImagesInput[] | AnnonceUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutImagesInput | AnnonceCreateOrConnectWithoutImagesInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<AnnonceCreateWithoutImagesInput, AnnonceUncheckedCreateWithoutImagesInput> | AnnonceCreateWithoutImagesInput[] | AnnonceUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutImagesInput | AnnonceCreateOrConnectWithoutImagesInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AnnonceUpdateManyWithoutImagesNestedInput = {
    create?: XOR<AnnonceCreateWithoutImagesInput, AnnonceUncheckedCreateWithoutImagesInput> | AnnonceCreateWithoutImagesInput[] | AnnonceUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutImagesInput | AnnonceCreateOrConnectWithoutImagesInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutImagesInput | AnnonceUpsertWithWhereUniqueWithoutImagesInput[]
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutImagesInput | AnnonceUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutImagesInput | AnnonceUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type AnnonceUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<AnnonceCreateWithoutImagesInput, AnnonceUncheckedCreateWithoutImagesInput> | AnnonceCreateWithoutImagesInput[] | AnnonceUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutImagesInput | AnnonceCreateOrConnectWithoutImagesInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutImagesInput | AnnonceUpsertWithWhereUniqueWithoutImagesInput[]
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutImagesInput | AnnonceUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutImagesInput | AnnonceUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type LieuCreateNestedManyWithoutWilayaInput = {
    create?: XOR<LieuCreateWithoutWilayaInput, LieuUncheckedCreateWithoutWilayaInput> | LieuCreateWithoutWilayaInput[] | LieuUncheckedCreateWithoutWilayaInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutWilayaInput | LieuCreateOrConnectWithoutWilayaInput[]
    createMany?: LieuCreateManyWilayaInputEnvelope
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
  }

  export type LieuUncheckedCreateNestedManyWithoutWilayaInput = {
    create?: XOR<LieuCreateWithoutWilayaInput, LieuUncheckedCreateWithoutWilayaInput> | LieuCreateWithoutWilayaInput[] | LieuUncheckedCreateWithoutWilayaInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutWilayaInput | LieuCreateOrConnectWithoutWilayaInput[]
    createMany?: LieuCreateManyWilayaInputEnvelope
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
  }

  export type LieuUpdateManyWithoutWilayaNestedInput = {
    create?: XOR<LieuCreateWithoutWilayaInput, LieuUncheckedCreateWithoutWilayaInput> | LieuCreateWithoutWilayaInput[] | LieuUncheckedCreateWithoutWilayaInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutWilayaInput | LieuCreateOrConnectWithoutWilayaInput[]
    upsert?: LieuUpsertWithWhereUniqueWithoutWilayaInput | LieuUpsertWithWhereUniqueWithoutWilayaInput[]
    createMany?: LieuCreateManyWilayaInputEnvelope
    set?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    disconnect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    delete?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    update?: LieuUpdateWithWhereUniqueWithoutWilayaInput | LieuUpdateWithWhereUniqueWithoutWilayaInput[]
    updateMany?: LieuUpdateManyWithWhereWithoutWilayaInput | LieuUpdateManyWithWhereWithoutWilayaInput[]
    deleteMany?: LieuScalarWhereInput | LieuScalarWhereInput[]
  }

  export type LieuUncheckedUpdateManyWithoutWilayaNestedInput = {
    create?: XOR<LieuCreateWithoutWilayaInput, LieuUncheckedCreateWithoutWilayaInput> | LieuCreateWithoutWilayaInput[] | LieuUncheckedCreateWithoutWilayaInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutWilayaInput | LieuCreateOrConnectWithoutWilayaInput[]
    upsert?: LieuUpsertWithWhereUniqueWithoutWilayaInput | LieuUpsertWithWhereUniqueWithoutWilayaInput[]
    createMany?: LieuCreateManyWilayaInputEnvelope
    set?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    disconnect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    delete?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    update?: LieuUpdateWithWhereUniqueWithoutWilayaInput | LieuUpdateWithWhereUniqueWithoutWilayaInput[]
    updateMany?: LieuUpdateManyWithWhereWithoutWilayaInput | LieuUpdateManyWithWhereWithoutWilayaInput[]
    deleteMany?: LieuScalarWhereInput | LieuScalarWhereInput[]
  }

  export type LieuCreateNestedManyWithoutMoughataaInput = {
    create?: XOR<LieuCreateWithoutMoughataaInput, LieuUncheckedCreateWithoutMoughataaInput> | LieuCreateWithoutMoughataaInput[] | LieuUncheckedCreateWithoutMoughataaInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutMoughataaInput | LieuCreateOrConnectWithoutMoughataaInput[]
    createMany?: LieuCreateManyMoughataaInputEnvelope
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
  }

  export type LieuUncheckedCreateNestedManyWithoutMoughataaInput = {
    create?: XOR<LieuCreateWithoutMoughataaInput, LieuUncheckedCreateWithoutMoughataaInput> | LieuCreateWithoutMoughataaInput[] | LieuUncheckedCreateWithoutMoughataaInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutMoughataaInput | LieuCreateOrConnectWithoutMoughataaInput[]
    createMany?: LieuCreateManyMoughataaInputEnvelope
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
  }

  export type LieuUpdateManyWithoutMoughataaNestedInput = {
    create?: XOR<LieuCreateWithoutMoughataaInput, LieuUncheckedCreateWithoutMoughataaInput> | LieuCreateWithoutMoughataaInput[] | LieuUncheckedCreateWithoutMoughataaInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutMoughataaInput | LieuCreateOrConnectWithoutMoughataaInput[]
    upsert?: LieuUpsertWithWhereUniqueWithoutMoughataaInput | LieuUpsertWithWhereUniqueWithoutMoughataaInput[]
    createMany?: LieuCreateManyMoughataaInputEnvelope
    set?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    disconnect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    delete?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    update?: LieuUpdateWithWhereUniqueWithoutMoughataaInput | LieuUpdateWithWhereUniqueWithoutMoughataaInput[]
    updateMany?: LieuUpdateManyWithWhereWithoutMoughataaInput | LieuUpdateManyWithWhereWithoutMoughataaInput[]
    deleteMany?: LieuScalarWhereInput | LieuScalarWhereInput[]
  }

  export type LieuUncheckedUpdateManyWithoutMoughataaNestedInput = {
    create?: XOR<LieuCreateWithoutMoughataaInput, LieuUncheckedCreateWithoutMoughataaInput> | LieuCreateWithoutMoughataaInput[] | LieuUncheckedCreateWithoutMoughataaInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutMoughataaInput | LieuCreateOrConnectWithoutMoughataaInput[]
    upsert?: LieuUpsertWithWhereUniqueWithoutMoughataaInput | LieuUpsertWithWhereUniqueWithoutMoughataaInput[]
    createMany?: LieuCreateManyMoughataaInputEnvelope
    set?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    disconnect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    delete?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    update?: LieuUpdateWithWhereUniqueWithoutMoughataaInput | LieuUpdateWithWhereUniqueWithoutMoughataaInput[]
    updateMany?: LieuUpdateManyWithWhereWithoutMoughataaInput | LieuUpdateManyWithWhereWithoutMoughataaInput[]
    deleteMany?: LieuScalarWhereInput | LieuScalarWhereInput[]
  }

  export type LieuCreateNestedManyWithoutGpsLocationInput = {
    create?: XOR<LieuCreateWithoutGpsLocationInput, LieuUncheckedCreateWithoutGpsLocationInput> | LieuCreateWithoutGpsLocationInput[] | LieuUncheckedCreateWithoutGpsLocationInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutGpsLocationInput | LieuCreateOrConnectWithoutGpsLocationInput[]
    createMany?: LieuCreateManyGpsLocationInputEnvelope
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
  }

  export type LieuUncheckedCreateNestedManyWithoutGpsLocationInput = {
    create?: XOR<LieuCreateWithoutGpsLocationInput, LieuUncheckedCreateWithoutGpsLocationInput> | LieuCreateWithoutGpsLocationInput[] | LieuUncheckedCreateWithoutGpsLocationInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutGpsLocationInput | LieuCreateOrConnectWithoutGpsLocationInput[]
    createMany?: LieuCreateManyGpsLocationInputEnvelope
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LieuUpdateManyWithoutGpsLocationNestedInput = {
    create?: XOR<LieuCreateWithoutGpsLocationInput, LieuUncheckedCreateWithoutGpsLocationInput> | LieuCreateWithoutGpsLocationInput[] | LieuUncheckedCreateWithoutGpsLocationInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutGpsLocationInput | LieuCreateOrConnectWithoutGpsLocationInput[]
    upsert?: LieuUpsertWithWhereUniqueWithoutGpsLocationInput | LieuUpsertWithWhereUniqueWithoutGpsLocationInput[]
    createMany?: LieuCreateManyGpsLocationInputEnvelope
    set?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    disconnect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    delete?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    update?: LieuUpdateWithWhereUniqueWithoutGpsLocationInput | LieuUpdateWithWhereUniqueWithoutGpsLocationInput[]
    updateMany?: LieuUpdateManyWithWhereWithoutGpsLocationInput | LieuUpdateManyWithWhereWithoutGpsLocationInput[]
    deleteMany?: LieuScalarWhereInput | LieuScalarWhereInput[]
  }

  export type LieuUncheckedUpdateManyWithoutGpsLocationNestedInput = {
    create?: XOR<LieuCreateWithoutGpsLocationInput, LieuUncheckedCreateWithoutGpsLocationInput> | LieuCreateWithoutGpsLocationInput[] | LieuUncheckedCreateWithoutGpsLocationInput[]
    connectOrCreate?: LieuCreateOrConnectWithoutGpsLocationInput | LieuCreateOrConnectWithoutGpsLocationInput[]
    upsert?: LieuUpsertWithWhereUniqueWithoutGpsLocationInput | LieuUpsertWithWhereUniqueWithoutGpsLocationInput[]
    createMany?: LieuCreateManyGpsLocationInputEnvelope
    set?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    disconnect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    delete?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    connect?: LieuWhereUniqueInput | LieuWhereUniqueInput[]
    update?: LieuUpdateWithWhereUniqueWithoutGpsLocationInput | LieuUpdateWithWhereUniqueWithoutGpsLocationInput[]
    updateMany?: LieuUpdateManyWithWhereWithoutGpsLocationInput | LieuUpdateManyWithWhereWithoutGpsLocationInput[]
    deleteMany?: LieuScalarWhereInput | LieuScalarWhereInput[]
  }

  export type WilayaCreateNestedOneWithoutLieuxInput = {
    create?: XOR<WilayaCreateWithoutLieuxInput, WilayaUncheckedCreateWithoutLieuxInput>
    connectOrCreate?: WilayaCreateOrConnectWithoutLieuxInput
    connect?: WilayaWhereUniqueInput
  }

  export type MoughataaCreateNestedOneWithoutLieuxInput = {
    create?: XOR<MoughataaCreateWithoutLieuxInput, MoughataaUncheckedCreateWithoutLieuxInput>
    connectOrCreate?: MoughataaCreateOrConnectWithoutLieuxInput
    connect?: MoughataaWhereUniqueInput
  }

  export type GPSLocationCreateNestedOneWithoutLieuxInput = {
    create?: XOR<GPSLocationCreateWithoutLieuxInput, GPSLocationUncheckedCreateWithoutLieuxInput>
    connectOrCreate?: GPSLocationCreateOrConnectWithoutLieuxInput
    connect?: GPSLocationWhereUniqueInput
  }

  export type AnnonceCreateNestedManyWithoutLieuInput = {
    create?: XOR<AnnonceCreateWithoutLieuInput, AnnonceUncheckedCreateWithoutLieuInput> | AnnonceCreateWithoutLieuInput[] | AnnonceUncheckedCreateWithoutLieuInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutLieuInput | AnnonceCreateOrConnectWithoutLieuInput[]
    createMany?: AnnonceCreateManyLieuInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutLieuInput = {
    create?: XOR<AnnonceCreateWithoutLieuInput, AnnonceUncheckedCreateWithoutLieuInput> | AnnonceCreateWithoutLieuInput[] | AnnonceUncheckedCreateWithoutLieuInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutLieuInput | AnnonceCreateOrConnectWithoutLieuInput[]
    createMany?: AnnonceCreateManyLieuInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type WilayaUpdateOneWithoutLieuxNestedInput = {
    create?: XOR<WilayaCreateWithoutLieuxInput, WilayaUncheckedCreateWithoutLieuxInput>
    connectOrCreate?: WilayaCreateOrConnectWithoutLieuxInput
    upsert?: WilayaUpsertWithoutLieuxInput
    disconnect?: WilayaWhereInput | boolean
    delete?: WilayaWhereInput | boolean
    connect?: WilayaWhereUniqueInput
    update?: XOR<XOR<WilayaUpdateToOneWithWhereWithoutLieuxInput, WilayaUpdateWithoutLieuxInput>, WilayaUncheckedUpdateWithoutLieuxInput>
  }

  export type MoughataaUpdateOneWithoutLieuxNestedInput = {
    create?: XOR<MoughataaCreateWithoutLieuxInput, MoughataaUncheckedCreateWithoutLieuxInput>
    connectOrCreate?: MoughataaCreateOrConnectWithoutLieuxInput
    upsert?: MoughataaUpsertWithoutLieuxInput
    disconnect?: MoughataaWhereInput | boolean
    delete?: MoughataaWhereInput | boolean
    connect?: MoughataaWhereUniqueInput
    update?: XOR<XOR<MoughataaUpdateToOneWithWhereWithoutLieuxInput, MoughataaUpdateWithoutLieuxInput>, MoughataaUncheckedUpdateWithoutLieuxInput>
  }

  export type GPSLocationUpdateOneWithoutLieuxNestedInput = {
    create?: XOR<GPSLocationCreateWithoutLieuxInput, GPSLocationUncheckedCreateWithoutLieuxInput>
    connectOrCreate?: GPSLocationCreateOrConnectWithoutLieuxInput
    upsert?: GPSLocationUpsertWithoutLieuxInput
    disconnect?: GPSLocationWhereInput | boolean
    delete?: GPSLocationWhereInput | boolean
    connect?: GPSLocationWhereUniqueInput
    update?: XOR<XOR<GPSLocationUpdateToOneWithWhereWithoutLieuxInput, GPSLocationUpdateWithoutLieuxInput>, GPSLocationUncheckedUpdateWithoutLieuxInput>
  }

  export type AnnonceUpdateManyWithoutLieuNestedInput = {
    create?: XOR<AnnonceCreateWithoutLieuInput, AnnonceUncheckedCreateWithoutLieuInput> | AnnonceCreateWithoutLieuInput[] | AnnonceUncheckedCreateWithoutLieuInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutLieuInput | AnnonceCreateOrConnectWithoutLieuInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutLieuInput | AnnonceUpsertWithWhereUniqueWithoutLieuInput[]
    createMany?: AnnonceCreateManyLieuInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutLieuInput | AnnonceUpdateWithWhereUniqueWithoutLieuInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutLieuInput | AnnonceUpdateManyWithWhereWithoutLieuInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnnonceUncheckedUpdateManyWithoutLieuNestedInput = {
    create?: XOR<AnnonceCreateWithoutLieuInput, AnnonceUncheckedCreateWithoutLieuInput> | AnnonceCreateWithoutLieuInput[] | AnnonceUncheckedCreateWithoutLieuInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutLieuInput | AnnonceCreateOrConnectWithoutLieuInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutLieuInput | AnnonceUpsertWithWhereUniqueWithoutLieuInput[]
    createMany?: AnnonceCreateManyLieuInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutLieuInput | AnnonceUpdateWithWhereUniqueWithoutLieuInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutLieuInput | AnnonceUpdateManyWithWhereWithoutLieuInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type TypeAnnonceCreateNestedOneWithoutAnnoncesInput = {
    create?: XOR<TypeAnnonceCreateWithoutAnnoncesInput, TypeAnnonceUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: TypeAnnonceCreateOrConnectWithoutAnnoncesInput
    connect?: TypeAnnonceWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutAnnoncesInput = {
    create?: XOR<CategoryCreateWithoutAnnoncesInput, CategoryUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAnnoncesInput
    connect?: CategoryWhereUniqueInput
  }

  export type LieuCreateNestedOneWithoutAnnoncesInput = {
    create?: XOR<LieuCreateWithoutAnnoncesInput, LieuUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: LieuCreateOrConnectWithoutAnnoncesInput
    connect?: LieuWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnnoncesInput = {
    create?: XOR<UserCreateWithoutAnnoncesInput, UserUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnoncesInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutAnnoncesInput = {
    create?: XOR<ImageCreateWithoutAnnoncesInput, ImageUncheckedCreateWithoutAnnoncesInput> | ImageCreateWithoutAnnoncesInput[] | ImageUncheckedCreateWithoutAnnoncesInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAnnoncesInput | ImageCreateOrConnectWithoutAnnoncesInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutAnnoncesInput = {
    create?: XOR<ImageCreateWithoutAnnoncesInput, ImageUncheckedCreateWithoutAnnoncesInput> | ImageCreateWithoutAnnoncesInput[] | ImageUncheckedCreateWithoutAnnoncesInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAnnoncesInput | ImageCreateOrConnectWithoutAnnoncesInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type TypeAnnonceUpdateOneRequiredWithoutAnnoncesNestedInput = {
    create?: XOR<TypeAnnonceCreateWithoutAnnoncesInput, TypeAnnonceUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: TypeAnnonceCreateOrConnectWithoutAnnoncesInput
    upsert?: TypeAnnonceUpsertWithoutAnnoncesInput
    connect?: TypeAnnonceWhereUniqueInput
    update?: XOR<XOR<TypeAnnonceUpdateToOneWithWhereWithoutAnnoncesInput, TypeAnnonceUpdateWithoutAnnoncesInput>, TypeAnnonceUncheckedUpdateWithoutAnnoncesInput>
  }

  export type CategoryUpdateOneRequiredWithoutAnnoncesNestedInput = {
    create?: XOR<CategoryCreateWithoutAnnoncesInput, CategoryUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAnnoncesInput
    upsert?: CategoryUpsertWithoutAnnoncesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAnnoncesInput, CategoryUpdateWithoutAnnoncesInput>, CategoryUncheckedUpdateWithoutAnnoncesInput>
  }

  export type LieuUpdateOneRequiredWithoutAnnoncesNestedInput = {
    create?: XOR<LieuCreateWithoutAnnoncesInput, LieuUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: LieuCreateOrConnectWithoutAnnoncesInput
    upsert?: LieuUpsertWithoutAnnoncesInput
    connect?: LieuWhereUniqueInput
    update?: XOR<XOR<LieuUpdateToOneWithWhereWithoutAnnoncesInput, LieuUpdateWithoutAnnoncesInput>, LieuUncheckedUpdateWithoutAnnoncesInput>
  }

  export type UserUpdateOneRequiredWithoutAnnoncesNestedInput = {
    create?: XOR<UserCreateWithoutAnnoncesInput, UserUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnoncesInput
    upsert?: UserUpsertWithoutAnnoncesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnoncesInput, UserUpdateWithoutAnnoncesInput>, UserUncheckedUpdateWithoutAnnoncesInput>
  }

  export type ImageUpdateManyWithoutAnnoncesNestedInput = {
    create?: XOR<ImageCreateWithoutAnnoncesInput, ImageUncheckedCreateWithoutAnnoncesInput> | ImageCreateWithoutAnnoncesInput[] | ImageUncheckedCreateWithoutAnnoncesInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAnnoncesInput | ImageCreateOrConnectWithoutAnnoncesInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAnnoncesInput | ImageUpsertWithWhereUniqueWithoutAnnoncesInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAnnoncesInput | ImageUpdateWithWhereUniqueWithoutAnnoncesInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAnnoncesInput | ImageUpdateManyWithWhereWithoutAnnoncesInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutAnnoncesNestedInput = {
    create?: XOR<ImageCreateWithoutAnnoncesInput, ImageUncheckedCreateWithoutAnnoncesInput> | ImageCreateWithoutAnnoncesInput[] | ImageUncheckedCreateWithoutAnnoncesInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAnnoncesInput | ImageCreateOrConnectWithoutAnnoncesInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAnnoncesInput | ImageUpsertWithWhereUniqueWithoutAnnoncesInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAnnoncesInput | ImageUpdateWithWhereUniqueWithoutAnnoncesInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAnnoncesInput | ImageUpdateManyWithWhereWithoutAnnoncesInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserSessionCreateWithoutUserInput = {
    token: string
    isExpired?: boolean
    createdAt?: Date | string
    lastAccessed?: Date | string | null
  }

  export type UserSessionUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    isExpired?: boolean
    createdAt?: Date | string
    lastAccessed?: Date | string | null
  }

  export type UserSessionCreateOrConnectWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionCreateManyUserInputEnvelope = {
    data: UserSessionCreateManyUserInput | UserSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnnonceCreateWithoutUserInput = {
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    typeAnnonce: TypeAnnonceCreateNestedOneWithoutAnnoncesInput
    categorie: CategoryCreateNestedOneWithoutAnnoncesInput
    lieu: LieuCreateNestedOneWithoutAnnoncesInput
    images?: ImageCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceUncheckedCreateWithoutUserInput = {
    id?: number
    typeAnnonceId: number
    categorieId: number
    lieuId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceCreateOrConnectWithoutUserInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutUserInput, AnnonceUncheckedCreateWithoutUserInput>
  }

  export type AnnonceCreateManyUserInputEnvelope = {
    data: AnnonceCreateManyUserInput | AnnonceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    update: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    data: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionUpdateManyWithWhereWithoutUserInput = {
    where: UserSessionScalarWhereInput
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionScalarWhereInput = {
    AND?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    OR?: UserSessionScalarWhereInput[]
    NOT?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    id?: IntFilter<"UserSession"> | number
    userId?: IntFilter<"UserSession"> | number
    token?: StringFilter<"UserSession"> | string
    isExpired?: BoolFilter<"UserSession"> | boolean
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    lastAccessed?: DateTimeNullableFilter<"UserSession"> | Date | string | null
  }

  export type AnnonceUpsertWithWhereUniqueWithoutUserInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutUserInput, AnnonceUncheckedUpdateWithoutUserInput>
    create: XOR<AnnonceCreateWithoutUserInput, AnnonceUncheckedCreateWithoutUserInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutUserInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutUserInput, AnnonceUncheckedUpdateWithoutUserInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutUserInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutUserInput>
  }

  export type AnnonceScalarWhereInput = {
    AND?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
    OR?: AnnonceScalarWhereInput[]
    NOT?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
    id?: IntFilter<"Annonce"> | number
    typeAnnonceId?: IntFilter<"Annonce"> | number
    categorieId?: IntFilter<"Annonce"> | number
    lieuId?: IntFilter<"Annonce"> | number
    userId?: IntFilter<"Annonce"> | number
    subcategorieId?: IntFilter<"Annonce"> | number
    title?: StringFilter<"Annonce"> | string
    description?: StringFilter<"Annonce"> | string
    price?: FloatFilter<"Annonce"> | number
    contact?: StringFilter<"Annonce"> | string
    haveImage?: BoolFilter<"Annonce"> | boolean
    firstImagePath?: StringFilter<"Annonce"> | string
    status?: StringFilter<"Annonce"> | string
    updatedAt?: DateTimeFilter<"Annonce"> | Date | string
    createdAt?: DateTimeFilter<"Annonce"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    password: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    annonces?: AnnonceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    annonces?: AnnonceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    annonces?: AnnonceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    annonces?: AnnonceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutTypeAnnonceInput = {
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutCategorieInput
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTypeAnnonceInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutCategorieInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTypeAnnonceInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTypeAnnonceInput, CategoryUncheckedCreateWithoutTypeAnnonceInput>
  }

  export type CategoryCreateManyTypeAnnonceInputEnvelope = {
    data: CategoryCreateManyTypeAnnonceInput | CategoryCreateManyTypeAnnonceInput[]
    skipDuplicates?: boolean
  }

  export type AnnonceCreateWithoutTypeAnnonceInput = {
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    categorie: CategoryCreateNestedOneWithoutAnnoncesInput
    lieu: LieuCreateNestedOneWithoutAnnoncesInput
    user: UserCreateNestedOneWithoutAnnoncesInput
    images?: ImageCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceUncheckedCreateWithoutTypeAnnonceInput = {
    id?: number
    categorieId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceCreateOrConnectWithoutTypeAnnonceInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutTypeAnnonceInput, AnnonceUncheckedCreateWithoutTypeAnnonceInput>
  }

  export type AnnonceCreateManyTypeAnnonceInputEnvelope = {
    data: AnnonceCreateManyTypeAnnonceInput | AnnonceCreateManyTypeAnnonceInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutTypeAnnonceInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutTypeAnnonceInput, CategoryUncheckedUpdateWithoutTypeAnnonceInput>
    create: XOR<CategoryCreateWithoutTypeAnnonceInput, CategoryUncheckedCreateWithoutTypeAnnonceInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutTypeAnnonceInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutTypeAnnonceInput, CategoryUncheckedUpdateWithoutTypeAnnonceInput>
  }

  export type CategoryUpdateManyWithWhereWithoutTypeAnnonceInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutTypeAnnonceInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    typeAnnonceId?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    nameAr?: StringFilter<"Category"> | string
    priority?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type AnnonceUpsertWithWhereUniqueWithoutTypeAnnonceInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutTypeAnnonceInput, AnnonceUncheckedUpdateWithoutTypeAnnonceInput>
    create: XOR<AnnonceCreateWithoutTypeAnnonceInput, AnnonceUncheckedCreateWithoutTypeAnnonceInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutTypeAnnonceInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutTypeAnnonceInput, AnnonceUncheckedUpdateWithoutTypeAnnonceInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutTypeAnnonceInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutTypeAnnonceInput>
  }

  export type TypeAnnonceCreateWithoutCategoriesInput = {
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutTypeAnnonceInput
  }

  export type TypeAnnonceUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutTypeAnnonceInput
  }

  export type TypeAnnonceCreateOrConnectWithoutCategoriesInput = {
    where: TypeAnnonceWhereUniqueInput
    create: XOR<TypeAnnonceCreateWithoutCategoriesInput, TypeAnnonceUncheckedCreateWithoutCategoriesInput>
  }

  export type AnnonceCreateWithoutCategorieInput = {
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    typeAnnonce: TypeAnnonceCreateNestedOneWithoutAnnoncesInput
    lieu: LieuCreateNestedOneWithoutAnnoncesInput
    user: UserCreateNestedOneWithoutAnnoncesInput
    images?: ImageCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceUncheckedCreateWithoutCategorieInput = {
    id?: number
    typeAnnonceId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceCreateOrConnectWithoutCategorieInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutCategorieInput, AnnonceUncheckedCreateWithoutCategorieInput>
  }

  export type AnnonceCreateManyCategorieInputEnvelope = {
    data: AnnonceCreateManyCategorieInput | AnnonceCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryCreateWithoutCategoryInput = {
    name: string
    nameAr: string
    priority?: number
    createdAt?: Date | string
  }

  export type SubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    nameAr: string
    priority?: number
    createdAt?: Date | string
  }

  export type SubCategoryCreateOrConnectWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateManyCategoryInputEnvelope = {
    data: SubCategoryCreateManyCategoryInput | SubCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TypeAnnonceUpsertWithoutCategoriesInput = {
    update: XOR<TypeAnnonceUpdateWithoutCategoriesInput, TypeAnnonceUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TypeAnnonceCreateWithoutCategoriesInput, TypeAnnonceUncheckedCreateWithoutCategoriesInput>
    where?: TypeAnnonceWhereInput
  }

  export type TypeAnnonceUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TypeAnnonceWhereInput
    data: XOR<TypeAnnonceUpdateWithoutCategoriesInput, TypeAnnonceUncheckedUpdateWithoutCategoriesInput>
  }

  export type TypeAnnonceUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutTypeAnnonceNestedInput
  }

  export type TypeAnnonceUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutTypeAnnonceNestedInput
  }

  export type AnnonceUpsertWithWhereUniqueWithoutCategorieInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutCategorieInput, AnnonceUncheckedUpdateWithoutCategorieInput>
    create: XOR<AnnonceCreateWithoutCategorieInput, AnnonceUncheckedCreateWithoutCategorieInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutCategorieInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutCategorieInput, AnnonceUncheckedUpdateWithoutCategorieInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutCategorieInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutCategorieInput>
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    nameAr?: StringFilter<"SubCategory"> | string
    categorieId?: IntFilter<"SubCategory"> | number
    priority?: IntFilter<"SubCategory"> | number
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
  }

  export type CategoryCreateWithoutSubCategoriesInput = {
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    typeAnnonce: TypeAnnonceCreateNestedOneWithoutCategoriesInput
    annonces?: AnnonceCreateNestedManyWithoutCategorieInput
  }

  export type CategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: number
    typeAnnonceId: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type CategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateWithoutSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAnnonce?: TypeAnnonceUpdateOneRequiredWithoutCategoriesNestedInput
    annonces?: AnnonceUpdateManyWithoutCategorieNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type AnnonceCreateWithoutImagesInput = {
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    typeAnnonce: TypeAnnonceCreateNestedOneWithoutAnnoncesInput
    categorie: CategoryCreateNestedOneWithoutAnnoncesInput
    lieu: LieuCreateNestedOneWithoutAnnoncesInput
    user: UserCreateNestedOneWithoutAnnoncesInput
  }

  export type AnnonceUncheckedCreateWithoutImagesInput = {
    id?: number
    typeAnnonceId: number
    categorieId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type AnnonceCreateOrConnectWithoutImagesInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutImagesInput, AnnonceUncheckedCreateWithoutImagesInput>
  }

  export type AnnonceUpsertWithWhereUniqueWithoutImagesInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutImagesInput, AnnonceUncheckedUpdateWithoutImagesInput>
    create: XOR<AnnonceCreateWithoutImagesInput, AnnonceUncheckedCreateWithoutImagesInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutImagesInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutImagesInput, AnnonceUncheckedUpdateWithoutImagesInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutImagesInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutImagesInput>
  }

  export type LieuCreateWithoutWilayaInput = {
    moughataa?: MoughataaCreateNestedOneWithoutLieuxInput
    gpsLocation?: GPSLocationCreateNestedOneWithoutLieuxInput
    annonces?: AnnonceCreateNestedManyWithoutLieuInput
  }

  export type LieuUncheckedCreateWithoutWilayaInput = {
    id?: number
    moughataaId?: number | null
    gpsLocationId?: number | null
    annonces?: AnnonceUncheckedCreateNestedManyWithoutLieuInput
  }

  export type LieuCreateOrConnectWithoutWilayaInput = {
    where: LieuWhereUniqueInput
    create: XOR<LieuCreateWithoutWilayaInput, LieuUncheckedCreateWithoutWilayaInput>
  }

  export type LieuCreateManyWilayaInputEnvelope = {
    data: LieuCreateManyWilayaInput | LieuCreateManyWilayaInput[]
    skipDuplicates?: boolean
  }

  export type LieuUpsertWithWhereUniqueWithoutWilayaInput = {
    where: LieuWhereUniqueInput
    update: XOR<LieuUpdateWithoutWilayaInput, LieuUncheckedUpdateWithoutWilayaInput>
    create: XOR<LieuCreateWithoutWilayaInput, LieuUncheckedCreateWithoutWilayaInput>
  }

  export type LieuUpdateWithWhereUniqueWithoutWilayaInput = {
    where: LieuWhereUniqueInput
    data: XOR<LieuUpdateWithoutWilayaInput, LieuUncheckedUpdateWithoutWilayaInput>
  }

  export type LieuUpdateManyWithWhereWithoutWilayaInput = {
    where: LieuScalarWhereInput
    data: XOR<LieuUpdateManyMutationInput, LieuUncheckedUpdateManyWithoutWilayaInput>
  }

  export type LieuScalarWhereInput = {
    AND?: LieuScalarWhereInput | LieuScalarWhereInput[]
    OR?: LieuScalarWhereInput[]
    NOT?: LieuScalarWhereInput | LieuScalarWhereInput[]
    id?: IntFilter<"Lieu"> | number
    wilayaId?: IntFilter<"Lieu"> | number
    moughataaId?: IntNullableFilter<"Lieu"> | number | null
    gpsLocationId?: IntNullableFilter<"Lieu"> | number | null
  }

  export type LieuCreateWithoutMoughataaInput = {
    wilaya?: WilayaCreateNestedOneWithoutLieuxInput
    gpsLocation?: GPSLocationCreateNestedOneWithoutLieuxInput
    annonces?: AnnonceCreateNestedManyWithoutLieuInput
  }

  export type LieuUncheckedCreateWithoutMoughataaInput = {
    id?: number
    wilayaId: number
    gpsLocationId?: number | null
    annonces?: AnnonceUncheckedCreateNestedManyWithoutLieuInput
  }

  export type LieuCreateOrConnectWithoutMoughataaInput = {
    where: LieuWhereUniqueInput
    create: XOR<LieuCreateWithoutMoughataaInput, LieuUncheckedCreateWithoutMoughataaInput>
  }

  export type LieuCreateManyMoughataaInputEnvelope = {
    data: LieuCreateManyMoughataaInput | LieuCreateManyMoughataaInput[]
    skipDuplicates?: boolean
  }

  export type LieuUpsertWithWhereUniqueWithoutMoughataaInput = {
    where: LieuWhereUniqueInput
    update: XOR<LieuUpdateWithoutMoughataaInput, LieuUncheckedUpdateWithoutMoughataaInput>
    create: XOR<LieuCreateWithoutMoughataaInput, LieuUncheckedCreateWithoutMoughataaInput>
  }

  export type LieuUpdateWithWhereUniqueWithoutMoughataaInput = {
    where: LieuWhereUniqueInput
    data: XOR<LieuUpdateWithoutMoughataaInput, LieuUncheckedUpdateWithoutMoughataaInput>
  }

  export type LieuUpdateManyWithWhereWithoutMoughataaInput = {
    where: LieuScalarWhereInput
    data: XOR<LieuUpdateManyMutationInput, LieuUncheckedUpdateManyWithoutMoughataaInput>
  }

  export type LieuCreateWithoutGpsLocationInput = {
    wilaya?: WilayaCreateNestedOneWithoutLieuxInput
    moughataa?: MoughataaCreateNestedOneWithoutLieuxInput
    annonces?: AnnonceCreateNestedManyWithoutLieuInput
  }

  export type LieuUncheckedCreateWithoutGpsLocationInput = {
    id?: number
    wilayaId: number
    moughataaId?: number | null
    annonces?: AnnonceUncheckedCreateNestedManyWithoutLieuInput
  }

  export type LieuCreateOrConnectWithoutGpsLocationInput = {
    where: LieuWhereUniqueInput
    create: XOR<LieuCreateWithoutGpsLocationInput, LieuUncheckedCreateWithoutGpsLocationInput>
  }

  export type LieuCreateManyGpsLocationInputEnvelope = {
    data: LieuCreateManyGpsLocationInput | LieuCreateManyGpsLocationInput[]
    skipDuplicates?: boolean
  }

  export type LieuUpsertWithWhereUniqueWithoutGpsLocationInput = {
    where: LieuWhereUniqueInput
    update: XOR<LieuUpdateWithoutGpsLocationInput, LieuUncheckedUpdateWithoutGpsLocationInput>
    create: XOR<LieuCreateWithoutGpsLocationInput, LieuUncheckedCreateWithoutGpsLocationInput>
  }

  export type LieuUpdateWithWhereUniqueWithoutGpsLocationInput = {
    where: LieuWhereUniqueInput
    data: XOR<LieuUpdateWithoutGpsLocationInput, LieuUncheckedUpdateWithoutGpsLocationInput>
  }

  export type LieuUpdateManyWithWhereWithoutGpsLocationInput = {
    where: LieuScalarWhereInput
    data: XOR<LieuUpdateManyMutationInput, LieuUncheckedUpdateManyWithoutGpsLocationInput>
  }

  export type WilayaCreateWithoutLieuxInput = {
    name: string
    nameAr: string
    priority: number
  }

  export type WilayaUncheckedCreateWithoutLieuxInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
  }

  export type WilayaCreateOrConnectWithoutLieuxInput = {
    where: WilayaWhereUniqueInput
    create: XOR<WilayaCreateWithoutLieuxInput, WilayaUncheckedCreateWithoutLieuxInput>
  }

  export type MoughataaCreateWithoutLieuxInput = {
    name: string
    nameAr: string
    priority: number
  }

  export type MoughataaUncheckedCreateWithoutLieuxInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
  }

  export type MoughataaCreateOrConnectWithoutLieuxInput = {
    where: MoughataaWhereUniqueInput
    create: XOR<MoughataaCreateWithoutLieuxInput, MoughataaUncheckedCreateWithoutLieuxInput>
  }

  export type GPSLocationCreateWithoutLieuxInput = {
    latitude: number
    longitude: number
  }

  export type GPSLocationUncheckedCreateWithoutLieuxInput = {
    id?: number
    latitude: number
    longitude: number
  }

  export type GPSLocationCreateOrConnectWithoutLieuxInput = {
    where: GPSLocationWhereUniqueInput
    create: XOR<GPSLocationCreateWithoutLieuxInput, GPSLocationUncheckedCreateWithoutLieuxInput>
  }

  export type AnnonceCreateWithoutLieuInput = {
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    typeAnnonce: TypeAnnonceCreateNestedOneWithoutAnnoncesInput
    categorie: CategoryCreateNestedOneWithoutAnnoncesInput
    user: UserCreateNestedOneWithoutAnnoncesInput
    images?: ImageCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceUncheckedCreateWithoutLieuInput = {
    id?: number
    typeAnnonceId: number
    categorieId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutAnnoncesInput
  }

  export type AnnonceCreateOrConnectWithoutLieuInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutLieuInput, AnnonceUncheckedCreateWithoutLieuInput>
  }

  export type AnnonceCreateManyLieuInputEnvelope = {
    data: AnnonceCreateManyLieuInput | AnnonceCreateManyLieuInput[]
    skipDuplicates?: boolean
  }

  export type WilayaUpsertWithoutLieuxInput = {
    update: XOR<WilayaUpdateWithoutLieuxInput, WilayaUncheckedUpdateWithoutLieuxInput>
    create: XOR<WilayaCreateWithoutLieuxInput, WilayaUncheckedCreateWithoutLieuxInput>
    where?: WilayaWhereInput
  }

  export type WilayaUpdateToOneWithWhereWithoutLieuxInput = {
    where?: WilayaWhereInput
    data: XOR<WilayaUpdateWithoutLieuxInput, WilayaUncheckedUpdateWithoutLieuxInput>
  }

  export type WilayaUpdateWithoutLieuxInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type WilayaUncheckedUpdateWithoutLieuxInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type MoughataaUpsertWithoutLieuxInput = {
    update: XOR<MoughataaUpdateWithoutLieuxInput, MoughataaUncheckedUpdateWithoutLieuxInput>
    create: XOR<MoughataaCreateWithoutLieuxInput, MoughataaUncheckedCreateWithoutLieuxInput>
    where?: MoughataaWhereInput
  }

  export type MoughataaUpdateToOneWithWhereWithoutLieuxInput = {
    where?: MoughataaWhereInput
    data: XOR<MoughataaUpdateWithoutLieuxInput, MoughataaUncheckedUpdateWithoutLieuxInput>
  }

  export type MoughataaUpdateWithoutLieuxInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type MoughataaUncheckedUpdateWithoutLieuxInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type GPSLocationUpsertWithoutLieuxInput = {
    update: XOR<GPSLocationUpdateWithoutLieuxInput, GPSLocationUncheckedUpdateWithoutLieuxInput>
    create: XOR<GPSLocationCreateWithoutLieuxInput, GPSLocationUncheckedCreateWithoutLieuxInput>
    where?: GPSLocationWhereInput
  }

  export type GPSLocationUpdateToOneWithWhereWithoutLieuxInput = {
    where?: GPSLocationWhereInput
    data: XOR<GPSLocationUpdateWithoutLieuxInput, GPSLocationUncheckedUpdateWithoutLieuxInput>
  }

  export type GPSLocationUpdateWithoutLieuxInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type GPSLocationUncheckedUpdateWithoutLieuxInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type AnnonceUpsertWithWhereUniqueWithoutLieuInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutLieuInput, AnnonceUncheckedUpdateWithoutLieuInput>
    create: XOR<AnnonceCreateWithoutLieuInput, AnnonceUncheckedCreateWithoutLieuInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutLieuInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutLieuInput, AnnonceUncheckedUpdateWithoutLieuInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutLieuInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutLieuInput>
  }

  export type TypeAnnonceCreateWithoutAnnoncesInput = {
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutTypeAnnonceInput
  }

  export type TypeAnnonceUncheckedCreateWithoutAnnoncesInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutTypeAnnonceInput
  }

  export type TypeAnnonceCreateOrConnectWithoutAnnoncesInput = {
    where: TypeAnnonceWhereUniqueInput
    create: XOR<TypeAnnonceCreateWithoutAnnoncesInput, TypeAnnonceUncheckedCreateWithoutAnnoncesInput>
  }

  export type CategoryCreateWithoutAnnoncesInput = {
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    typeAnnonce: TypeAnnonceCreateNestedOneWithoutCategoriesInput
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutAnnoncesInput = {
    id?: number
    typeAnnonceId: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutAnnoncesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAnnoncesInput, CategoryUncheckedCreateWithoutAnnoncesInput>
  }

  export type LieuCreateWithoutAnnoncesInput = {
    wilaya?: WilayaCreateNestedOneWithoutLieuxInput
    moughataa?: MoughataaCreateNestedOneWithoutLieuxInput
    gpsLocation?: GPSLocationCreateNestedOneWithoutLieuxInput
  }

  export type LieuUncheckedCreateWithoutAnnoncesInput = {
    id?: number
    wilayaId: number
    moughataaId?: number | null
    gpsLocationId?: number | null
  }

  export type LieuCreateOrConnectWithoutAnnoncesInput = {
    where: LieuWhereUniqueInput
    create: XOR<LieuCreateWithoutAnnoncesInput, LieuUncheckedCreateWithoutAnnoncesInput>
  }

  export type UserCreateWithoutAnnoncesInput = {
    email: string
    password: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    sessions?: UserSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnoncesInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnoncesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnoncesInput, UserUncheckedCreateWithoutAnnoncesInput>
  }

  export type ImageCreateWithoutAnnoncesInput = {
    imagePath: string
    createdAt?: Date | string | null
    altText?: string | null
  }

  export type ImageUncheckedCreateWithoutAnnoncesInput = {
    id?: number
    imagePath: string
    createdAt?: Date | string | null
    altText?: string | null
  }

  export type ImageCreateOrConnectWithoutAnnoncesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutAnnoncesInput, ImageUncheckedCreateWithoutAnnoncesInput>
  }

  export type TypeAnnonceUpsertWithoutAnnoncesInput = {
    update: XOR<TypeAnnonceUpdateWithoutAnnoncesInput, TypeAnnonceUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<TypeAnnonceCreateWithoutAnnoncesInput, TypeAnnonceUncheckedCreateWithoutAnnoncesInput>
    where?: TypeAnnonceWhereInput
  }

  export type TypeAnnonceUpdateToOneWithWhereWithoutAnnoncesInput = {
    where?: TypeAnnonceWhereInput
    data: XOR<TypeAnnonceUpdateWithoutAnnoncesInput, TypeAnnonceUncheckedUpdateWithoutAnnoncesInput>
  }

  export type TypeAnnonceUpdateWithoutAnnoncesInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutTypeAnnonceNestedInput
  }

  export type TypeAnnonceUncheckedUpdateWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutTypeAnnonceNestedInput
  }

  export type CategoryUpsertWithoutAnnoncesInput = {
    update: XOR<CategoryUpdateWithoutAnnoncesInput, CategoryUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<CategoryCreateWithoutAnnoncesInput, CategoryUncheckedCreateWithoutAnnoncesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAnnoncesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAnnoncesInput, CategoryUncheckedUpdateWithoutAnnoncesInput>
  }

  export type CategoryUpdateWithoutAnnoncesInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAnnonce?: TypeAnnonceUpdateOneRequiredWithoutCategoriesNestedInput
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type LieuUpsertWithoutAnnoncesInput = {
    update: XOR<LieuUpdateWithoutAnnoncesInput, LieuUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<LieuCreateWithoutAnnoncesInput, LieuUncheckedCreateWithoutAnnoncesInput>
    where?: LieuWhereInput
  }

  export type LieuUpdateToOneWithWhereWithoutAnnoncesInput = {
    where?: LieuWhereInput
    data: XOR<LieuUpdateWithoutAnnoncesInput, LieuUncheckedUpdateWithoutAnnoncesInput>
  }

  export type LieuUpdateWithoutAnnoncesInput = {
    wilaya?: WilayaUpdateOneWithoutLieuxNestedInput
    moughataa?: MoughataaUpdateOneWithoutLieuxNestedInput
    gpsLocation?: GPSLocationUpdateOneWithoutLieuxNestedInput
  }

  export type LieuUncheckedUpdateWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    wilayaId?: IntFieldUpdateOperationsInput | number
    moughataaId?: NullableIntFieldUpdateOperationsInput | number | null
    gpsLocationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutAnnoncesInput = {
    update: XOR<UserUpdateWithoutAnnoncesInput, UserUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<UserCreateWithoutAnnoncesInput, UserUncheckedCreateWithoutAnnoncesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnoncesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnoncesInput, UserUncheckedUpdateWithoutAnnoncesInput>
  }

  export type UserUpdateWithoutAnnoncesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutAnnoncesInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutAnnoncesInput, ImageUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<ImageCreateWithoutAnnoncesInput, ImageUncheckedCreateWithoutAnnoncesInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutAnnoncesInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutAnnoncesInput, ImageUncheckedUpdateWithoutAnnoncesInput>
  }

  export type ImageUpdateManyWithWhereWithoutAnnoncesInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutAnnoncesInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    imagePath?: StringFilter<"Image"> | string
    createdAt?: DateTimeNullableFilter<"Image"> | Date | string | null
    altText?: StringNullableFilter<"Image"> | string | null
  }

  export type UserSessionCreateManyUserInput = {
    id?: number
    token: string
    isExpired?: boolean
    createdAt?: Date | string
    lastAccessed?: Date | string | null
  }

  export type AnnonceCreateManyUserInput = {
    id?: number
    typeAnnonceId: number
    categorieId: number
    lieuId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserSessionUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    isExpired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnonceUpdateWithoutUserInput = {
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAnnonce?: TypeAnnonceUpdateOneRequiredWithoutAnnoncesNestedInput
    categorie?: CategoryUpdateOneRequiredWithoutAnnoncesNestedInput
    lieu?: LieuUpdateOneRequiredWithoutAnnoncesNestedInput
    images?: ImageUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyTypeAnnonceInput = {
    id?: number
    name: string
    nameAr: string
    priority: number
    createdAt?: Date | string
  }

  export type AnnonceCreateManyTypeAnnonceInput = {
    id?: number
    categorieId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CategoryUpdateWithoutTypeAnnonceInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutCategorieNestedInput
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTypeAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutCategorieNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutTypeAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUpdateWithoutTypeAnnonceInput = {
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategoryUpdateOneRequiredWithoutAnnoncesNestedInput
    lieu?: LieuUpdateOneRequiredWithoutAnnoncesNestedInput
    user?: UserUpdateOneRequiredWithoutAnnoncesNestedInput
    images?: ImageUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutTypeAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateManyWithoutTypeAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceCreateManyCategorieInput = {
    id?: number
    typeAnnonceId: number
    lieuId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SubCategoryCreateManyCategoryInput = {
    id?: number
    name: string
    nameAr: string
    priority?: number
    createdAt?: Date | string
  }

  export type AnnonceUpdateWithoutCategorieInput = {
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAnnonce?: TypeAnnonceUpdateOneRequiredWithoutAnnoncesNestedInput
    lieu?: LieuUpdateOneRequiredWithoutAnnoncesNestedInput
    user?: UserUpdateOneRequiredWithoutAnnoncesNestedInput
    images?: ImageUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUpdateWithoutImagesInput = {
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAnnonce?: TypeAnnonceUpdateOneRequiredWithoutAnnoncesNestedInput
    categorie?: CategoryUpdateOneRequiredWithoutAnnoncesNestedInput
    lieu?: LieuUpdateOneRequiredWithoutAnnoncesNestedInput
    user?: UserUpdateOneRequiredWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    lieuId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LieuCreateManyWilayaInput = {
    id?: number
    moughataaId?: number | null
    gpsLocationId?: number | null
  }

  export type LieuUpdateWithoutWilayaInput = {
    moughataa?: MoughataaUpdateOneWithoutLieuxNestedInput
    gpsLocation?: GPSLocationUpdateOneWithoutLieuxNestedInput
    annonces?: AnnonceUpdateManyWithoutLieuNestedInput
  }

  export type LieuUncheckedUpdateWithoutWilayaInput = {
    id?: IntFieldUpdateOperationsInput | number
    moughataaId?: NullableIntFieldUpdateOperationsInput | number | null
    gpsLocationId?: NullableIntFieldUpdateOperationsInput | number | null
    annonces?: AnnonceUncheckedUpdateManyWithoutLieuNestedInput
  }

  export type LieuUncheckedUpdateManyWithoutWilayaInput = {
    id?: IntFieldUpdateOperationsInput | number
    moughataaId?: NullableIntFieldUpdateOperationsInput | number | null
    gpsLocationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LieuCreateManyMoughataaInput = {
    id?: number
    wilayaId: number
    gpsLocationId?: number | null
  }

  export type LieuUpdateWithoutMoughataaInput = {
    wilaya?: WilayaUpdateOneWithoutLieuxNestedInput
    gpsLocation?: GPSLocationUpdateOneWithoutLieuxNestedInput
    annonces?: AnnonceUpdateManyWithoutLieuNestedInput
  }

  export type LieuUncheckedUpdateWithoutMoughataaInput = {
    id?: IntFieldUpdateOperationsInput | number
    wilayaId?: IntFieldUpdateOperationsInput | number
    gpsLocationId?: NullableIntFieldUpdateOperationsInput | number | null
    annonces?: AnnonceUncheckedUpdateManyWithoutLieuNestedInput
  }

  export type LieuUncheckedUpdateManyWithoutMoughataaInput = {
    id?: IntFieldUpdateOperationsInput | number
    wilayaId?: IntFieldUpdateOperationsInput | number
    gpsLocationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LieuCreateManyGpsLocationInput = {
    id?: number
    wilayaId: number
    moughataaId?: number | null
  }

  export type LieuUpdateWithoutGpsLocationInput = {
    wilaya?: WilayaUpdateOneWithoutLieuxNestedInput
    moughataa?: MoughataaUpdateOneWithoutLieuxNestedInput
    annonces?: AnnonceUpdateManyWithoutLieuNestedInput
  }

  export type LieuUncheckedUpdateWithoutGpsLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    wilayaId?: IntFieldUpdateOperationsInput | number
    moughataaId?: NullableIntFieldUpdateOperationsInput | number | null
    annonces?: AnnonceUncheckedUpdateManyWithoutLieuNestedInput
  }

  export type LieuUncheckedUpdateManyWithoutGpsLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    wilayaId?: IntFieldUpdateOperationsInput | number
    moughataaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnnonceCreateManyLieuInput = {
    id?: number
    typeAnnonceId: number
    categorieId: number
    userId: number
    subcategorieId: number
    title: string
    description: string
    price: number
    contact: string
    haveImage?: boolean
    firstImagePath: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type AnnonceUpdateWithoutLieuInput = {
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeAnnonce?: TypeAnnonceUpdateOneRequiredWithoutAnnoncesNestedInput
    categorie?: CategoryUpdateOneRequiredWithoutAnnoncesNestedInput
    user?: UserUpdateOneRequiredWithoutAnnoncesNestedInput
    images?: ImageUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutLieuInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateManyWithoutLieuInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeAnnonceId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subcategorieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    contact?: StringFieldUpdateOperationsInput | string
    haveImage?: BoolFieldUpdateOperationsInput | boolean
    firstImagePath?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutAnnoncesInput = {
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}