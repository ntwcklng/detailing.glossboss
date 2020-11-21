import Page from '../layouts/Page'
import Heading from '../components/Heading'

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

