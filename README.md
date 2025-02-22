# Profile Calendar

This project provides an api that serves a image file, of which the content is the date of the current day.

![Example](docs/radius-8.png)

## how to use

```markdown
![](https://profile-calendar.vercel.app/image?font=juicy-fills&bgColor=pink&radius=8)
```

## params

| name        | description                                                                | default         |
| ----------- | -------------------------------------------------------------------------- | --------------- |
| `width`     | Width of the image.                                                        | `1000`          |
| `height`    | Height of the image.                                                       | `100`           |
| `textColor` | Color of the text. Use `%23` for `#` e.g. `%23ffffff` for `#ffffff`.       | `#000000`       |
| `bgColor`   | Color of the background. Use `%23` for `#` e.g. `%23ffffff` for `#ffffff`. | `#ffffff`       |
| `fontSize`  | Font size.                                                                 | `60`            |
| `font`      | See [fonts](#fonts)                                                        | `cheese-orange` |
| `radius`    | Rounded background. <br /> ![](docs/radius-8.png)                          | -               |
| `title`     |                                                                            | `Welcome!`      |

## fonts

| font            |                                          |
| --------------- | ---------------------------------------- |
| `cheese-orange` | ![cheese-orange](docs/cheese-orange.png) |
| `bob`           | ![bob](docs/bob.png)                     |
| `juicy-fills`   | ![juicy-fills](docs/juicy-fills.png)     |
