import * as React from 'react';

import Header from '../components/Header';
import PostCard from '../components/PostCard';
import SideCard from '../components/SideCard';
import UserList from '../components/UserList';

import { Container, Content } from '../styles/pages/feed';

// interface feedProps {}

const Feed: React.FC = () => {

  return (
    <>
      <Header headerType='General' />
      <Container>

        <SideCard/>
        <Content className='content'>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </Content>
        <UserList/>
       
      </Container>
    </>
  )
};

export default Feed;