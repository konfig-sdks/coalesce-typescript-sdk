/* tslint:disable */
/* eslint-disable */
/*
Coalesce API

REST API for performing operations with the Coalesce backend.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseEnvironment } from '../models';
// @ts-ignore
import { EnvironmentsResponse } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EnvironmentsApi - axios parameter creator
 * @export
 */
export const EnvironmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get information about an environment.
         * @summary Get Environment
         * @param {string} environmentID The environment ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInformation: async (environmentID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'environmentID' is not null or undefined
            assertParamExists('getInformation', 'environmentID', environmentID)
            const localVarPath = `/api/v1/environments/{environmentID}`
                .replace(`{${"environmentID"}}`, encodeURIComponent(String(environmentID !== undefined ? environmentID : `-environmentID-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/environments/{environmentID}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a collection of environment information.
         * @summary List Environments
         * @param {boolean} [detail] Include the full detail of the environments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInformation: async (detail?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/environments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (detail !== undefined) {
                localVarQueryParameter['detail'] = detail;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/environments',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EnvironmentsApi - functional programming interface
 * @export
 */
export const EnvironmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EnvironmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get information about an environment.
         * @summary Get Environment
         * @param {EnvironmentsApiGetInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInformation(requestParameters: EnvironmentsApiGetInformationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseEnvironment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInformation(requestParameters.environmentID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a collection of environment information.
         * @summary List Environments
         * @param {EnvironmentsApiListInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listInformation(requestParameters: EnvironmentsApiListInformationRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnvironmentsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listInformation(requestParameters.detail, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EnvironmentsApi - factory interface
 * @export
 */
export const EnvironmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EnvironmentsApiFp(configuration)
    return {
        /**
         * Get information about an environment.
         * @summary Get Environment
         * @param {EnvironmentsApiGetInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInformation(requestParameters: EnvironmentsApiGetInformationRequest, options?: AxiosRequestConfig): AxiosPromise<BaseEnvironment> {
            return localVarFp.getInformation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a collection of environment information.
         * @summary List Environments
         * @param {EnvironmentsApiListInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInformation(requestParameters: EnvironmentsApiListInformationRequest = {}, options?: AxiosRequestConfig): AxiosPromise<EnvironmentsResponse> {
            return localVarFp.listInformation(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInformation operation in EnvironmentsApi.
 * @export
 * @interface EnvironmentsApiGetInformationRequest
 */
export type EnvironmentsApiGetInformationRequest = {
    
    /**
    * The environment ID.
    * @type {string}
    * @memberof EnvironmentsApiGetInformation
    */
    readonly environmentID: string
    
}

/**
 * Request parameters for listInformation operation in EnvironmentsApi.
 * @export
 * @interface EnvironmentsApiListInformationRequest
 */
export type EnvironmentsApiListInformationRequest = {
    
    /**
    * Include the full detail of the environments.
    * @type {boolean}
    * @memberof EnvironmentsApiListInformation
    */
    readonly detail?: boolean
    
}

/**
 * EnvironmentsApiGenerated - object-oriented interface
 * @export
 * @class EnvironmentsApiGenerated
 * @extends {BaseAPI}
 */
export class EnvironmentsApiGenerated extends BaseAPI {
    /**
     * Get information about an environment.
     * @summary Get Environment
     * @param {EnvironmentsApiGetInformationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentsApiGenerated
     */
    public getInformation(requestParameters: EnvironmentsApiGetInformationRequest, options?: AxiosRequestConfig) {
        return EnvironmentsApiFp(this.configuration).getInformation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a collection of environment information.
     * @summary List Environments
     * @param {EnvironmentsApiListInformationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentsApiGenerated
     */
    public listInformation(requestParameters: EnvironmentsApiListInformationRequest = {}, options?: AxiosRequestConfig) {
        return EnvironmentsApiFp(this.configuration).listInformation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
