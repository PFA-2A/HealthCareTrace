import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import health_care_trace from './health_care_trace.json';

export const SOLANA_HOST = clusterApiUrl('devnet');

export const HEALTHCARETRACE_PROGRAM_ID = new PublicKey(
    "DSb71pb4Tfs9F5bkzX69JQFrZoXnUeqBkufndfGk62JX"
)

export const HEALTHCARETRACE_IDL = health_care_trace