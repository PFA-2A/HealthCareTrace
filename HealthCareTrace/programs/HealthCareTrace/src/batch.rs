use std::mem::size_of;
use anchor_lang::prelude::*;

const NAME_LENGTH: usize = 100;
const TEXT_LENGTH: usize = 2048;
const NUM_COMPONENTS_LENGTH: usize = 20;

use crate::position::PositionAccount;
use crate::storedbatch::StoredBatchAccount;



#[derive(Accounts)]
pub struct CreateBatch<'info> {
    #[account(mut)]
    pub current_pos: Account<'info, PositionAccount>,

    #[account(mut)]
    pub component_list: Account<'info, ComponentsAccount>,

    #[account(
        init,
        payer = authority,
        space = size_of::<BatchAccount>() + NAME_LENGTH + TEXT_LENGTH + NUM_COMPONENTS_LENGTH * size_of::<Pubkey>() + 8
    )]
    pub batch: Account<'info, BatchAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,

    pub clock: Sysvar<'info, Clock>,

    #[account(
        init,
        payer = authority,
        space = size_of::<StoredBatchAccount>() + 8
    )]
    pub stored_batch: Account<'info, StoredBatchAccount>,
}

#[account]
pub struct BatchAccount {
    pub name: String,
    pub description: String,
    pub current_pos: Pubkey,
    pub position_history: Vec<Pubkey>,
    pub component_list: Pubkey,
    pub creator: Pubkey
}

#[account]
pub struct ComponentsAccount {
    pub items: Vec<BatchAccount>,
}