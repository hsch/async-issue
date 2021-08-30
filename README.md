# Steps to create

```bash
npx create-react-app demo --typescript
cd demo
yarn add async @types/async
```

Modify `App.tsx`.

# It works locally

```bash
yarn start
```

Go to http://localhost:3000, it will show **Ready!**

# It is getting stuck in the production build

```bash
yarn global add serve
yarn build
serve -s build
```

Go to http://localhost:5000, it will be stuck **Waiting...**
