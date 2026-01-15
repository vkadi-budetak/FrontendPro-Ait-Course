export const ROUTES = {
  HOME: "/",
  GENDER_REVEAL: "/gender-reveal",
  NATIONALIZE: "/nationalize",
  COUNTER: "/counter",
  SPACE_MISSION: "/space-mission",
  CALCULATOR: "/calculator",
  CONTACTS: "/contact",
  ABOUT: "/about-us",
  PROFILE: "/profile",
  PROFILE_DATE: "/profile/data",
  SETTINGS: "/profile/settings",
  USERS: "/user-list",
  USER: (id: string | number) => `/users/${id}`,

  // PRODUCTS_PAGE: (id: string | number) => `/products/${id}`,
} as const;
