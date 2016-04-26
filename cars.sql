-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 26, 2016 at 12:38 PM
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
  `date_time` bigint(15) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `name`, `color`, `weight`, `date_time`) VALUES
(1, 'Car A', 'blue', '01', 1461669767386),
(2, 'Car B', 'blue', '01', 1461674245785),
(3, 'Car C', 'red', '03', 1461669938044),
(4, 'Car D', 'green', '01', 1461674175412),
(5, 'Car E', 'red', '05', 1461670029097),
(6, 'Car F', 'blue', '06', 1461670044562),
(7, 'Car G', 'red', '01', 1461674012543),
(8, 'Car H', 'blue', '01', 1461674263535),
(9, 'Car I', 'red', '01', 1461670168972),
(10, 'Car J', 'blue', '01', 1461670148637);

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
  MODIFY `id` int(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
