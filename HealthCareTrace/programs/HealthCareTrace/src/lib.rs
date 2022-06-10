use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;
use std::mem::size_of;
use anchor_lang::solana_program::log::{sol_log_compute_units};

declare_id!("4yMJcfUii9vWPt98wucu3hccSrypw5EJoBAzgZjG8Q5a");

const USER_NAME_LENGTH: usize = 100;

#[program]
mod health_care_trace {
    use super::*;
    pub fn create_user(
        ctx: Context<CreateUser>,
        name: String,
        secret: String
    ) -> ProgramResult { 
        let user = &mut ctx.accounts.user;
        user.user_wallet_address = ctx.accounts.authority.key();
        user.user_name = name;
        user.secret = secret;
        msg!("user created");
        sol_log_compute_units();
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateUser<'info> {
    // We must specify the space in order to initialize an account.
    #[account(
        init, 
        seeds = [b"user".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<UserAccount>() + USER_NAME_LENGTH + 8
    )]
    pub user: Account<'info, UserAccount>,
    #[account(mut)]
    // the one who paid the transaction fees/
    pub authority: Signer<'info>,
    //pub system_program: Program<'info, System>,
    pub system_program: UncheckedAccount<'info>,
    pub clock: Sysvar<'info, Clock>
}

#[account]
pub struct UserAccount {
    pub user_name: String,
    pub secret: String,
    pub user_wallet_address: Pubkey
}