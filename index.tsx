import * as React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

class TestComponent extends React.Component<WrappedFieldProps> {
}

const test = (
  <Field name="test" component={TestComponent} />
);

