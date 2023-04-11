<a id="readme-top"></a>

# Social Awesome Button

Easy to use social media button collection with [VueJS](https://vuejs.org/) integration. Developed by [LogicSpark](https://logicspark.com) team

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

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

https://user-images.githubusercontent.com/85727452/231132870-aeabb39e-5f24-4656-a5e2-a0cd28562fba.mp4

Dark Mode

https://user-images.githubusercontent.com/85727452/231132204-85bbc399-154c-4bd0-8a00-3648548c697e.mp4

## :rocket: Getting Started

Learn what is required before using Social Awesome Button and how to install it quickly. Let's get started!

### Prerequisite

Let's assumed that you are using Vue3 as your frontend framework for your project. So you can go through your project, and install this library via `npm` or what package manager that you're prefer

```bash
  cd your-vue-project
  # npm
  npm install social-awesome-button
  # yarn
  yarn add social-awesome-button
  # pnpm
  pnpm add social-awesome-button
```

<p align="right">(<a href="#readme-top">back to top</a>)

## :fire: Usage/Examples

VueJS usage example

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

## :books: License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)

## :pray: Acknowledgement
* [Img Shields](https://shields.io)
* [Font Awesome](https://fontawesome.com/)

<p align="right">(<a href="#readme-top">back to top</a>)
