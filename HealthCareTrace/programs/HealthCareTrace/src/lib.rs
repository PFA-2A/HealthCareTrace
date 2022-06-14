use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;
use anchor_lang::solana_program::log::{sol_log_compute_units};

declare_id!("4yMJcfUii9vWPt98wucu3hccSrypw5EJoBAzgZjG8Q5a");
//declare_id!("DSb71pb4Tfs9F5bkzX69JQFrZoXnUeqBkufndfGk62JX"); // somaya

pub mod user;
pub mod batch;
pub mod position;
pub mod storedbatch;


use crate::user::{
    __client_accounts_create_user,
    CreateUser,
    UserAccount
};

use crate::batch::{
    __client_accounts_create_batch,
    CreateBatch,
    BatchAccount
};

use crate::position::{
    __client_accounts_create_position,
    CreatePosition,
    PositionAccount
};

use crate::storedbatch::{
    __client_accounts_transfert_batch,
    TransfertBatch,
    StoredBatchAccount
};

#[program]
mod health_care_trace {

    use crate::batch::ComponentsAccount;

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
    ) -> ProgramResult { 
        let position: &mut Account<PositionAccount> = &mut ctx.accounts.position;
        position.creator = ctx.accounts.authority.key();
        position.name = name;
        position.description = description;
        position.num_stored_batchs = 0;
        msg!("user created");
        sol_log_compute_units();
        Ok(())
    }

    pub fn create_batch(
        ctx: Context<CreateBatch>,
        name: String,
        description: String,
        list_components: Vec<Pubkey>
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
        stored_batch.index = ctx.accounts.current_pos.num_stored_batchs;

        let position: &mut Account<PositionAccount> = &mut ctx.accounts.current_pos;
        position.num_stored_batchs += 1;
        position.stored_batchs.push(stored_batch.key());

        batch.position_history.push(stored_batch.key());
        
        let list: &mut Account<ComponentsAccount> = &mut ctx.accounts.component_list;
        list.items = list_components;
    
        msg!("batch created");
        sol_log_compute_units();
        Ok(())
    }


    pub fn transfert_batch(
        ctx: Context<TransfertBatch>
    ) -> ProgramResult { 
        let batch: &mut Account<BatchAccount>  = &mut ctx.accounts.batch;
        batch.current_pos = ctx.accounts.new_position.key();

        let stored_batch: &mut Account<StoredBatchAccount> = &mut ctx.accounts.stored_batch;
        stored_batch.batch = batch.key();
        stored_batch.creator = ctx.accounts.authority.key();
        stored_batch.store_pos = ctx.accounts.new_position.key();
        stored_batch.timestamp = ctx.accounts.clock.unix_timestamp;
        stored_batch.currently_stored = true;
        stored_batch.index = ctx.accounts.new_position.num_stored_batchs;

        let old_position: &mut Account<PositionAccount> = &mut ctx.accounts.old_position;
        old_position.num_stored_batchs -= 1;
        old_position.stored_batchs.remove(stored_batch.index as usize);

        let new_position: &mut Account<PositionAccount> = &mut ctx.accounts.new_position;
        new_position.num_stored_batchs += 1;
        new_position.stored_batchs.push(stored_batch.key());

        stored_batch.index = new_position.num_stored_batchs;

        batch.position_history.push(stored_batch.key());

    
        msg!("batch created");
        sol_log_compute_units();
        Ok(())
    }
}

