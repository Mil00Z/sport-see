/**
 * @fileoverview Service endpoints for the SportSee API
 * @module services
 */

/**
 * Array of API endpoints for accessing user data
 * @constant {string[]} urls
 * @description Contains the following endpoints:
 * - User main data
 * - User activity data
 * - User average sessions data
 * - User performance data
 */
let urls = [
  `http://localhost:3000/user/${userId}`,
  `http://localhost:3000/user/${userId}/activity`,
  `http://localhost:3000/user/${userId}/average-sessions`,
  `http://localhost:3000/user/${userId}/performance`
]