/*
 * Copyright 2015 Mirantis, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 **/

define(function() {
  'use strict';

  return {
    proxyPort: 9057,
    tunnelOptions: {
      hostname: process.env.SELENIUM_SERVER_HOST || 'localhost',
      port: process.env.SELENIUM_SERVER_PORT || 4444
    },
    proxyUrl: 'http://localhost:9057/',
    maxConcurrency: 1,
    grep: /^/,
    excludeInstrumentation: /^/,
    reporters: ['Runner', 'tests/functional/screenshot_on_fail',
                {id: 'JUnit', filename: process.env.ARTIFACTS + '/junit.xml'}]
  };
});