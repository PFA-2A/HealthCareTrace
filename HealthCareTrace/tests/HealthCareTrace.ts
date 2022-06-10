import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { HealthCareTrace } from "../target/types/health_care_trace";

describe("HealthCareTrace", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.HealthCareTrace as Program<HealthCareTrace>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
