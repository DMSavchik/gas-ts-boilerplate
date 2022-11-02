import { sayHello } from '@functions'

declare let global: { [functionName: string]: unknown }

global.sayHello = sayHello
