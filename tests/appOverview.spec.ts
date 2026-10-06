// Copyright 2026-present Orbit Contributors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0

import { expect, test } from './fixtures';

test('overview explains the Prometheus integration and links to Orbit dashboards', async ({
  gotoPage,
  page,
}) => {
  await gotoPage();
  await expect(page.getByText('Connect Prometheus')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Runtime overview' })).toHaveAttribute(
    'href',
    '/d/orbit-runtime/orbit-runtime-overview'
  );
  await expect(page.getByRole('link', { name: 'HTTP traffic' })).toHaveAttribute(
    'href',
    '/d/orbit-http/orbit-http-traffic'
  );
});
