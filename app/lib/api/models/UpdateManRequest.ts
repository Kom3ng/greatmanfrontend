/* tslint:disable */
/* eslint-disable */
/**
 * Great Man API
 * great man api
 *
 * The version of the OpenAPI document: 1.0
 * Contact: admin@astrack.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { UpdateManRequestManInfosInner } from './UpdateManRequestManInfosInner';
import {
    UpdateManRequestManInfosInnerFromJSON,
    UpdateManRequestManInfosInnerFromJSONTyped,
    UpdateManRequestManInfosInnerToJSON,
} from './UpdateManRequestManInfosInner';

/**
 * 
 * @export
 * @interface UpdateManRequest
 */
export interface UpdateManRequest {
    /**
     * 头图
     * @type {string}
     * @memberof UpdateManRequest
     */
    headImgUrl?: string | null;
    /**
     * 
     * @type {Array<UpdateManRequestManInfosInner>}
     * @memberof UpdateManRequest
     */
    manInfos?: Array<UpdateManRequestManInfosInner>;
}

/**
 * Check if a given object implements the UpdateManRequest interface.
 */
export function instanceOfUpdateManRequest(value: object): value is UpdateManRequest {
    return true;
}

export function UpdateManRequestFromJSON(json: any): UpdateManRequest {
    return UpdateManRequestFromJSONTyped(json, false);
}

export function UpdateManRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateManRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'headImgUrl': json['headImgUrl'] == null ? undefined : json['headImgUrl'],
        'manInfos': json['manInfos'] == null ? undefined : ((json['manInfos'] as Array<any>).map(UpdateManRequestManInfosInnerFromJSON)),
    };
}

export function UpdateManRequestToJSON(value?: UpdateManRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'headImgUrl': value['headImgUrl'],
        'manInfos': value['manInfos'] == null ? undefined : ((value['manInfos'] as Array<any>).map(UpdateManRequestManInfosInnerToJSON)),
    };
}

