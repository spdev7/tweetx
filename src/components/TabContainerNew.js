import React,{useState} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink,Row,Col} from 'reactstrap';
import classnames from 'classnames';
import UserCard from './UserCard';
import Card from './Card';
import {connect} from 'react-redux'

const TabContainerNew = (props) => {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const {post,xpost} = props;
    return (
        <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Posts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Followers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Following
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            {post.map((item) => <Card data={item}/>)}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
            {post.map((item) => <UserCard  page={"user"} data={item}/>)}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
            {xpost.map((item1) => <UserCard page={"user"} following={"following"} data={item1}/>)}
            </Col>
          </Row>
        </TabPane>
        </TabContent>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      post: state.user.post,
      xpost:state.user.post
  }
}

export default connect(mapStateToProps,null)(TabContainerNew)
