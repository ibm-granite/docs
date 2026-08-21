// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): React.ReactElement {
  return <Redirect to={useBaseUrl('models/granite4-2')} />;
}
