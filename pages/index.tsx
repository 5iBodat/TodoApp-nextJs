import type { NextPage } from 'next'
import Layout from '../components/layouts/layout';
import HomePage from './home';

import 'material-icons/iconfont/material-icons.css';
const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}

export default Home
