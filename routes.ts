/**
 * An array of routes that are accessible for public
 * These routes do not require authentication
 * @type {string[]}
 **/
export const publicRoutes = ["/"];
/**
 * An array of routes that are accessible for authentication
 * These routes will redirect logged in users settings
 * @type {string[]}
 **/
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 **/
export const apiRoutesPrefix = "/api/auth";
/**
 * The default redirect path after logged in
 * @type {string}
 **/
export const DEFAULT_LOGIN_REDIRECT = "/settings";
