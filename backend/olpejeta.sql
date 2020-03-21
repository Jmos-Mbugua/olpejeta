-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 05, 2020 at 10:58 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `olpejeta`
--

-- --------------------------------------------------------

--
-- Table structure for table `Bird_list`
--

CREATE TABLE `Bird_list` (
  `id` int(11) NOT NULL,
  `common_name` varchar(255) NOT NULL,
  `scientific_name` varchar(255) NOT NULL,
  `bird_age` int(3) NOT NULL,
  `general_status` varchar(255) NOT NULL,
  `conservation_status` varchar(255) NOT NULL,
  `species` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `bird_image_url` longtext NOT NULL,
  `bird_description` longtext NOT NULL,
  `bird_sound_url` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Bird_list`
--

INSERT INTO `Bird_list` (`id`, `common_name`, `scientific_name`, `bird_age`, `general_status`, `conservation_status`, `species`, `category`, `bird_image_url`, `bird_description`, `bird_sound_url`) VALUES
(1, 'Black-winged (-shouldered) Kite', 'Elanus caeruleus', 21, 'resident', 'Vulnerable', 1, 1, 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg', 'They have long pink legs, a long thin black bill and are blackish above and white below, with a white head and neck with a varying amount of black. Males have a black back, often with greenish gloss. Females\' backs have a brown hue, contrasting with the black remiges.', 'https://scance.000webhostapp.com/olpejata_sounds/Bird-Song-Hero_10.mp3'),
(2, 'Scissor-tailed Kite', 'Chelictinia riocourii', 21, 'resident', 'Vulnerable', 2, 2, 'https://cdn.pixabay.com/photo/2014/07/08/13/25/forficatu-387081_1280.jpg', 'The scissor-tailed kite is a small, slim grey and white kite with a relatively weak bill, a broad head, long pointed wings and a deeply forked tail.', 'https://scance.000webhostapp.com/olpejata_sounds/Bird-Song-Hero_11.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `bird_sightings`
--

CREATE TABLE `bird_sightings` (
  `id` int(11) NOT NULL,
  `bird_id` int(11) NOT NULL,
  `sightings_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bird_sightings`
--

INSERT INTO `bird_sightings` (`id`, `bird_id`, `sightings_id`) VALUES
(1, 1, 3),
(2, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`id`, `category_name`) VALUES
(1, 'Ground bird'),
(2, 'Ground bird');

-- --------------------------------------------------------

--
-- Table structure for table `Locations`
--

CREATE TABLE `Locations` (
  `id` int(11) NOT NULL,
  `bird_location` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Locations`
--

INSERT INTO `Locations` (`id`, `bird_location`) VALUES
(1, -1.28451),
(2, -2.28457);

-- --------------------------------------------------------

--
-- Table structure for table `Sightings`
--

CREATE TABLE `Sightings` (
  `id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `no_of_birds` int(11) NOT NULL,
  `date_taken` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Sightings`
--

INSERT INTO `Sightings` (`id`, `location_id`, `user_id`, `no_of_birds`, `date_taken`) VALUES
(3, 1, 1, 20, '2020-03-05 12:32:21'),
(4, 1, 2, 30, '2020-03-05 12:32:21');

-- --------------------------------------------------------

--
-- Table structure for table `Species`
--

CREATE TABLE `Species` (
  `id` int(11) NOT NULL,
  `species_name` varchar(255) NOT NULL,
  `scientific_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Species`
--

INSERT INTO `Species` (`id`, `species_name`, `scientific_name`) VALUES
(1, 'EAGLES & VULTURES', 'ACCPITRINFORMES: accipitridae'),
(2, 'EAGLES & VULTURES', 'ACCPITRINFORMES: accipitridae');

-- --------------------------------------------------------

--
-- Table structure for table `users_list`
--

CREATE TABLE `users_list` (
  `id` int(11) NOT NULL,
  `guide_name` varchar(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `contacts` int(12) DEFAULT NULL,
  `user_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_list`
--

INSERT INTO `users_list` (`id`, `guide_name`, `email`, `contacts`, `user_type`) VALUES
(1, 'Andrew', 'andrew@gmail.com', 712579514, 'Tourist'),
(2, 'shon', 'shon@gmail.com', 7468264, 'Guide');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Bird_list`
--
ALTER TABLE `Bird_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `species_fk` (`species`),
  ADD KEY `category_fk` (`category`);

--
-- Indexes for table `bird_sightings`
--
ALTER TABLE `bird_sightings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bird_fk` (`bird_id`),
  ADD KEY `sighting_fk` (`sightings_id`);

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Locations`
--
ALTER TABLE `Locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Sightings`
--
ALTER TABLE `Sightings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `location_fk` (`location_id`),
  ADD KEY `user_fk` (`user_id`);

--
-- Indexes for table `Species`
--
ALTER TABLE `Species`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_list`
--
ALTER TABLE `users_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Bird_list`
--
ALTER TABLE `Bird_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bird_sightings`
--
ALTER TABLE `bird_sightings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Locations`
--
ALTER TABLE `Locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Sightings`
--
ALTER TABLE `Sightings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Species`
--
ALTER TABLE `Species`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users_list`
--
ALTER TABLE `users_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Bird_list`
--
ALTER TABLE `Bird_list`
  ADD CONSTRAINT `category_fk` FOREIGN KEY (`category`) REFERENCES `Category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `species_fk` FOREIGN KEY (`species`) REFERENCES `Species` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bird_sightings`
--
ALTER TABLE `bird_sightings`
  ADD CONSTRAINT `bird_fk` FOREIGN KEY (`bird_id`) REFERENCES `Bird_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sighting_fk` FOREIGN KEY (`sightings_id`) REFERENCES `Sightings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Sightings`
--
ALTER TABLE `Sightings`
  ADD CONSTRAINT `location_fk` FOREIGN KEY (`location_id`) REFERENCES `Locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
