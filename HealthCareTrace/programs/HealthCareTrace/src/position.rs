use std::mem::size_of;
use anchor_lang::prelude::*;
use borsh::{BorshDeserialize, BorshSerialize};

const NAME_LENGTH: usize = 100;
const TEXT_LENGTH: usize = 2048;
const NUM_BATCHS_LENGTH: usize = 20;


#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
pub enum PositionRole {
    Agriculture,
    Production
}

#[derive(Accounts)]
pub struct CreatePosition<'info> {

    #[account(
        init,
        payer = authority,
        space = size_of::<PositionAccount>() + NAME_LENGTH + TEXT_LENGTH + NUM_BATCHS_LENGTH * size_of::<Pubkey>() + 8
    )]
    pub position: Account<'info, PositionAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,

    pub clock: Sysvar<'info, Clock>,

}

#[account]
pub struct PositionAccount {
    pub name: String,
    pub description: String,
    pub role: PositionRole,
    pub stored_batchs: Vec<Pubkey>,
    pub num_stored_batchs: u64,
    pub creator: Pubkey,
}