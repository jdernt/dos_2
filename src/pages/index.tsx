import React from 'react';
import { withRouter } from 'next/router';
import Page from '@components/abstract/page';

export class Index extends Page {
  render() {
    return super._render(
      <main className='container'>
      </main>
    );
  }
}

export default withRouter(Index);