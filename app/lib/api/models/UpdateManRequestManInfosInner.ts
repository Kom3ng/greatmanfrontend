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
/**
 * 
 * @export
 * @interface UpdateManRequestManInfosInner
 */
export interface UpdateManRequestManInfosInner {
    /**
     * 语言
     * @type {string}
     * @memberof UpdateManRequestManInfosInner
     */
    language?: string;
    /**
     * 姓名
     * @type {string}
     * @memberof UpdateManRequestManInfosInner
     */
    name?: string;
    /**
     * 评论
     * @type {string}
     * @memberof UpdateManRequestManInfosInner
     */
    comment?: string | null;
}

/**
 * Check if a given object implements the UpdateManRequestManInfosInner interface.
 */
export function instanceOfUpdateManRequestManInfosInner(value: object): value is UpdateManRequestManInfosInner {
    return true;
}

export function UpdateManRequestManInfosInnerFromJSON(json: any): UpdateManRequestManInfosInner {
    return UpdateManRequestManInfosInnerFromJSONTyped(json, false);
}

export function UpdateManRequestManInfosInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateManRequestManInfosInner {
    if (json == null) {
        return json;
    }
    return {
        
        'language': json['language'] == null ? undefined : json['language'],
        'name': json['name'] == null ? undefined : json['name'],
        'comment': json['comment'] == null ? undefined : json['comment'],
    };
}

export function UpdateManRequestManInfosInnerToJSON(value?: UpdateManRequestManInfosInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'language': value['language'],
        'name': value['name'],
        'comment': value['comment'],
    };
}

