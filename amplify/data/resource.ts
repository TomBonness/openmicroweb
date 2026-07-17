import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
  WaitlistEntry: a
    .model({
      email: a.email().required(),
      source: a.string().required(),
      consentVersion: a.string().required(),
    })
    .authorization((allow) => [allow.publicApiKey().to(['create'])]),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
})
