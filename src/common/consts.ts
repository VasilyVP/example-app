export enum systems {
    metric = 'metric',
    imperial = 'imperial'
}

export enum notificationTypes {
    //undefined = 'undefined',
    error = 'error',
}

const initialWeatherNow = {
    temp: null,
    feels: null,
    humidity: null,
    pressure: null,
    description: null,
    icon: null
}

export const initialWeather = {
    city: null,
    now: initialWeatherNow,
    forecast: null
}

export const initialNotification = {
    type: notificationTypes.error,
    msg: '',
}

export const initialState = {
    authentication: {
        email: null,
        firstName: null
    },
    options: {
        system: systems.metric,
        pressure: true,
        humidity: true
    },
    services: {
        serviceAvailable: true,
        gettingWeather: false,
        notification: initialNotification
    },
    weather: initialWeather
}