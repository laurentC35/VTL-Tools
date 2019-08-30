import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

const globalContainer = { margin: '5%' };

addDecorator(story => <div style={globalContainer}>{story()}</div>);
addDecorator(withKnobs);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const loadStories = () =>
	requireAll(require.context('js/stories', true, /stories\.js?$/));

configure(loadStories, module);