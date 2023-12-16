// Rust smart contract example using ink!
use ink_lang as ink;

#[ink::contract]
mod simple_contract {
    #[ink(storage)]
    pub struct SimpleContract {
        message: ink_storage::collections::String,
    }

    impl SimpleContract {
        #[ink(constructor)]
        pub fn new(initial_message: ink_storage::collections::String) -> Self {
            Self {
                message: initial_message,
            }
        }

        #[ink(message)]
        pub fn update_message(&mut self, new_message: ink_storage::collections::String) {
            self.message = new_message;
        }
    }
}
