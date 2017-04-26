//----------- Jest Tests -----------//

import React from 'react';
import ProgressBar from '../dist/progressbar-bundle.js';
import renderer from 'react-test-renderer';


it('should be able to run tests', () => {
    expect(1 + 2).toEqual(3);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<ProgressBar percent={50} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders when min, max and current are used', () => {
  const tree = renderer
    .create(<ProgressBar min={0} max={20} current={15} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('rounds non integer numbers', () => {
  const tree = renderer
    .create(<ProgressBar percent={51.6573} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('will not render values outside range', () => {
  const tree = renderer
    .create(<ProgressBar percent={155} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('will not render when values are not numbers', () => {
  const tree = renderer
    .create(<ProgressBar percent={'houseboat'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders themes', () => {
  const tree = renderer
    .create(<ProgressBar percent={51.6573} theme={'arctic'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('does not render when provided percent and min, max or current values', () => {
  const tree1 = renderer
    .create(<ProgressBar percent={51} min={2} />)
    .toJSON();
  expect(tree1).toMatchSnapshot();

  const tree2 = renderer
    .create(<ProgressBar percent={51} max={2} />)
    .toJSON();
  expect(tree2).toMatchSnapshot();

  const tree3 = renderer
    .create(<ProgressBar percent={51} current={2} />)
    .toJSON();
  expect(tree3).toMatchSnapshot();
});


