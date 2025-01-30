import React from 'react';
import NativeDndList from '@/components/table/index';
import Layout from '@/components/layouts/layout';

const App = () => (
  <Layout>
    <div style={{ padding: '20px' }}>
    <h1>Sortable List</h1>
    <NativeDndList />
    </div>
  </Layout>
);

export default App;
