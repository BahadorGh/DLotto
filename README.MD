## Preparing DLotto (Lotto Dapp)

- Clone `this repo`

```
git clone git@github.com:BahadorGh/DLotto.git
```

## Initilize setings

```
cd backend
npm i
```

### Compile and deploy

```
npx hardhat compile
npx hardhat node
npx hardhat run scripts/deploy.js
```

### Todo:

- [ ] Backend
  - [x] Develop Starter Smart Contract
  - [ ] Adding Comments To Contracts
  - [ ] Implement Winning Function(preferred: using oracle)
  - [ ] Develop Factory Contract
- [ ] Frontend
  - [ ] Create UI(preferred: React.js)
  - [ ] Connect to UI(preferred: ethers.js)
