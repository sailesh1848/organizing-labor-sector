CREATE TABLE `users_details` (
  `U_ID` int UNIQUE PRIMARY KEY NOT NULL,
  `password` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255),
  `Age` int
);

CREATE TABLE `users_cred` (
  `user_id` int NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `Business_category` (
  `C_ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Business_category` varchar(255) NOT NULL
);

CREATE TABLE `skill_list` (
  `S_ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `skill` varchar(255) NOT NULL
);

CREATE TABLE `labor_details` (
  `L_ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255),
  `dob` date,
  `skill_id` int,
  `adhaar` int,
  `permanent_address` varchar(255),
  `employment_adress` varchar(255),
  `employed` bool,
  `active_status` bool,
  `photo` blob
);

CREATE TABLE `business_details` (
  `B_ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `company_Name` varchar(255) NOT NULL,
  `md_lastName` varchar(255),
  `md_FirstName` varchar(255),
  `doi` date,
  `category_id` int,
  `company_pan` int,
  `location` varchar(255),
  `company_adress` varchar(255),
  `active_status` bool
);

CREATE TABLE `approver_details` (
  `A_ID` int UNIQUE PRIMARY KEY NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255),
  `office_location` varchar(255),
  `office_address` varchar(255),
  `status` bool
);

CREATE TABLE `contract_details` (
  `con_ID` int UNIQUE PRIMARY KEY NOT NULL,
  `L_ID` int,
  `B_ID` int,
  `emp_start` date,
  `emp_end` date,
  `wage` int,
  `insurance_cover` bool
);

ALTER TABLE `users_cred` ADD FOREIGN KEY (`user_id`) REFERENCES `users_details` (`U_ID`);

ALTER TABLE `labor_details` ADD FOREIGN KEY (`skill_id`) REFERENCES `skill_list` (`S_ID`);

ALTER TABLE `business_details` ADD FOREIGN KEY (`category_id`) REFERENCES `Business_category` (`C_ID`);

ALTER TABLE `contract_details` ADD FOREIGN KEY (`L_ID`) REFERENCES `labor_details` (`L_ID`);

ALTER TABLE `contract_details` ADD FOREIGN KEY (`B_ID`) REFERENCES `business_details` (`B_ID`);
