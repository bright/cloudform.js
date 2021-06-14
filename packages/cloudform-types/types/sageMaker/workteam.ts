/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class NotificationConfiguration {
    NotificationTopicArn!: Value<string>

    constructor(properties: NotificationConfiguration) {
        Object.assign(this, properties)
    }
}

export class CognitoMemberDefinition {
    CognitoUserPool!: Value<string>
    CognitoClientId!: Value<string>
    CognitoUserGroup!: Value<string>

    constructor(properties: CognitoMemberDefinition) {
        Object.assign(this, properties)
    }
}

export class MemberDefinition {


    constructor(properties: MemberDefinition) {
        Object.assign(this, properties)
    }
}

export interface WorkteamProperties {
    Description?: Value<string>
    WorkteamName?: Value<string>
}

export default class Workteam extends ResourceBase<WorkteamProperties> {
    static NotificationConfiguration = NotificationConfiguration
    static CognitoMemberDefinition = CognitoMemberDefinition
    static MemberDefinition = MemberDefinition

    constructor(properties?: WorkteamProperties) {
        super('AWS::SageMaker::Workteam', properties || {})
    }
}
