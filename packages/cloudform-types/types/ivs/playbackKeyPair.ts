/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface PlaybackKeyPairProperties {
    Name?: Value<string>
    PublicKeyMaterial: Value<string>
}

export default class PlaybackKeyPair extends ResourceBase<PlaybackKeyPairProperties> {


    constructor(properties: PlaybackKeyPairProperties) {
        super('AWS::IVS::PlaybackKeyPair', properties)
    }
}
