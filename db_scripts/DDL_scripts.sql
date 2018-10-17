#CUSTOMER_PROFILE

#Address

DROP TABLE PROFILE;

CREATE TABLE IF NOT EXISTS PROFILE (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
	surname VARCHAR(255),
	jspMembershipID VARCHAR(255),
	mobile VARCHAR(13),
	whasappNo VARCHAR(13),
	email VARCHAR(255),
	constituency VARCHAR(100),
    district VARCHAR(100),
	stateID VARCHAR(100),
    status INT NOT NULL,
	volunteerType VARCHAR(100),
    description TEXT,
	photo LONGBLOB,
	noOfHours int not null,
	remarks VARCHAR(1000),
    PRIMARY KEY (id)
)  ENGINE=INNODB;

drop table constituency;

CREATE TABLE IF NOT EXISTS constituency (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL 
)  ENGINE=INNODB;


drop table district;

CREATE TABLE IF NOT EXISTS district (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL 
)  ENGINE=INNODB;

drop table country_state;

CREATE TABLE IF NOT EXISTS country_state (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL 
)  ENGINE=INNODB;


drop table volunteer_type;

CREATE TABLE IF NOT EXISTS volunteer_type (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL 
)  ENGINE=INNODB;

 