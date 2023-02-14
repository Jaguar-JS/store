export const API_URL = `${process.env.REACT_APP_URL}/api`
export const API_SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getProductsUrl = (string: string) => `/products${string}`
export const getReviewUrl = (string: string) => `/review${string}`
