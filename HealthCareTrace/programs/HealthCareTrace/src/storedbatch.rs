use anchor_lang::prelude::*;
use std::mem::size_of;

use crate::{position::PositionAccount, batch::BatchAccount};


#[derive(Accounts)]
pub struct TransfertBatch<'info> {

    #[account(mut)]
    pub old_position: Account<'info, PositionAccount>,

    #[account(mut)]
    pub new_position: Account<'info, PositionAccount>,

    #[account(mut)]
    pub batch: Account<'info, BatchAccount>,

    #[account(
        init,
        payer = authority,
        space = size_of::<StoredBatchAccount>() + 8
    )]
    pub stored_batch: Account<'info, StoredBatchAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub clock: Sysvar<'info, Clock>,

}


#[account]
pub struct StoredBatchAccount {
    pub store_pos: Pubkey,
    pub batch: Pubkey,
    pub timestamp: i64,
    pub creator: Pubkey,
    pub currently_stored: bool,
    pub index: u64,
}