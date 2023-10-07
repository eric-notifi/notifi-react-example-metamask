import { arrayify } from "@ethersproject/bytes";
import {
  NotifiContext,
  NotifiSubscriptionCard,
} from "@notifi-network/notifi-react-card";
import "@notifi-network/notifi-react-card/dist/index.css";
import { ethers } from "ethers";

describe("NotifiSubscriptionCard.cy.tsx", () => {
  beforeEach(() => {
    // Workaround (cypress webpack not able to polyfill buffer)
    window.Buffer = require("buffer").Buffer;
    indexedDB.deleteDatabase("notifi");
    const seedPhrase =
      "civil squeeze word coach always source aunt believe yard urge night alert";
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/9c9ff698105d4f6b9b2b93eddc0dff72"
    );
    const wallet = ethers.Wallet.fromMnemonic(seedPhrase);
    const signer = wallet.connect(provider);
    cy.mount(
      <NotifiContext
        dappAddress="junitest.xyz"
        walletBlockchain="ETHEREUM"
        env="Development"
        walletPublicKey={signer.address}
        signMessage={async (message: Uint8Array) => {
          const signature = await signer.signMessage(message);
          return arrayify(signature);
        }}
      >
        <NotifiSubscriptionCard
          darkMode
          cardId="d8859ea72ff4449fa8f7f293ebd333c9"
        />
        ,
      </NotifiContext>
    );
  });

  it("Mount Card", () => {
    cy.get(".NotifiSubscriptionCard__container").should("exist");
  });

  it("Signup", () => {
    cy.get(".NotifiEmailInput__input").type("tester@notifi.network");
    cy.get(".NotifiPreviewCard__container").should("not.exist");
    cy.get(".NotifiSubscribeButton__button").click();
    cy.get(".NotifiPreviewCard__container").should("exist");
  });
});
