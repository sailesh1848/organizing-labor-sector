CREATE TABLE `users_details` (
  `email` email UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255),
  `Age` int,
  `phone_number` int NOT NULL
);

CREATE TABLE `users_cred` (
  `user_id` int NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `Business_category` (
  `category_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Business_category` varchar(255) NOT NULL
);

CREATE TABLE `skill_list` (
  `skill_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `skill` varchar(255) NOT NULL
);

CREATE TABLE `labour_details` (
  `labourer_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(255),
  `LastName` varchar(255) NOT NULL,
  `date_of_birth` date,
  `permanent_address` varchar(255) NOT NULL,
  `permanent_address_city` varchar(255) NOT NULL,
  `permanent_address_state` varchar(255) NOT NULL,
  `permanent_address_pinCode` int NOT NULL,
  `adhaar_no` int NOT NULL,
  `pan_no` int,
  `skill_1` int NOT NULL,
  `skill_2` int,
  `skill_3` int,
  `active_status` bool,
  `currently_employed` bool,
  `creation_date` timestamp,
  `last_modified_date` timestamp
);

CREATE TABLE `employer_details` (
  `employer_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `employer_Name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `pin_code` int NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `type_of_business` int,
  `tan_no` int NOT NULL,
  `registration_no` int NOT NULL,
  `status` bool,
  `creation_date` timestamp,
  `last_modified_date` timestamp
);

CREATE TABLE `govt_user_details` (
  `govt_user_id` int UNIQUE PRIMARY KEY NOT NULL,
  `FirstName` varchar(255),
  `LastName` varchar(255) NOT NULL,
  `office_name` varchar(255) NOT NULL,
  `office_address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `pincode` int NOT NULL,
  `phone_no` int NOT NULL,
  `status` bool,
  `creation_date` timestamp,
  `last_modified_date` timestamp
);

CREATE TABLE `contract_details` (
  `contract_id` int UNIQUE PRIMARY KEY NOT NULL,
  `employment_start_date` date NOT NULL,
  `employment_end_date` date NOT NULL,
  `employment_city` varchar(255) NOT NULL,
  `employment_state` varchar(255) NOT NULL,
  `total_no_of_labourer_needed` int NOT NULL,
  `skill_1` int,
  `no_of_labourer_skill_1` int,
  `min_daily_wages_skill_set_1` int,
  `daily_wages_skill_set_1` int,
  `skill_2` int,
  `no_of_labourer_skill_2` int,
  `min_daily_wages_skill_set_2` int,
  `daily_wages_skill_set_2` int,
  `skill_3` int,
  `no_of_labourer_skill_3` int,
  `min_daily_wages_skill_set_3` int,
  `daily_wages_skill_set_3` int NOT NULL,
  `medical_insurance_cover` bool,
  `creation_date` timestamp,
  `last_modified_date` timestamp,
  `status` bool
);

ALTER TABLE `users_cred` ADD FOREIGN KEY (`user_id`) REFERENCES `users_details` (`email`);

ALTER TABLE `labour_details` ADD FOREIGN KEY (`skill_1`) REFERENCES `skill_list` (`skill_id`);

ALTER TABLE `labour_details` ADD FOREIGN KEY (`skill_2`) REFERENCES `skill_list` (`skill_id`);

ALTER TABLE `labour_details` ADD FOREIGN KEY (`skill_3`) REFERENCES `skill_list` (`skill_id`);

ALTER TABLE `employer_details` ADD FOREIGN KEY (`type_of_business`) REFERENCES `Business_category` (`category_id`);

ALTER TABLE `contract_details` ADD FOREIGN KEY (`skill_1`) REFERENCES `skill_list` (`skill_id`);

ALTER TABLE `contract_details` ADD FOREIGN KEY (`skill_2`) REFERENCES `skill_list` (`skill_id`);

ALTER TABLE `contract_details` ADD FOREIGN KEY (`skill_3`) REFERENCES `skill_list` (`skill_id`);
