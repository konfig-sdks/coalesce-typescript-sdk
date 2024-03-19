/*
Coalesce API

REST API for performing operations with the Coalesce backend.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EnvironmentHealth } from './environment-health';
import { UserSummary } from './user-summary';

/**
 * Summary information about an environment.
 * @export
 * @interface EnvironmentSummary
 */
export interface EnvironmentSummary {
    /**
     * 
     * @type {string}
     * @memberof EnvironmentSummary
     */
    'createdAt': string;
    /**
     * 
     * @type {UserSummary}
     * @memberof EnvironmentSummary
     */
    'createdBy'?: UserSummary;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentSummary
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentSummary
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentSummary
     */
    'project'?: string;
    /**
     * 
     * @type {EnvironmentHealth}
     * @memberof EnvironmentSummary
     */
    'status': EnvironmentHealth;
}

