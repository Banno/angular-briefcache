# angular-briefcache

Cache factory for Angular with short expirations. Designed for preventing duplication of HTTP requests caused by rapid-fire processes, such as running through routing states.

## Usage

Use it anywhere you would use Angular's `$cacheFactory`:

```javascript
angular.module('myApp', ['banno.briefCache']).service('ExampleService', function($http, briefCache) {
  return {
    find: function() {
      return $http.get('/api/example', { cache: briefCache });
    }
  };
});
```

## Installation

`bower install --save angular-briefcache` or `npm install --save angular-briefcache`

## Configuration

This cache factory comes with the following settings:

* Each item has a maximum age of 10 seconds.
* Expired items are deleted as they are requested (passive removal).
* The entire cache is completely cleared every hour.

## Contributing

You'll need [gulp](http://gulpjs.com/) installed on your machine to run the development tools. Then run `gulp` to run all of the tasks and watch the files for changes.

## Bugs & Feature Requests

Have an issue or feature request? Please [open a new issue](https://github.com/Banno/angular-briefcache/issues/new).

## License

Copyright 2015 [Jack Henry & Associates Inc](https://www.jackhenry.com/).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0).

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
