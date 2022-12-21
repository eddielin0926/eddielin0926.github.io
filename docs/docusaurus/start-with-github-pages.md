---
sidebar_position: 1
---

# Start with GitHub Pages

## Create Repository

You can create a new repository named `<username>.github.io` or any other name you want on GitHub. If your repository name is `my-website`, your site URL will be `https://<username>.github.io/my-website`.  
Here I take `<username>.github.io` as an example.
After creating the repository, you need to create a new branch for deployment. The default branch is `gh-pages`, but I name the branch `deployment`.

## Initialize with Docusaurus

Please use **SSH** to clone your repository. Otherwise, you need to set up some extra environment variables while deploying.
After that, you can initialize the repository by Docusaurus with the following command.  

```shell
npx create-docusaurus@latest <username>.github.io classic --typescript
```

The `--typescript` flag means that you are using the typescript template. You can remove the flag if you want to initialize with a javascript template.

## Configuration

I pick some configurations which are related to deployment in `docusaurus.config.js`. If your repository name isn't `<username>.github.io`, the `baseUrl` should be `/<repository-name>`.  
The default `deploymentBranch` is `gh-pages`, but you can change it to any other branch.

```js
const config = {
  ...
  url: 'https://<username>.github.io',
  baseUrl: '/',
  ...

  // GitHub pages deployment config.
  organizationName: '<username>', // Usually your GitHub org/user name.
  projectName: '<username>.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',
  ...
};
```

## Build and Deployment

### GitHub

Go to your repository > Settings > Pages.  
Choose "Deploy from a branch" as the source and choose the branch you want to deploy on.  
You can either choose `deployment` or `gh-pages`.

![](https://i.imgur.com/tNlxKCK.png)

### Local

Commit your changes and run deployment.

```shell
git add .
git commit -m "feat: ✨ initialize the repository with docusaurus"
yarn deploy
```

## Congratulation

Your website will be running on `https://<username>.github.io` in a minute!
