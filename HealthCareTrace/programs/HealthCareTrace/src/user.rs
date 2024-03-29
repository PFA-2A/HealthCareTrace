use std::mem::size_of;
use anchor_lang::prelude::*;

use crate::position::PositionAccount;

const USER_NAME_LENGTH: usize = 100;

#[derive(Accounts)]
pub struct CreateUser<'info> {
    // We must specify the space in order to initialize an account.
    #[account(
        init,
        payer = authority,
        space = size_of::<UserAccount>() + USER_NAME_LENGTH + 8
    )]
    pub user: Account<'info, UserAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(mut)]
    pub position: Account<'info, PositionAccount>,

    pub system_program: Program<'info, System>,
    //pub system_program: UncheckedAccount<'info>,
    pub clock: Sysvar<'info, Clock>
}

#[account]
pub struct UserAccount {
    pub user_name: String,
    pub secret: String,
    pub position: Pubkey,
    pub user_wallet_address: Pubkey
}