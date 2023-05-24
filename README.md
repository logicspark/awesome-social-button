<a id="readme-top"></a>

<div align="center">
  <h1>Social Awesome Button</h1>
  
  [![npm](https://img.shields.io/npm/v/social-awesome-button)][package-url]
  [![VueJS](https://img.shields.io/badge/VueJS-3.0.x-%2341B883)][vue-url]
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/logicspark/social-awesome-button/blob/main/LICENSE)
  
  
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

This is created base on Vite + Vue3 + TypeScript so you will need to install this lib inside Vue3 project. Vue2 may be supported but it has not been fully tested yet.

Additionally, you will need to install brand icons from the lastest verion of Font Awesome.

1. Go to the Font Awesome [download](https://fontawesome.com/download) page
2. Select "Free for Web" to download
3. Unzip the downloaded file > Open Webfonts > Select the brand font to install into your Vue3 project

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

_Note: At the moment, the social icons are fixed at 10. For each social icon, there is a default background color which can be changed._

### Component attributes

Here is the attributes of this components that you can set

| Prop      | Type                                                                                                                                      | Required | Description                                                                                                                   |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------- |
| `type`    | `facebook`\|`twitter`\|`tiktok`\|<br>`instagram`\|`linkedin`\|`youtube`\|<br>`google`\|`pinterest`\|`snapchat`\|<br>`youtube`\|`whatsapp` | Yes      | 10 Social media icons that can be used.                                                                                       |
| `link`    | `object`                                                                                                                                  | Yes      | Show link of a button when it is clicked<br><pre>{<br> href: string; <br> target?: AnchorHTMLAttributes["target"] <br>}</pre> |
| `shape`   | `circle`\|`square`                                                                                                                        | Optional | Button shape. The defaul value is `circle`.                                                                                   |
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
[package-url]: https://www.npmjs.com/package/social-awesome-button

## :books: License

Distributed under the MIT License. See [`LICENSE`](https://github.com/logicspark/social-awesome-button/blob/main/LICENSE) for more information.

Free Font Awesome icons are licenses under CC BY 4.0 License while fonts are licensed under SIL OFL 1.1 License. Click [here](https://fontawesome.com/license/free) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)

## :pray: Acknowledgement

- [Font Awesome](https://fontawesome.com/)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)
