/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class LifecyclePolicy {
    LifecyclePolicyText?: Value<string>
    RegistryId?: Value<string>

    constructor(properties: LifecyclePolicy) {
        Object.assign(this, properties)
    }
}

export interface RepositoryProperties {
    LifecyclePolicy?: LifecyclePolicy
    RepositoryName?: Value<string>
    RepositoryPolicyText?: any
}

export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties) {
        super('AWS::ECR::Repository', properties)
    }
}