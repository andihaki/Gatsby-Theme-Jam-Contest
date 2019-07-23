# add dep to site

```bash
yarn workspace site add gatsby react react-dom gatsby-theme-events@*
```

> @\* = workspace can pickup unpusblied theme

# check

```bash
yarn workspaces info
```

# add dep to theme

```
yarn workspace gatsby-theme-events add gatsby-theme-events add -P react react-dom gatsby
```

> -P = peer dependencies

```
yarn workspace gatsby-theme-events add gatsby-theme-events add -D react react-dom gatsby
```

# run dev

```
yarn workspace site develop
```
