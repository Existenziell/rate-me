const env = process.env.NODE_ENV || 'development'

const mailSettings = {
  host: process.env.NEXT_MAIL_HOST,
  port: process.env.NEXT_MAIL_PORT,
  auth: {
    user: process.env.NEXT_MAIL_USER,
    pass: process.env.NEXT_MAIL_PASS,
  },
  recipientMail: process.env.NEXT_MAIL_RECIPIENT
}

const config = {
  // Local Dev
  development: {
    db: {
      uri: process.env.NEXT_DEV_MONGODB_URI,
      dbName: process.env.NEXT_DEV_MONGODB_DB,
    },
    api: {
      url: process.env.NEXT_DEV_API_URL,
    },
    mail: { ...mailSettings },
    map: {
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    },
  },
  // Production 
  production: {
    db: {
      uri: process.env.NEXT_PROD_MONGODB_URI,
      dbName: process.env.NEXT_PROD_MONGODB_DB,
    },
    api: {
      url: process.env.NEXT_PROD_API_URL,
    },
    mail: { ...mailSettings },
    map: {
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    },
  },
  // Local but with production DB settings
  devProd: {
    db: {
      uri: process.env.NEXT_PROD_MONGODB_URI,
      dbName: process.env.NEXT_PROD_MONGODB_DB,
    },
    api: {
      url: process.env.NEXT_DEV_API_URL,
    },
    mail: { ...mailSettings },
    map: {
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    },
  },
}

export default config[env]
