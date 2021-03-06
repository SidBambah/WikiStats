import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import DomainCountDynamicDonut from '../elements/DomainCountDynamicDonut';
import KeyChangesCard from '../elements/KeyChangesCard';
import BotPercentCard from '../elements/BotPercentCard';
import HourlyChangesBarChart from '../elements/HourlyChangesBarChart';
import UserLeaderboard from '../elements/UserLeaderboard';
import TopWikiCards from '../elements/TopWikiCards';
import TrafficLineChart from '../elements/TrafficLineChart';

export default class AnalyticsPage extends Component {

  render() {
    return (
      <div>
        <div className="m-b">
          <h2>Hello!</h2>
          <p className="text-muted">
            Here's what's going on with Wikipedia today.
          </p>
        </div>
        
        <TopWikiCards />

        <Row>
          <TrafficLineChart />
          <Col md={4} sm={12}>
            <Card>
              <CardHeader>Domain Change Frequency</CardHeader>
              <CardBody>
                <DomainCountDynamicDonut />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={8} sm={12}>
            <KeyChangesCard />
          </Col>
          <Col md={4} xs={12}>
            <BotPercentCard />
          </Col>
        </Row>
        <Row>
        <Col lg={12} md={12} sm={12}>
            
        </Col>
        </Row>
        <Row>
          <Col md={8} sm={12}>
            <HourlyChangesBarChart />
          </Col>
          <Col md={4} sm={12}>
          <Card>
              <CardHeader>Leaderboard</CardHeader>
              <CardBody>
                <div className="full-bleed">
                  <UserLeaderboard />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
