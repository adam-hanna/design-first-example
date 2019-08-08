# design-first-example
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fadam-hanna%2Fdesign-first-example.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fadam-hanna%2Fdesign-first-example?ref=badge_shield)


This is an example design-first api of a classic TODO app with user registration.

Users and TODO's are stored in postgres. Authentication is achieved with cookie sessions using a redis cache backed passport. A CSRF token is used in the headers to protect against CSRF attacks.

## Running

The quickest way to run the app is with docker-compose:

```bash
$ cp .env.example .env
$ docker-compose up
```

## LICENSE
```
The MIT License (MIT)

Copyright (c) 2019 Adam Hanna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fadam-hanna%2Fdesign-first-example.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fadam-hanna%2Fdesign-first-example?ref=badge_large)