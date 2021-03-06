import Dashboard_ from './dashboard';
import AnomalyDetector_ from './anomalyDetector';
import CompositeAlarm_ from './compositeAlarm';
import InsightRule_ from './insightRule';
import MetricStream_ from './metricStream';
import Alarm_ from './alarm';
export declare namespace CloudWatch {
    const Dashboard: typeof Dashboard_;
    const AnomalyDetector: typeof AnomalyDetector_;
    const CompositeAlarm: typeof CompositeAlarm_;
    const InsightRule: typeof InsightRule_;
    const MetricStream: typeof MetricStream_;
    const Alarm: typeof Alarm_;
    type Dashboard = Dashboard_;
    type AnomalyDetector = AnomalyDetector_;
    type CompositeAlarm = CompositeAlarm_;
    type InsightRule = InsightRule_;
    type MetricStream = MetricStream_;
    type Alarm = Alarm_;
}
