import {
  NotifiContext,
  NotifiSubscriptionCard,
} from "@notifi-network/notifi-react-card";
import "@notifi-network/notifi-react-card/dist/index.css";

import { arrayify } from "ethers/lib/utils.js";

import { useAccount, useConnect, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Profile() {
  const { address, isConnected } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { signMessageAsync } = useSignMessage();

  return (
    <NotifiContext
      dappAddress="erictestnotificard"
      env="Development"
      signMessage={async (message) => {
        const result = await signMessageAsync({ message });
        return arrayify(result);
      }}
      walletPublicKey={address ?? ""}
      walletBlockchain="AVALANCHE"
    >
      <button onClick={() => connect()}>Connect Wallet</button>

      <div style={{ width: "400px" }}>
        <NotifiSubscriptionCard
          cardId="d0fd50cfb6e64f49ac28c53a1c4bf5a7"
          darkMode //optional
          inputs={{ userWallet: address ?? "" }}
        />
      </div>
    </NotifiContext>
  );
}
