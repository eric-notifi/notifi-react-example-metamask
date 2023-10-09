# MetaMask dapp powered by Notifi-react-card example

This is a simple example of how to use the Notifi-react-card component in a dapp.

## Run the example

1. Clone this repo

2. Install dependencies

```bash
npm install
```

3. Run the example

```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Run the test

1. run the test

```bash
npm run test
```

Then you will see the test result in the terminal.

</details>
<summary>Output</summary>

```bash
❯ npm run test

> notifi-react-example-metamask@0.1.0 test
> cypress run --component --spec 'cypress/component/NotifiSubscriptionCard.cy.tsx' --headed


DevTools listening on ws://127.0.0.1:59287/devtools/browser/10e0140d-9ff3-4530-aa24-c22609a2644f
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://127.0.0.1:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/macbookpro4eric/Projects/notifi/ref/notifi-react-example-metamask/public' directory

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        13.3.0                                                                         │
  │ Browser:        Electron 114                                                                   │
  │ Node Version:   v18.13.0 (/Users/macbookpro4eric/.nvm/versions/node/v18.13.0/bin/node)         │
  │                 9m                                                                             │
  │ Specs:          1 found (NotifiSubscriptionCard.cy.tsx)                                        │
  │ Searched:       cypress/component/NotifiSubscriptionCard.cy.tsx                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  NotifiSubscriptionCard.cy.tsx                                                   (1 of 1)
17 assets
817 modules
client (webpack 5.74.0) compiled successfully in 1927 ms


  NotifiSubscriptionCard.cy.tsx
    ✓ Mount Card (501ms)
    ✓ Signup (2580ms)


  2 passing (3s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     3 seconds                                                                        │
  │ Spec Ran:     NotifiSubscriptionCard.cy.tsx                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  NotifiSubscriptionCard.cy.tsx            00:03        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:03        2        2        -        -        -

```

</details>
