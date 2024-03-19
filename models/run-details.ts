/*
Coalesce API

REST API for performing operations with the Coalesce backend.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DeployRunDetails } from './deploy-run-details';
import { RefreshRunDetails } from './refresh-run-details';

/**
 * @type RunDetails
 * Detailed information about a run.
 * @export
 */
export type RunDetails = DeployRunDetails | RefreshRunDetails;


