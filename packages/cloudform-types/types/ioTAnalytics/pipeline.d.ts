import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DeviceShadowEnrich {
    Attribute?: Value<string>;
    Next?: Value<string>;
    ThingName?: Value<string>;
    RoleArn?: Value<string>;
    Name?: Value<string>;
    constructor(properties: DeviceShadowEnrich);
}
export declare class Activity {
    SelectAttributes?: SelectAttributes;
    Datastore?: Datastore;
    Filter?: Filter;
    AddAttributes?: AddAttributes;
    Channel?: Channel;
    DeviceShadowEnrich?: DeviceShadowEnrich;
    Math?: Math;
    Lambda?: Lambda;
    DeviceRegistryEnrich?: DeviceRegistryEnrich;
    RemoveAttributes?: RemoveAttributes;
    constructor(properties: Activity);
}
export declare class Lambda {
    BatchSize?: Value<number>;
    Next?: Value<string>;
    LambdaName?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Lambda);
}
export declare class Math {
    Attribute?: Value<string>;
    Next?: Value<string>;
    Math?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Math);
}
export declare class RemoveAttributes {
    Next?: Value<string>;
    Attributes?: List<Value<string>>;
    Name?: Value<string>;
    constructor(properties: RemoveAttributes);
}
export declare class SelectAttributes {
    Next?: Value<string>;
    Attributes?: List<Value<string>>;
    Name?: Value<string>;
    constructor(properties: SelectAttributes);
}
export declare class Datastore {
    DatastoreName?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Datastore);
}
export declare class AddAttributes {
    Next?: Value<string>;
    Attributes?: {
        [key: string]: any;
    };
    Name?: Value<string>;
    constructor(properties: AddAttributes);
}
export declare class DeviceRegistryEnrich {
    Attribute?: Value<string>;
    Next?: Value<string>;
    ThingName?: Value<string>;
    RoleArn?: Value<string>;
    Name?: Value<string>;
    constructor(properties: DeviceRegistryEnrich);
}
export declare class Channel {
    ChannelName?: Value<string>;
    Next?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Channel);
}
export declare class Filter {
    Filter?: Value<string>;
    Next?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Filter);
}
export interface PipelineProperties {
    PipelineName?: Value<string>;
    Tags?: ResourceTag[];
    PipelineActivities: List<Activity>;
}
export default class Pipeline extends ResourceBase {
    static DeviceShadowEnrich: typeof DeviceShadowEnrich;
    static Activity: typeof Activity;
    static Lambda: typeof Lambda;
    static Math: typeof Math;
    static RemoveAttributes: typeof RemoveAttributes;
    static SelectAttributes: typeof SelectAttributes;
    static Datastore: typeof Datastore;
    static AddAttributes: typeof AddAttributes;
    static DeviceRegistryEnrich: typeof DeviceRegistryEnrich;
    static Channel: typeof Channel;
    static Filter: typeof Filter;
    constructor(properties?: PipelineProperties);
}
