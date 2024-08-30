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
import type { GetTalkContent200ResponseAttachmentsInner } from './GetTalkContent200ResponseAttachmentsInner';
import {
    GetTalkContent200ResponseAttachmentsInnerFromJSON,
    GetTalkContent200ResponseAttachmentsInnerFromJSONTyped,
    GetTalkContent200ResponseAttachmentsInnerToJSON,
} from './GetTalkContent200ResponseAttachmentsInner';

/**
 * 
 * @export
 * @interface GetTalkContent200Response
 */
export interface GetTalkContent200Response {
    /**
     * 
     * @type {string}
     * @memberof GetTalkContent200Response
     */
    title?: string;
    /**
     * 主体部分文字
     * @type {string}
     * @memberof GetTalkContent200Response
     */
    content?: string;
    /**
     * 记者信息
     * @type {string}
     * @memberof GetTalkContent200Response
     */
    interviewer?: string | null;
    /**
     * 来源
     * @type {string}
     * @memberof GetTalkContent200Response
     */
    source?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof GetTalkContent200Response
     */
    date?: Date;
    /**
     * 
     * @type {Array<GetTalkContent200ResponseAttachmentsInner>}
     * @memberof GetTalkContent200Response
     */
    attachments?: Array<GetTalkContent200ResponseAttachmentsInner>;
}

/**
 * Check if a given object implements the GetTalkContent200Response interface.
 */
export function instanceOfGetTalkContent200Response(value: object): value is GetTalkContent200Response {
    return true;
}

export function GetTalkContent200ResponseFromJSON(json: any): GetTalkContent200Response {
    return GetTalkContent200ResponseFromJSONTyped(json, false);
}

export function GetTalkContent200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTalkContent200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'content': json['content'] == null ? undefined : json['content'],
        'interviewer': json['interviewer'] == null ? undefined : json['interviewer'],
        'source': json['source'] == null ? undefined : json['source'],
        'date': json['date'] == null ? undefined : (new Date(json['date'])),
        'attachments': json['attachments'] == null ? undefined : ((json['attachments'] as Array<any>).map(GetTalkContent200ResponseAttachmentsInnerFromJSON)),
    };
}

export function GetTalkContent200ResponseToJSON(value?: GetTalkContent200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'content': value['content'],
        'interviewer': value['interviewer'],
        'source': value['source'],
        'date': value['date'] == null ? undefined : ((value['date']).toISOString()),
        'attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(GetTalkContent200ResponseAttachmentsInnerToJSON)),
    };
}

