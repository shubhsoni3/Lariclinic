-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 26, 2025 at 12:54 PM
-- Server version: 10.5.25-MariaDB-cll-lve
-- PHP Version: 8.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dilkeris_lari_clinic`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `contact_Id` int(11) NOT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `contact_mobile` varchar(15) DEFAULT NULL,
  `contact_addresh` varchar(255) DEFAULT NULL,
  `contact_message` varchar(1000) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`contact_Id`, `contact_email`, `contact_name`, `contact_mobile`, `contact_addresh`, `contact_message`, `created_at`) VALUES
(1, 'shubhsoni1996th@gmail.com', 'Shubham', '+917869058569', '128, near bheiro mandir gwarighat jabalpur', 'eeddq', '2024-05-07 13:29:06.518326'),
(2, 'shubhsoni1996th@gmail.com', 'Shubham', '+917869058569', '128, near bheiro mandir gwarighat jabalpur', 'dadasds', '2024-05-07 14:11:37.912519'),
(3, 'shubhsoni1996th@gmail.com', 'Shubham', '+917869058569', '128, near bheiro mandir gwarighat jabalpur', 'hello', '2024-05-08 05:25:04.895136'),
(4, 'shubhsoni1996th@gmail.com', 'Shubham', '+917869058569', '128, near bheiro mandir gwarighat jabalpur', 'hello ', '2024-05-08 10:44:09.509028'),
(5, 'shubhsoni1996th@gmail.com', 'Shubham', '+917869058569', '128, near bheiro mandir gwarighat jabalpur', 'hrerferf', '2024-05-10 11:17:18.546662'),
(6, 'shubhsoni1996th@gmail.com', 'Shubham', '+917869058569', '128, near bheiro mandir gwarighat jabalpur', 'testing', '2024-05-17 13:34:40.655670');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`contact_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `contact_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
