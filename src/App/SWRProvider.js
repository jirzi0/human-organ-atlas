import React from 'react';
import { SWRConfig } from 'swr';

import { processDatasetResponse } from './helpers';

async function fetcher(endpoint) {
  const method = endpoint.endsWith('token') ? 'post' : 'get';
  const url = `${process.env.REACT_APP_SEARCH}${endpoint}`;
  const response = await fetch(url, { method });

  if (!response.ok) {
    const error = new Error(response.statusText);
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
}

export async function datasetFetcher(endpoint) {
  const response = await fetcher(endpoint);
  return processDatasetResponse(response);
}

export async function datasetsFetcher(endpoint) {
  const response = await fetcher(endpoint);
  return response.map(processDatasetResponse);
}

function SWRProvider(props) {
  const { children } = props;

  return (
    <SWRConfig value={{ suspense: true, revalidateOnFocus: false, fetcher }}>
      {children}
    </SWRConfig>
  );
}

export default SWRProvider;
