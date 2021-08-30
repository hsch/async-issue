# How to create this repo

```bash
npx create-react-app demo --typescript
cd demo
yarn add async @types/async
```

Modify `App.tsx`.

# Expected behaviour

Expected console output:

```
Waiting on a promise!
Done waiting!
Waiting on a promise!
Done waiting!
All promises done.
```

...and the browser shows **Ready!**

# It works in the development setup

```bash
yarn start
```

Go to http://localhost:3000, it will show **Ready!**

# Actual behaviour in production

```bash
yarn global add serve
yarn build && serve -s build
```

Go to http://localhost:5000, it will be stuck **Waiting...**

Actual console output:

```
Waiting on a promise!
Done waiting!
```
