<a id="readme-top"></a>

<div align="center">
  <h1>Social Awesome Button</h1>
</div>

Easy to use social media button collection with [VueJS](https://vuejs.org/) integration. Developed by [LogicSpark](https://logicspark.com) team

<br>

<div align="center">
  <a href="#sunglasses-screenshots">Screenshots</a> - 
  <a href="#building_construction-built-with">Built With</a> - 
  <a href="#rocket-getting-started">Getting Started</a> - 
  <a href="#fire-usage">Usage</a> -
  <a href="#books-license">License</a> -
  <a href="#pray-acknowledgement">Acknowledgement</a>

  <br>
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  
</div>

<br>

## :sunglasses: Screenshots

Light Mode

https://user-images.githubusercontent.com/85727452/231132870-aeabb39e-5f24-4656-a5e2-a0cd28562fba.mp4

Dark Mode

https://user-images.githubusercontent.com/85727452/231132204-85bbc399-154c-4bd0-8a00-3648548c697e.mp4

<p align="right">(<a href="#readme-top">back to top</a>)

## :building_construction: Built With

Here is a list of frameworks/libraries used to develop Social Awesome Button

- [![Typescript][typescript]][typescript-url]
- [![Vue][vue]][vue-url]
- [![HTML][html]][html-url]
- [![CSS][css]][css-url]
- [![Vitest][vitest]][vitest-url]

<p align="right">(<a href="#readme-top">back to top</a>)

## :rocket: Getting Started

Learn what is required before using Social Awesome Button and how to install it quickly. Let's get started!

### Prerequisite

This is created base on Vite + Vue3 + TypeScript, So you will need to install this lib inside Vue3 project in order to use this libary. You can also use this lib inside Vue2 but we still don't test it yet.

_Note: You may use this library with only HTML & CSS. Please visit our [demo](https://social-awesome-button.logicspark.com) to implement right away._

### Installation

There are a few ways you can install Social Awesome Button, namely npm, yarn and pnpm. If you install via npm, here is a a single cmd to install this libarary

```sh
  npm install social-awesome-button
```

#### Other options

- yarn

```sh
  yarn add social-awesome-button
```

- pnpm

```sh
  pnpm add social-awesome-button
```

<p align="right">(<a href="#readme-top">back to top</a>)

## :fire: Usage

VueJS usage example

VueJS without composition API

```javascript
<template>
  <div id="app">
    <social-awesome-button
        type="facebook"
        :link="{ src: 'https://facebook.com'}"
    />
  </div>
</template>
<script>
import { SocialAwesomeButton } from 'social-awesome-button'

export default {
  components: {
    SocialAwesomeButton,
  },
}
</script>
```

VueJS with composition API

```javascript
<script setup>
import { SocialAwesomeButton } from 'social-awesome-button'
</script>
<template>
  <div id="app">
    <SocialAwesomeButton
        type="facebook"
        :link="{ src: 'https://facebook.com'}"
    />
  </div>
</template>

```

### Component attributes

Here is the attributes of this components that you can set

| Prop     | Type                                                       | Required | Description                                                                                                                 |
| :------- | :--------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `type`   | `facebook`\|`twitter`\|<br>`google`\|`instagram`\|`tiktok` | Yes      | typr of social media                                                                                                        |
| `link`   | `object`                                                   | Yes      | Link of this button when it is clicked<br><pre>{<br> href: string; <br> target?: AnchorHTMLAttributes["target"] <br>}</pre> |
| `shape`  | `circle`\|`square`                                         | Optional | The shape of button. default is `circle`                                                                                    |
| `dark`   | `boolean`                                                  | Optional | Is it in dark mode or not? default is false                                                                                 |
| `width`  | `number`                                                   | Optional | the dimension of button. default is 40                                                                                      |
| `tootip` | `string`                                                   | Optional | Whether to show tooltip with your message                                                                                   |

<p align="right">(<a href="#readme-top">back to top</a>)
  
  
[TypeScript]: https://img.shields.io/badge/typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[Html]: https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://www.w3schools.com/html/
[Css]: https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://www.w3schools.com/css/
[Vue]: https://img.shields.io/badge/vue.js-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white
[Vue-url]: https://vuejs.org/
[Vitest]: https://img.shields.io/badge/vitest-edd532?style=for-the-badge&logo=vitest&logoColor=black
[vitest-url]: https://vitest.dev/

## :books: License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)

## :pray: Acknowledgement

- [Img Shields](https://shields.io)
- [Font Awesome](https://fontawesome.com/)

<p align="right">(<a href="#readme-top">back to top</a>)
