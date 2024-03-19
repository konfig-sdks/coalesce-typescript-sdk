/*
Coalesce API

REST API for performing operations with the Coalesce backend.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RunDetails } from './run-details';
import { RunStatus } from './run-status';
import { RunType } from './run-type';
import { SnowflakeUserCredentials } from './snowflake-user-credentials';

/**
 * The full details of a run, without the run results.
 * @export
 * @interface RunInfo
 */
export interface RunInfo {
    /**
     * 
     * @type {number}
     * @memberof RunInfo
     */
    'version'?: number;
    /**
     * 
     * @type {number}
     * @memberof RunInfo
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    'reRunID'?: string;
    /**
     * 
     * @type {RunDetails}
     * @memberof RunInfo
     */
    'runDetails': RunDetails;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    'runEndTime'?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof RunInfo
     */
    'runHistory'?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    'runStartTime'?: string;
    /**
     * 
     * @type {RunStatus}
     * @memberof RunInfo
     */
    'runStatus': RunStatus;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RunInfo
     */
    'runTimeParameters': { [key: string]: any; };
    /**
     * 
     * @type {RunType}
     * @memberof RunInfo
     */
    'runType': RunType;
    /**
     * 
     * @type {SnowflakeUserCredentials}
     * @memberof RunInfo
     */
    'userCredentials'?: SnowflakeUserCredentials;
    /**
     * 
     * @type {string}
     * @memberof RunInfo
     */
    'userID'?: string;
}

