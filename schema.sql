CREATE DATABASE `reference`;

USE `reference`;

CREATE TABLE `contacts` (
  `id`          int(6) unsigned     NOT NULL AUTO_INCREMENT,
  `name`        varchar(60)         NOT NULL,
  `phone`       varchar(20)         NOT NULL,
  `email`       varchar(75)         NOT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `contacts` (`name`, `phone`, `email`) VALUES ('David L. Whitehurst', '919-605-6529', 'dlwhitehurst@gmail.com');
INSERT INTO `contacts` (`name`, `phone`, `email`) VALUES ('Patricia R. Whitehurst', '919-810-6762', 'whitehurst.patricia@gmail.com');

