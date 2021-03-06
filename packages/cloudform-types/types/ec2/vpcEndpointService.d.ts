import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCEndpointServiceProperties {
    NetworkLoadBalancerArns?: List<Value<string>>;
    AcceptanceRequired?: Value<boolean>;
    GatewayLoadBalancerArns?: List<Value<string>>;
}
export default class VPCEndpointService extends ResourceBase<VPCEndpointServiceProperties> {
    constructor(properties?: VPCEndpointServiceProperties);
}
