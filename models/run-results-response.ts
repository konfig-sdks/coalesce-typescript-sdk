/*
Coalesce API

REST API for performing operations with the Coalesce backend.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RunResult } from './run-result';

/**
 * 
 * @export
 * @interface RunResultsResponse
 */
export interface RunResultsResponse {
    /**
     * A collection of run results.
     * @type {Array<RunResult>}
     * @memberof RunResultsResponse
     */
    'data': Array<RunResult>;
}

