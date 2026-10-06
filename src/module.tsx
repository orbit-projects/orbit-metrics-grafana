// Copyright 2026-present Orbit Contributors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0

import { AppPlugin } from '@grafana/data';
import App from './components/App/App';

export const plugin = new AppPlugin<{}>().setRootPage(App);
