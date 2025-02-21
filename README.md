# Profile Calendar

This project provides an api that serves a image file, of which the content is the date of the current day.

![alt text](docs/cheese-orange.png)

## how to use

```markdown
![](https://profile-calendar.vercel.app/image?textColor=orange)
```

## params

| name        | description                                                                         | default   |
| ----------- | ----------------------------------------------------------------------------------- | --------- |
| `width`     | Width of the image.                                                                 | `800`     |
| `height`    | Height of the image.                                                                | `70`      |
| `textColor` | Color of the text. Use `%23` for `#` e.g. `%23ffffff` for `#ffffff`.                | `#000000` |
| `bgColor`   | Color of the background. Use `%23` for `#` e.g. `%23ffffff` for `#ffffff`.          | `#ffffff` |
| `locale`    | Any string that can be accepted by `new Date().toLocaleDateString`, e.g. `"zh-CN"`. | -         |
| `fontSize`  | Font size.                                                                          | `40`      |
| `textAlign` | `center` `end` `left` `right` `start`                                               | `center`  |
