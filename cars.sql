-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 04, 2016 at 05:01 AM
-- Server version: 5.6.25
-- PHP Version: 5.5.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cars`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(20) unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  `color` varchar(15) DEFAULT NULL,
  `weight` varchar(20) NOT NULL,
  `sub_weight` varchar(20) DEFAULT NULL,
  `date_time` bigint(15) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `name`, `color`, `weight`, `sub_weight`, `date_time`) VALUES
(49, 'car a', 'blue', '01', '1', 1462337255243),
(50, 'car b', 'blue', '02', '2', 1462337260955),
(52, 'car d', 'blue', '04', '4', 1462337281483),
(57, 'car i', 'blue', '09', '9', 1462337322321),
(58, 'car j', 'blue', '10', '10', 1462337334976),
(59, 'car k', 'blue', '11', '10', 1462337410870),
(60, 'car l', 'blue', '12', '12', 1462337677501),
(61, 'car m', 'blue', '13', '13', 1462337761682),
(62, 'car n', 'red', '14', '14', 1462338048186);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ID` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
