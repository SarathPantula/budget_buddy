-- Switch to the new database
\c budget_buddy;

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users Table
CREATE TABLE users (
    user_id UUID PRIMARY KEY CONSTRAINT pk_users_user_id DEFAULT uuid_generate_v4(),
    name varchar(255) NOT NULL CONSTRAINT uk_users_name UNIQUE,
    email varchar(255) NOT NULL CONSTRAINT uk_users_email UNIQUE,
    login_method varchar(255) NOT NULL,
    phone_number varchar(255),
    photo_url varchar(1024),
    date_joined TIMESTAMP CONSTRAINT df_users_date_joined DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN CONSTRAINT df_users_is_active DEFAULT TRUE
);

-- Currency Codes Table
CREATE TABLE currency_codes (
    id UUID PRIMARY KEY CONSTRAINT pk_currency_codes_id DEFAULT uuid_generate_v4(),
    currency_code varchar(3) UNIQUE CONSTRAINT uk_currency_codes_currency_code NOT NULL,
    name varchar(255) UNIQUE CONSTRAINT uk_currency_codes_name NOT NULL 
);

-- Avatars Type Table
CREATE TABLE avatar_types (
    avatar_type_id UUID PRIMARY KEY CONSTRAINT pk_avatar_types_avatar_type_id DEFAULT uuid_generate_v4(),
    name varchar(255) UNIQUE CONSTRAINT uk_avatar_types_name NOT NULL 
);

-- Avatars Table
CREATE TABLE avatars (
    avatar_id UUID PRIMARY KEY CONSTRAINT pk_avatars_avatar_id DEFAULT uuid_generate_v4(),
    avatar_type_id UUID CONSTRAINT fk_avatar_types_avatars_avatar_type_id REFERENCES avatar_types(avatar_type_id),
    name varchar(255) CONSTRAINT uk_avatars_name UNIQUE NOT NULL,
    image_url varchar(1024) NOT NULL
);

-- Accounts Table
CREATE TABLE accounts (
    account_id UUID PRIMARY KEY CONSTRAINT pk_accounts_account_id DEFAULT uuid_generate_v4(),
    user_id UUID CONSTRAINT fk_users_accounts_user_id REFERENCES users(user_id),
    name varchar(255) CONSTRAINT uk_accounts_name UNIQUE NOT NULL,
    initial_balance DECIMAL(15,2) CONSTRAINT df_accounts_initial_balance DEFAULT 0,
    currency_code_id UUID CONSTRAINT fk_currency_codes_accounts_currency_code_id REFERENCES currency_codes(id) NOT NULL,
    avatar_id UUID CONSTRAINT fk_avatars_accounts_avatar_id REFERENCES avatars(avatar_id),
    is_active BOOLEAN CONSTRAINT df_accounts_is_active DEFAULT TRUE,
    date_created TIMESTAMP CONSTRAINT df_accounts_date_created DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP CONSTRAINT df_accounts_last_updated DEFAULT CURRENT_TIMESTAMP,
    deactivated_date TIMESTAMP
);

--Categories Type Table

CREATE TABLE category_types (
    category_type_id UUID CONSTRAINT pk_category_types_category_type_id PRIMARY KEY DEFAULT uuid_generate_v4(),
    name varchar(255) CONSTRAINT uk_category_types_name UNIQUE NOT NULL
);
INSERT INTO category_types (name) VALUES ('Income');
INSERT INTO category_types (name) VALUES ('Expense');
INSERT INTO category_types (name) VALUES ('Transfer');

-- Categories Table
CREATE TABLE categories (
    category_id UUID PRIMARY KEY CONSTRAINT pk_categories_category_id DEFAULT uuid_generate_v4(),
    user_id UUID CONSTRAINT fk_categories_users_user_id REFERENCES users(user_id),
    name varchar(255) CONSTRAINT uk_categories_name UNIQUE NOT NULL,
    category_type_id UUID CONSTRAINT fk_category_types_categories_category_type_id REFERENCES category_types(category_type_id) NOT NULL,
    avatar_id UUID CONSTRAINT fk_avatars_categories_avatar_id REFERENCES avatars(avatar_id),
    is_active BOOLEAN CONSTRAINT df_categories_is_active DEFAULT TRUE,
    date_created TIMESTAMP CONSTRAINT df_categories_date_created DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP CONSTRAINT df_categories_last_updated DEFAULT CURRENT_TIMESTAMP,
    deactivated_date TIMESTAMP
);

-- Transaction Types Table
CREATE TABLE transaction_types (
    transaction_type_id UUID PRIMARY KEY CONSTRAINT pk_transaction_types_transaction_type_id DEFAULT uuid_generate_v4(),
    name varchar(255) CONSTRAINT uk_transaction_types_name UNIQUE NOT NULL
);

INSERT INTO transaction_types (name) VALUES ('Income');
INSERT INTO transaction_types (name) VALUES ('Expense');
INSERT INTO transaction_types (name) VALUES ('Transfer');

-- Transactions Table
CREATE TABLE transactions (
    transaction_id UUID PRIMARY KEY CONSTRAINT pk_transactions_transaction_id DEFAULT uuid_generate_v4(),
    account_id UUID CONSTRAINT fk_accounts_transactions_account_id NOT NULL REFERENCES accounts(account_id),
    category_id UUID CONSTRAINT fk_categories_transactions_category_id REFERENCES categories(category_id),
    transaction_type_id UUID CONSTRAINT fk_transaction_types_transactions_transaction_type_id NOT NULL REFERENCES transaction_types(transaction_type_id),
    amount DECIMAL(15,2) NOT NULL,
    date TIMESTAMP CONSTRAINT df_transactions_date DEFAULT CURRENT_TIMESTAMP,
    note varchar(1024),
    is_recurring BOOLEAN CONSTRAINT df_transactions_is_recurring DEFAULT FALSE,
    destination_account_id UUID CONSTRAINT fk_accounts_transactions_destination_account_id REFERENCES accounts(account_id)
);
