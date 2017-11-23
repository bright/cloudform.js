/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class NotificationFilter {
    S3Key: S3KeyFilter

    constructor(properties: NotificationFilter) {
        Object.assign(this, properties)
    }
}

export class RoutingRuleCondition {
    HttpErrorCodeReturnedEquals?: Value<string>
    KeyPrefixEquals?: Value<string>

    constructor(properties: RoutingRuleCondition) {
        Object.assign(this, properties)
    }
}

export class LifecycleConfiguration {
    Rules: List<Rule>

    constructor(properties: LifecycleConfiguration) {
        Object.assign(this, properties)
    }
}

export class LambdaConfiguration {
    Event: Value<string>
    Filter?: NotificationFilter
    Function: Value<string>

    constructor(properties: LambdaConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationRule {
    Destination: ReplicationDestination
    Id?: Value<string>
    Prefix: Value<string>
    Status: Value<string>

    constructor(properties: ReplicationRule) {
        Object.assign(this, properties)
    }
}

export class CorsRule {
    AllowedHeaders?: List<Value<string>>
    AllowedMethods: List<Value<string>>
    AllowedOrigins: List<Value<string>>
    ExposedHeaders?: List<Value<string>>
    Id?: Value<string>
    MaxAge?: Value<number>

    constructor(properties: CorsRule) {
        Object.assign(this, properties)
    }
}

export class Destination {
    BucketAccountId?: Value<string>
    BucketArn: Value<string>
    Format: Value<string>
    Prefix?: Value<string>

    constructor(properties: Destination) {
        Object.assign(this, properties)
    }
}

export class AnalyticsConfiguration {
    Id: Value<string>
    Prefix?: Value<string>
    StorageClassAnalysis: StorageClassAnalysis
    TagFilters?: List<TagFilter>

    constructor(properties: AnalyticsConfiguration) {
        Object.assign(this, properties)
    }
}

export class LoggingConfiguration {
    DestinationBucketName?: Value<string>
    LogFilePrefix?: Value<string>

    constructor(properties: LoggingConfiguration) {
        Object.assign(this, properties)
    }
}

export class StorageClassAnalysis {
    DataExport?: DataExport

    constructor(properties: StorageClassAnalysis) {
        Object.assign(this, properties)
    }
}

export class RoutingRule {
    RedirectRule: RedirectRule
    RoutingRuleCondition?: RoutingRuleCondition

    constructor(properties: RoutingRule) {
        Object.assign(this, properties)
    }
}

export class VersioningConfiguration {
    Status: Value<string>

    constructor(properties: VersioningConfiguration) {
        Object.assign(this, properties)
    }
}

export class NotificationConfiguration {
    LambdaConfigurations?: List<LambdaConfiguration>
    QueueConfigurations?: List<QueueConfiguration>
    TopicConfigurations?: List<TopicConfiguration>

    constructor(properties: NotificationConfiguration) {
        Object.assign(this, properties)
    }
}

export class RedirectRule {
    HostName?: Value<string>
    HttpRedirectCode?: Value<string>
    Protocol?: Value<string>
    ReplaceKeyPrefixWith?: Value<string>
    ReplaceKeyWith?: Value<string>

    constructor(properties: RedirectRule) {
        Object.assign(this, properties)
    }
}

export class RedirectAllRequestsTo {
    HostName: Value<string>
    Protocol?: Value<string>

    constructor(properties: RedirectAllRequestsTo) {
        Object.assign(this, properties)
    }
}

export class S3KeyFilter {
    Rules: List<FilterRule>

    constructor(properties: S3KeyFilter) {
        Object.assign(this, properties)
    }
}

export class InventoryConfiguration {
    Destination: Destination
    Enabled: Value<boolean>
    Id: Value<string>
    IncludedObjectVersions: Value<string>
    OptionalFields?: List<Value<string>>
    Prefix?: Value<string>
    ScheduleFrequency: Value<string>

    constructor(properties: InventoryConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebsiteConfiguration {
    ErrorDocument?: Value<string>
    IndexDocument?: Value<string>
    RedirectAllRequestsTo?: RedirectAllRequestsTo
    RoutingRules?: List<RoutingRule>

    constructor(properties: WebsiteConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationConfiguration {
    Role: Value<string>
    Rules: List<ReplicationRule>

    constructor(properties: ReplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class Rule {
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload
    ExpirationDate?: Value<string>
    ExpirationInDays?: Value<number>
    Id?: Value<string>
    NoncurrentVersionExpirationInDays?: Value<number>
    NoncurrentVersionTransition?: NoncurrentVersionTransition
    NoncurrentVersionTransitions?: List<NoncurrentVersionTransition>
    Prefix?: Value<string>
    Status: Value<string>
    TagFilters?: List<TagFilter>
    Transition?: Transition
    Transitions?: List<Transition>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class QueueConfiguration {
    Event: Value<string>
    Filter?: NotificationFilter
    Queue: Value<string>

    constructor(properties: QueueConfiguration) {
        Object.assign(this, properties)
    }
}

export class TopicConfiguration {
    Event: Value<string>
    Filter?: NotificationFilter
    Topic: Value<string>

    constructor(properties: TopicConfiguration) {
        Object.assign(this, properties)
    }
}

export class MetricsConfiguration {
    Id: Value<string>
    Prefix?: Value<string>
    TagFilters?: List<TagFilter>

    constructor(properties: MetricsConfiguration) {
        Object.assign(this, properties)
    }
}

export class TagFilter {
    Key: Value<string>
    Value: Value<string>

    constructor(properties: TagFilter) {
        Object.assign(this, properties)
    }
}

export class Transition {
    StorageClass: Value<string>
    TransitionDate?: Value<string>
    TransitionInDays?: Value<number>

    constructor(properties: Transition) {
        Object.assign(this, properties)
    }
}

export class DataExport {
    Destination: Destination
    OutputSchemaVersion: Value<string>

    constructor(properties: DataExport) {
        Object.assign(this, properties)
    }
}

export class CorsConfiguration {
    CorsRules: List<CorsRule>

    constructor(properties: CorsConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationDestination {
    Bucket: Value<string>
    StorageClass?: Value<string>

    constructor(properties: ReplicationDestination) {
        Object.assign(this, properties)
    }
}

export class AccelerateConfiguration {
    AccelerationStatus: Value<string>

    constructor(properties: AccelerateConfiguration) {
        Object.assign(this, properties)
    }
}

export class NoncurrentVersionTransition {
    StorageClass: Value<string>
    TransitionInDays: Value<number>

    constructor(properties: NoncurrentVersionTransition) {
        Object.assign(this, properties)
    }
}

export class AbortIncompleteMultipartUpload {
    DaysAfterInitiation: Value<number>

    constructor(properties: AbortIncompleteMultipartUpload) {
        Object.assign(this, properties)
    }
}

export class FilterRule {
    Name: Value<string>
    Value: Value<string>

    constructor(properties: FilterRule) {
        Object.assign(this, properties)
    }
}

export interface BucketProperties {
    AccelerateConfiguration?: AccelerateConfiguration
    AccessControl?: Value<string>
    AnalyticsConfigurations?: List<AnalyticsConfiguration>
    BucketName?: Value<string>
    CorsConfiguration?: CorsConfiguration
    InventoryConfigurations?: List<InventoryConfiguration>
    LifecycleConfiguration?: LifecycleConfiguration
    LoggingConfiguration?: LoggingConfiguration
    MetricsConfigurations?: List<MetricsConfiguration>
    NotificationConfiguration?: NotificationConfiguration
    ReplicationConfiguration?: ReplicationConfiguration
    Tags?: ResourceTag[]
    VersioningConfiguration?: VersioningConfiguration
    WebsiteConfiguration?: WebsiteConfiguration
}

export default class Bucket extends ResourceBase {
    constructor(properties: BucketProperties) {
        super('AWS::S3::Bucket', properties)
    }
}