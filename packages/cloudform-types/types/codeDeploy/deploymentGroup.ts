/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class TargetGroupInfo {
    Name?: Value<string>

    constructor(properties: TargetGroupInfo) {
        Object.assign(this, properties)
    }
}

export class OnPremisesTagSetListObject {


    constructor(properties: OnPremisesTagSetListObject) {
        Object.assign(this, properties)
    }
}

export class DeploymentStyle {
    DeploymentOption?: Value<string>
    DeploymentType?: Value<string>

    constructor(properties: DeploymentStyle) {
        Object.assign(this, properties)
    }
}

export class EC2TagFilter {
    Key?: Value<string>
    Type?: Value<string>
    Value?: Value<string>

    constructor(properties: EC2TagFilter) {
        Object.assign(this, properties)
    }
}

export class OnPremisesTagSet {


    constructor(properties: OnPremisesTagSet) {
        Object.assign(this, properties)
    }
}

export class LoadBalancerInfo {


    constructor(properties: LoadBalancerInfo) {
        Object.assign(this, properties)
    }
}

export class RevisionLocation {
    RevisionType?: Value<string>

    constructor(properties: RevisionLocation) {
        Object.assign(this, properties)
    }
}

export class TriggerConfig {
    TriggerName?: Value<string>
    TriggerTargetArn?: Value<string>

    constructor(properties: TriggerConfig) {
        Object.assign(this, properties)
    }
}

export class EC2TagSet {


    constructor(properties: EC2TagSet) {
        Object.assign(this, properties)
    }
}

export class AlarmConfiguration {
    Enabled?: Value<boolean>
    IgnorePollAlarmFailure?: Value<boolean>

    constructor(properties: AlarmConfiguration) {
        Object.assign(this, properties)
    }
}

export class AutoRollbackConfiguration {
    Enabled?: Value<boolean>

    constructor(properties: AutoRollbackConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    Bucket!: Value<string>
    BundleType?: Value<string>
    ETag?: Value<string>
    Key!: Value<string>
    Version?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class TagFilter {
    Key?: Value<string>
    Type?: Value<string>
    Value?: Value<string>

    constructor(properties: TagFilter) {
        Object.assign(this, properties)
    }
}

export class GitHubLocation {
    CommitId!: Value<string>
    Repository!: Value<string>

    constructor(properties: GitHubLocation) {
        Object.assign(this, properties)
    }
}

export class ELBInfo {
    Name?: Value<string>

    constructor(properties: ELBInfo) {
        Object.assign(this, properties)
    }
}

export class Alarm {
    Name?: Value<string>

    constructor(properties: Alarm) {
        Object.assign(this, properties)
    }
}

export class Deployment {
    Description?: Value<string>
    IgnoreApplicationStopFailures?: Value<boolean>

    constructor(properties: Deployment) {
        Object.assign(this, properties)
    }
}

export class EC2TagSetListObject {


    constructor(properties: EC2TagSetListObject) {
        Object.assign(this, properties)
    }
}

export interface DeploymentGroupProperties {
    ApplicationName: Value<string>
    DeploymentConfigName?: Value<string>
    DeploymentGroupName?: Value<string>
    ServiceRoleArn: Value<string>
}

export default class DeploymentGroup extends ResourceBase<DeploymentGroupProperties> {
    static TargetGroupInfo = TargetGroupInfo
    static OnPremisesTagSetListObject = OnPremisesTagSetListObject
    static DeploymentStyle = DeploymentStyle
    static EC2TagFilter = EC2TagFilter
    static OnPremisesTagSet = OnPremisesTagSet
    static LoadBalancerInfo = LoadBalancerInfo
    static RevisionLocation = RevisionLocation
    static TriggerConfig = TriggerConfig
    static EC2TagSet = EC2TagSet
    static AlarmConfiguration = AlarmConfiguration
    static AutoRollbackConfiguration = AutoRollbackConfiguration
    static S3Location = S3Location
    static TagFilter = TagFilter
    static GitHubLocation = GitHubLocation
    static ELBInfo = ELBInfo
    static Alarm = Alarm
    static Deployment = Deployment
    static EC2TagSetListObject = EC2TagSetListObject

    constructor(properties: DeploymentGroupProperties) {
        super('AWS::CodeDeploy::DeploymentGroup', properties)
    }
}
