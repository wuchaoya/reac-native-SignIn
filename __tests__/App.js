import 'react-native';
import React from 'react';
import App from '../app/base/baseApp';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});
