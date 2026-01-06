
See the [repo](https://github.com/anza-xyz/wallet-adapter)

[docs](https://github.com/anza-xyz/wallet-adapter/blob/master/APP.md)

### Install

Install these dependencies:

```shell
npm install --save \
    @solana/wallet-adapter-base \
    @solana/wallet-adapter-react \
    @solana/wallet-adapter-react-ui \
    @solana/wallet-adapter-wallets \
    @solana/web3.js \
    react
```

### For Launchpad

Spl dependency:
```shell
npm install @solana/spl-token
```

Adding Buffer:
```shell
npm install --save-dev vite-plugin-node-polyfills
```

Update ```vite.config.ts```
```ts
import { nodePolyfills } from 'vite-plugin-node-polyfills'
export default defineConfig({
    plugins: [react(), nodePolyfills(),],
})
```


