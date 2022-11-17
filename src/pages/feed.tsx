import * as React from 'react';
import Header from '../components/Header';
import { Container, SideCard, Content, UserList, } from '../styles/pages/feed';

interface feedProps {}

const feed: React.FC<feedProps> = props => {
  return (
    <>
      <Header headerType='General' />
      <Container>
        <SideCard>
          
        </SideCard>
        <Content>

        </Content>
        <UserList>

        </UserList>
      </Container>
    </>
  )
};

export default feed;
