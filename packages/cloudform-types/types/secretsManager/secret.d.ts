import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ReplicaRegion {
    KmsKeyId?: Value<string>;
    Region: Value<string>;
    constructor(properties: ReplicaRegion);
}
export declare class GenerateSecretString {
    ExcludeUppercase?: Value<boolean>;
    RequireEachIncludedType?: Value<boolean>;
    IncludeSpace?: Value<boolean>;
    ExcludeCharacters?: Value<string>;
    GenerateStringKey?: Value<string>;
    PasswordLength?: Value<number>;
    ExcludePunctuation?: Value<boolean>;
    ExcludeLowercase?: Value<boolean>;
    SecretStringTemplate?: Value<string>;
    ExcludeNumbers?: Value<boolean>;
    constructor(properties: GenerateSecretString);
}
export interface SecretProperties {
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    SecretString?: Value<string>;
    GenerateSecretString?: GenerateSecretString;
    ReplicaRegions?: List<ReplicaRegion>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Secret extends ResourceBase<SecretProperties> {
    static ReplicaRegion: typeof ReplicaRegion;
    static GenerateSecretString: typeof GenerateSecretString;
    constructor(properties?: SecretProperties);
}
