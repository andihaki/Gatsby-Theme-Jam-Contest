# source

- https://www.gatsbyjs.org/tutorial/building-a-theme/
- https://egghead.io/courses/gatsby-theme-authoring
  > https://github.com/anamwp/gatsby-theme-with-json

# Lesson 1

## add dep to site

```sh
yarn workspace site add gatsby react react-dom gatsby-theme-events@*
```

> @\* = workspace can pickup unpusblied theme

## check

```sh
yarn workspaces info
```

## add dep to theme

```
yarn workspace gatsby-theme-events add -P react react-dom gatsby
```

> -P = peer dependencies

```
yarn workspace gatsby-theme-events add -D react react-dom gatsby
```

## run dev

```
yarn workspace site develop
```

# Lesson 2, Adding static data to Gatsby theme

## add dep to read .yml

```sh
yarn workspace gatsby-theme-events add gatsby-source-filesystem gatsby-transformer-yaml
```
