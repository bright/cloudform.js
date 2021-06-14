/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
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

export class ScalingInstruction {
    DisableDynamicScaling?: Value<boolean>
    ServiceNamespace!: Value<string>
    PredictiveScalingMaxCapacityBehavior?: Value<string>
    ScalableDimension!: Value<string>
    ScalingPolicyUpdateBehavior?: Value<string>
    MinCapacity!: Value<number>
    PredictiveScalingMaxCapacityBuffer?: Value<number>
    ResourceId!: Value<string>
    ScheduledActionBufferTime?: Value<number>
    MaxCapacity!: Value<number>
    PredictiveScalingMode?: Value<string>

    constructor(properties: ScalingInstruction) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class PredefinedScalingMetricSpecification {
    ResourceLabel?: Value<string>
    PredefinedScalingMetricType!: Value<string>

    constructor(properties: PredefinedScalingMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class CustomizedScalingMetricSpecification {
    MetricName!: Value<string>
    Statistic!: Value<string>
    Unit?: Value<string>
    Namespace!: Value<string>

    constructor(properties: CustomizedScalingMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class TagFilter {
    Key!: Value<string>

    constructor(properties: TagFilter) {
        Object.assign(this, properties)
    }
}

export class CustomizedLoadMetricSpecification {
    MetricName!: Value<string>
    Statistic!: Value<string>
    Unit?: Value<string>
    Namespace!: Value<string>

    constructor(properties: CustomizedLoadMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class ApplicationSource {
    CloudFormationStackARN?: Value<string>

    constructor(properties: ApplicationSource) {
        Object.assign(this, properties)
    }
}

export class TargetTrackingConfiguration {
    ScaleOutCooldown?: Value<number>
    TargetValue!: Value<number>
    DisableScaleIn?: Value<boolean>
    ScaleInCooldown?: Value<number>
    EstimatedInstanceWarmup?: Value<number>

    constructor(properties: TargetTrackingConfiguration) {
        Object.assign(this, properties)
    }
}

export class PredefinedLoadMetricSpecification {
    PredefinedLoadMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredefinedLoadMetricSpecification) {
        Object.assign(this, properties)
    }
}

export interface ScalingPlanProperties {

}

export default class ScalingPlan extends ResourceBase<ScalingPlanProperties> {
    static ScalingInstruction = ScalingInstruction
    static MetricDimension = MetricDimension
    static PredefinedScalingMetricSpecification = PredefinedScalingMetricSpecification
    static CustomizedScalingMetricSpecification = CustomizedScalingMetricSpecification
    static TagFilter = TagFilter
    static CustomizedLoadMetricSpecification = CustomizedLoadMetricSpecification
    static ApplicationSource = ApplicationSource
    static TargetTrackingConfiguration = TargetTrackingConfiguration
    static PredefinedLoadMetricSpecification = PredefinedLoadMetricSpecification

    constructor(properties: ScalingPlanProperties) {
        super('AWS::AutoScalingPlans::ScalingPlan', properties)
    }
}
