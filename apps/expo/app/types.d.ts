import { config } from '@my/config'

export type Conf = typeof config

declare module '@beer-shop/ui' {
  interface TamaguiCustomConfig extends Conf {}
}
