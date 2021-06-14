/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DatasetContentVersionValue {
    DatasetName?: Value<string>

    constructor(properties: DatasetContentVersionValue) {
        Object.assign(this, properties)
    }
}

export class GlueConfiguration {
    TableName!: Value<string>
    DatabaseName!: Value<string>

    constructor(properties: GlueConfiguration) {
        Object.assign(this, properties)
    }
}

export class DeltaTimeSessionWindowConfiguration {
    TimeoutInMinutes!: Value<number>

    constructor(properties: DeltaTimeSessionWindowConfiguration) {
        Object.assign(this, properties)
    }
}

export class OutputFileUriValue {
    FileName?: Value<string>

    constructor(properties: OutputFileUriValue) {
        Object.assign(this, properties)
    }
}

export class Filter {


    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class DatasetContentDeliveryRule {
    EntryName?: Value<string>

    constructor(properties: DatasetContentDeliveryRule) {
        Object.assign(this, properties)
    }
}

export class Action {
    ActionName!: Value<string>

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class LateDataRuleConfiguration {


    constructor(properties: LateDataRuleConfiguration) {
        Object.assign(this, properties)
    }
}

export class ContainerAction {
    ExecutionRoleArn!: Value<string>
    Image!: Value<string>

    constructor(properties: ContainerAction) {
        Object.assign(this, properties)
    }
}

export class LateDataRule {
    RuleName?: Value<string>

    constructor(properties: LateDataRule) {
        Object.assign(this, properties)
    }
}

export class QueryAction {
    SqlQuery!: Value<string>

    constructor(properties: QueryAction) {
        Object.assign(this, properties)
    }
}

export class DatasetContentDeliveryRuleDestination {


    constructor(properties: DatasetContentDeliveryRuleDestination) {
        Object.assign(this, properties)
    }
}

export class VersioningConfiguration {
    MaxVersions?: Value<number>
    Unlimited?: Value<boolean>

    constructor(properties: VersioningConfiguration) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    ScheduleExpression!: Value<string>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export class RetentionPeriod {
    NumberOfDays!: Value<number>
    Unlimited!: Value<boolean>

    constructor(properties: RetentionPeriod) {
        Object.assign(this, properties)
    }
}

export class S3DestinationConfiguration {
    Bucket!: Value<string>
    Key!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: S3DestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class Variable {
    DoubleValue?: Value<number>
    VariableName!: Value<string>
    StringValue?: Value<string>

    constructor(properties: Variable) {
        Object.assign(this, properties)
    }
}

export class DeltaTime {
    TimeExpression!: Value<string>
    OffsetSeconds!: Value<number>

    constructor(properties: DeltaTime) {
        Object.assign(this, properties)
    }
}

export class Trigger {


    constructor(properties: Trigger) {
        Object.assign(this, properties)
    }
}

export class IotEventsDestinationConfiguration {
    InputName!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: IotEventsDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class ResourceConfiguration {
    VolumeSizeInGB!: Value<number>
    ComputeType!: Value<string>

    constructor(properties: ResourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class TriggeringDataset {
    DatasetName!: Value<string>

    constructor(properties: TriggeringDataset) {
        Object.assign(this, properties)
    }
}

export interface DatasetProperties {
    DatasetName?: Value<string>
}

export default class Dataset extends ResourceBase<DatasetProperties> {
    static DatasetContentVersionValue = DatasetContentVersionValue
    static GlueConfiguration = GlueConfiguration
    static DeltaTimeSessionWindowConfiguration = DeltaTimeSessionWindowConfiguration
    static OutputFileUriValue = OutputFileUriValue
    static Filter = Filter
    static DatasetContentDeliveryRule = DatasetContentDeliveryRule
    static Action = Action
    static LateDataRuleConfiguration = LateDataRuleConfiguration
    static ContainerAction = ContainerAction
    static LateDataRule = LateDataRule
    static QueryAction = QueryAction
    static DatasetContentDeliveryRuleDestination = DatasetContentDeliveryRuleDestination
    static VersioningConfiguration = VersioningConfiguration
    static Schedule = Schedule
    static RetentionPeriod = RetentionPeriod
    static S3DestinationConfiguration = S3DestinationConfiguration
    static Variable = Variable
    static DeltaTime = DeltaTime
    static Trigger = Trigger
    static IotEventsDestinationConfiguration = IotEventsDestinationConfiguration
    static ResourceConfiguration = ResourceConfiguration
    static TriggeringDataset = TriggeringDataset

    constructor(properties: DatasetProperties) {
        super('AWS::IoTAnalytics::Dataset', properties)
    }
}
