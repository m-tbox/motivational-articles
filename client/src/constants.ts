interface SubscriptionCard {
    [key: string]: {
        [key: string]: string | undefined
    }
}

interface ProductDescription {
    [key: string]: string[] | undefined
}

export const BASE_URL = "http://localhost:8080"

export const API_URLS = {
    login: `${BASE_URL}/auth/login`,
    signup: `${BASE_URL}/auth/signup`,
    checkAuth: `${BASE_URL}/auth/checkAuth`,
    subscriptionPrices: `${BASE_URL}/subscription/prices`,
    subscriptionSession: `${BASE_URL}/subscription/session`,
    getArticles: `${BASE_URL}/articles`,
}

export const SUBSCRIPTION_CARD_COLORS: SubscriptionCard = {
    background: {
        Standard: "var(--app-primary-color)",
    },

    color: {
        Basic: "var(--app-primary-color)",
        Standard: "var(--app-text-color)",
        Premium: "var(--app-primary-color)",
    },

    priceCircleBackground: {
        Basic: "var(--app-primary-color)",
        Standard: "var(--app-text-color)",
        Premium: "var(--app-primary-color)",
    },

    priceCircleText: {
        Basic: "var(--app-text-color)",
        Standard: "var(--app-primary-color)",
        Premium: "var(--app-text-color)",
    }
}

export const PRODUCT_DESCRIPTON: ProductDescription = {
    Basic: [
        "1 Article",
        "Free"
    ],
    Standard: [
        "2 Article",
        "This is"
    ],
    Premium: [
        "3 Article",
        "Detail"
    ]
}