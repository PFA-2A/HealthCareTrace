use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;
use anchor_lang::solana_program::log::{sol_log_compute_units};

declare_id!("4yMJcfUii9vWPt98wucu3hccSrypw5EJoBAzgZjG8Q5a");
//declare_id!("4yMJcfUii9vWPt98wucu3hccSrypw5EJoBAzgZjG8Q5a");

pub mod user;
use crate::user::__client_accounts_create_user;
use crate::user::CreateUser;

pub mod batch;
use crate::batch::__client_accounts_create_batch;
use crate::batch::CreateBatch;


pub mod position;
use crate::position::CreatePosition;
use crate::position::PositionRole;
use crate::position::__client_accounts_create_position;

pub mod storedbatch;

#[program]
mod health_care_trace {

    use crate::{user::UserAccount, batch::BatchAccount, storedbatch::StoredBatchAccount, position::PositionAccount};

    use super::*;

    pub fn create_user(
        ctx: Context<CreateUser>,
        name: String,
        secret: String
    ) -> ProgramResult { 
        let user: &mut Account<UserAccount> = &mut ctx.accounts.user;
        user.user_wallet_address = ctx.accounts.authority.key();
        user.user_name = name;
        user.secret = secret;
        msg!("user created");
        sol_log_compute_units();
        Ok(())
    }

    pub fn create_position(
        ctx: Context<CreatePosition>,
        name: String,
        description: String,
        role: PositionRole
    ) -> ProgramResult { 
        let position: &mut Account<PositionAccount> = &mut ctx.accounts.position;
        position.creator = ctx.accounts.authority.key();
        position.name = name;
        position.description = description;
        position.role = role;
        position.num_stored_batchs = 0;
        position.store_count = 0;
        msg!("user created");
        sol_log_compute_units();
        Ok(())
    }

    pub fn create_batch(
        ctx: Context<CreateBatch>,
        name: String,
        description: String
    ) -> ProgramResult { 
        let batch: &mut Account<BatchAccount>  = &mut ctx.accounts.batch;
        batch.name = name;
        batch.current_pos = ctx.accounts.current_pos.key();
        batch.creator = ctx.accounts.authority.key();
        batch.description = description;
        batch.component_list = ctx.accounts.component_list.key();

        let stored_batch: &mut Account<StoredBatchAccount> = &mut ctx.accounts.stored_batch;
        stored_batch.batch = batch.key();
        stored_batch.creator = ctx.accounts.authority.key();
        stored_batch.store_pos = ctx.accounts.current_pos.key();
        stored_batch.timestamp = ctx.accounts.clock.unix_timestamp;
        stored_batch.currently_stored = true;
        stored_batch.index = ctx.accounts.current_pos.store_count;

        let position: &mut Account<PositionAccount> = &mut ctx.accounts.current_pos;
        position.store_count += 1;
        position.num_stored_batchs += 1;
        position.stored_batchs.push(stored_batch.key());

        batch.position_history.push(stored_batch.key());
    
        msg!("batch created");
        sol_log_compute_units();
        Ok(())
    }
}

