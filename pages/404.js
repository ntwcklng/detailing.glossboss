import Page from '../layouts/page'
import Heading from '../components/heading'

import React from 'react'
const MissingComponentPage = () => (
      <Page>
          <div>
            <Heading>404</Heading>
            <p>Diese Seite existiert nicht.</p>
          </div>
      </Page>
)
export default MissingComponentPage

