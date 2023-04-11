<a id="readme-top"></a>

# Social Awesome Button

Easy to use social media button collection with [VueJS](https://vuejs.org/) integration. Developed by [LogicSpark](https://logicspark.com) team

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Getting Started

Learn what is it required before using Social Awesome Button and how to install it quickly. Let's get started!

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

## Usage/Examples

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

| Prop     | Type                                                   | Required | Description                                                 |
| :------- | :----------------------------------------------------- | :------- | :---------------------------------------------------------- |
| `type`   | `facebook`\|`twitter`\|`google`\|`instagram`\|`tiktok` | Yes      | typr of social media                                        |
| `link`   | `object`                                               | Yes      | `{ href: string; target?: AnchorHTMLAttributes["target"] }` |
| `shape`  | `circle`\|`square`                                     | Optional | The shape of button. default is `circle`                    |
| `dark`   | `boolean`                                              | Optional | Is it in dark mode or not? default is false                 |
| `width`  | `number`                                               | Optional | the dimension of button. default is 40                      |
| `tootip` | `string`                                               | Optional | Whether to show tooltip with your message                   |

<p align="right">(<a href="#readme-top">back to top</a>)
