import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Button, Card, Heading } from '../Primitives';
import Spinner from './Spinner';

function ErrorFallback(props) {
  const { error, componentStack, resetErrorBoundary } = props;

  return (
    <Card role="alert" p={[3, 3, 3, 4]}>
      <Heading>Something went wrong</Heading>
      <pre>
        {error.status} {error.message}
      </pre>
      <pre>{JSON.stringify(error.info, undefined, 2)}</pre>
      <pre>{componentStack}</pre>
      <Button type="button" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Card>
  );
}

function Boundary(props) {
  const { resetKeys, children } = props;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={resetKeys}>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default Boundary;
