---
to: src/components/<%= level %>/<%= name %>/<%= name %>.stories.tsx
---

import React from 'react';
import { storiesOf } from '@storybook/react';
import { <%= h.toPascalCase(name) %> } from './<%= name %>';

storiesOf('Components|<%= level %>/<%= h.toPascalCase(name) %>').add('normal', () => (
  <<%= h.toPascalCase(name) %>>Sample test</<%= h.toPascalCase(name) %>>
));

