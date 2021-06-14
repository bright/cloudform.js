/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class RecordFormat {
    RecordFormatType!: Value<string>

    constructor(properties: RecordFormat) {
        Object.assign(this, properties)
    }
}

export class CSVMappingParameters {
    RecordRowDelimiter!: Value<string>
    RecordColumnDelimiter!: Value<string>

    constructor(properties: CSVMappingParameters) {
        Object.assign(this, properties)
    }
}

export class S3ReferenceDataSource {
    BucketARN!: Value<string>
    FileKey!: Value<string>
    ReferenceRoleARN!: Value<string>

    constructor(properties: S3ReferenceDataSource) {
        Object.assign(this, properties)
    }
}

export class RecordColumn {
    Mapping?: Value<string>
    SqlType!: Value<string>
    Name!: Value<string>

    constructor(properties: RecordColumn) {
        Object.assign(this, properties)
    }
}

export class ReferenceSchema {
    RecordEncoding?: Value<string>

    constructor(properties: ReferenceSchema) {
        Object.assign(this, properties)
    }
}

export class MappingParameters {


    constructor(properties: MappingParameters) {
        Object.assign(this, properties)
    }
}

export class JSONMappingParameters {
    RecordRowPath!: Value<string>

    constructor(properties: JSONMappingParameters) {
        Object.assign(this, properties)
    }
}

export class ReferenceDataSource {
    TableName?: Value<string>

    constructor(properties: ReferenceDataSource) {
        Object.assign(this, properties)
    }
}

export interface ApplicationReferenceDataSourceProperties {
    ApplicationName: Value<string>
}

export default class ApplicationReferenceDataSource extends ResourceBase<ApplicationReferenceDataSourceProperties> {
    static RecordFormat = RecordFormat
    static CSVMappingParameters = CSVMappingParameters
    static S3ReferenceDataSource = S3ReferenceDataSource
    static RecordColumn = RecordColumn
    static ReferenceSchema = ReferenceSchema
    static MappingParameters = MappingParameters
    static JSONMappingParameters = JSONMappingParameters
    static ReferenceDataSource = ReferenceDataSource

    constructor(properties: ApplicationReferenceDataSourceProperties) {
        super('AWS::KinesisAnalytics::ApplicationReferenceDataSource', properties)
    }
}
