"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SimulationSoftwareSuite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SimulationSoftwareSuite = SimulationSoftwareSuite;
class RobotSoftwareSuite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RobotSoftwareSuite = RobotSoftwareSuite;
class SourceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceConfig = SourceConfig;
class RenderingEngine {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RenderingEngine = RenderingEngine;
class SimulationApplication extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::RoboMaker::SimulationApplication', properties);
    }
}
exports.default = SimulationApplication;
SimulationApplication.SimulationSoftwareSuite = SimulationSoftwareSuite;
SimulationApplication.RobotSoftwareSuite = RobotSoftwareSuite;
SimulationApplication.SourceConfig = SourceConfig;
SimulationApplication.RenderingEngine = RenderingEngine;
