use anchor_lang::prelude::*;

#[account]
pub struct StoredBatchAccount {
    pub store_pos: Pubkey,
    pub batch: Pubkey,
    pub timestamp: i64,
    pub creator: Pubkey,
    pub currently_stored: bool,
    pub index: u64,
}