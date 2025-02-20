# Profile Calendar

This project provides an api that serves a image file, of which the content is the date of the current day.

![](https://profile-calendar.vercel.app/image?textColor=orange)

## how to use

```markdown
![](https://profile-calendar.vercel.app/image?textColor=orange)
```

## params

| name      | description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| textColor | Color of the text. Use `%23` for `#` e.g. `%23ffffff` for `#ffffff`.               |
| bgColor   | Color of the background. Use `%23` for `#` e.g. `%23ffffff` for `#ffffff`.         |
| locale    | Any string that can be accepted by `new Date().toLocaleDateString`, e.g. `"zh-CN"` |
