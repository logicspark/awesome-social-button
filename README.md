<a id="readme-top"></a>

<div align="center">
  <h1>Awesome Social Button</h1>
  
  [![npm](https://img.shields.io/npm/v/awesome-social-button)][package-url]
  [![VueJS](https://img.shields.io/badge/VueJS-3.0.x-%2341B883)][vue-url]
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/logicspark/awesome-social-button/blob/main/LICENSE)
  
  
</div>

<p align=center> Easy to use social media button collection with <a href="https://vuejs.org/">VueJS<a/> integration. Developed by <a href="https://logicspark.com">Logic Spark</a> team. </p>

<p align=center> The social media icons are from free brand font of <a href="https://fontawesome.com/">Font Awesome<a/>. </p>
<br>

<div align="center">
  <a href="#sunglasses-screenshots">Screenshots</a> - 
  <a href="#building_construction-built-with">Built With</a> - 
  <a href="#rocket-getting-started">Getting Started</a> - 
  <a href="#fire-usage">Usage</a> -
  <a href="#books-license">License</a> -
  <a href="#pray-acknowledgement">Acknowledgement</a>
</div>

<br>

## :sunglasses: Screenshots

Light Mode

https://user-images.githubusercontent.com/85727452/235587977-2163b465-cc6f-44fe-a767-dd5029fe2974.mov

Dark Mode

https://user-images.githubusercontent.com/85727452/235587690-25eb7e6c-08dd-4c85-8818-98cb8308046b.mov

<p align="right">(<a href="#readme-top">back to top</a>)

## :building_construction: Built With

Here is a list of frameworks/libraries used to develop Awesome Social Button

- [![Typescript][typescript]][typescript-url]
- [![Vue][vue]][vue-url]
- [![HTML][html]][html-url]
- [![CSS][css]][css-url]
- [![Vitest][vitest]][vitest-url]

<p align="right">(<a href="#readme-top">back to top</a>)

## :rocket: Getting Started

Learn what is required before using Awesome Social Button and how to install it quickly. Let's get started!

### Prerequisite

This is created based on Vite + Vue3 + TypeScript so you will need to install this lib inside Vue3 project. Vue2 may be supported but it has not been fully tested yet.

Additionally, you will need to install brand icons from the latest version of Font Awesome.

1. Go to the Font Awesome [download](https://fontawesome.com/download) page
2. Select "Free for Web" to download
3. Unzip the downloaded file > Open Webfonts > Select the brand font to install into your Vue3 project

_Note: You may use this library with only HTML & CSS. Please visit our [demo](https://asb.logicspark.com) to implement right away._

### Installation

There are a few ways you can install Awesome Social Button, namely npm, yarn and pnpm. If you install via npm, here is a single cmd to install this library

```sh
  npm install awesome-social-button
```

#### Other options

- yarn

```sh
  yarn add awesome-social-button
```

- pnpm

```sh
  pnpm add awesome-social-button
```

<p align="right">(<a href="#readme-top">back to top</a>)

## :fire: Usage

VueJS usage example

VueJS without composition API

```javascript
<template>
  <div id="app">
    <awesome-social-button
        type="facebook"
        :link="{ src: 'https://facebook.com'}"
    />
  </div>
</template>
<script>
import { AwesomeSocialButton } from 'awesome-social-button'

export default {
  components: {
    AwesomeSocialButton,
  },
}
</script>
```

VueJS with composition API

```javascript
<script setup>
import { AwesomeSocialButton } from 'awesome-social-button'
</script>
<template>
  <div id="app">
    <AwesomeSocialButton
        type="facebook"
        :link="{ src: 'https://facebook.com'}"
    />
  </div>
</template>

```

_Note: At the moment, the social icons are fixed at 10. For each social icon, there is a default background color which can be changed._

### Component attributes

Here are the attributes of that you can set

| Prop      | Type                                                                                                                                      | Required | Description                                                                                                                   |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------- |
| `type`    | `facebook`\|`twitter`\|`tiktok`\|<br>`instagram`\|`linkedin`\|`youtube`\|<br>`google`\|`pinterest`\|<br>`snapchat`\|`whatsapp` | Yes      | 10 Social media icons that can be used.                                                                                       |
| `link`    | `object`                                                                                                                                  | Yes      | Show link of a button when it is clicked<br><pre>{<br> href: string; <br> target?: AnchorHTMLAttributes["target"] <br>}</pre> |
| `shape`   | `circle`\|`square`                                                                                                                        | Optional | Button shape. The default value is `circle`.                                                                                   |
| `dark`    | `boolean`                                                                                                                                 | Optional | Turn on dark mode. The default value is FALSE.                                                                                |
| `width`   | `number`                                                                                                                                  | Optional | The dimension of a button. The default value is 40.                                                                           |
| `color`   | `string`                                                                                                                                  | Optional | The background color of a button, and if it's not specified, the button will use the default brand color.                     |
| `tooltip` | `string`                                                                                                                                  | Optional | Show or hide a tooltip message                                                                                                |

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
[package-url]: https://www.npmjs.com/package/awesome-social-button

## :books: License

Distributed under the MIT License. See [`LICENSE`](https://github.com/logicspark/awesome-social-button/blob/main/LICENSE) for more information.

Free Font Awesome icons are licensed under CC BY 4.0 License while fonts are licensed under SIL OFL 1.1 License. Click [here](https://fontawesome.com/license/free) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)

## :pray: Acknowledgement

- [Font Awesome](https://fontawesome.com/)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)
