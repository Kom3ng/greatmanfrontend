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
 * @interface GetTalkContent200ResponseAttachmentsInner
 */
export interface GetTalkContent200ResponseAttachmentsInner {
    /**
     * 附件类型
     * @type {string}
     * @memberof GetTalkContent200ResponseAttachmentsInner
     */
    type?: string;
    /**
     * 附件内容, 可以能是文件链接等
     * @type {string}
     * @memberof GetTalkContent200ResponseAttachmentsInner
     */
    value?: string;
}

/**
 * Check if a given object implements the GetTalkContent200ResponseAttachmentsInner interface.
 */
export function instanceOfGetTalkContent200ResponseAttachmentsInner(value: object): value is GetTalkContent200ResponseAttachmentsInner {
    return true;
}

export function GetTalkContent200ResponseAttachmentsInnerFromJSON(json: any): GetTalkContent200ResponseAttachmentsInner {
    return GetTalkContent200ResponseAttachmentsInnerFromJSONTyped(json, false);
}

export function GetTalkContent200ResponseAttachmentsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTalkContent200ResponseAttachmentsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function GetTalkContent200ResponseAttachmentsInnerToJSON(value?: GetTalkContent200ResponseAttachmentsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'value': value['value'],
    };
}

