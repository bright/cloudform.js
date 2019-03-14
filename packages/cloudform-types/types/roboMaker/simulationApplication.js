"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RenderingEngine {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RenderingEngine = RenderingEngine;
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
class SimulationApplication extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::RoboMaker::SimulationApplication', properties);
    }
}
SimulationApplication.RenderingEngine = RenderingEngine;
SimulationApplication.SimulationSoftwareSuite = SimulationSoftwareSuite;
SimulationApplication.RobotSoftwareSuite = RobotSoftwareSuite;
SimulationApplication.SourceConfig = SourceConfig;
exports.default = SimulationApplication;