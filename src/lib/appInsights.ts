import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const connectionString = import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING

export const appInsights = new ApplicationInsights({
  config: {
    connectionString,
    enableAutoRouteTracking: true,
    enableUnhandledPromiseRejectionTracking: true,
  },
})

if (typeof connectionString === 'string' && connectionString.length > 0) {
  appInsights.loadAppInsights()
}

export const trackPageView = (name?: string) => {
  appInsights.trackPageView({ name })
}
