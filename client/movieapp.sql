-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: movieapp
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(45) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'velmurugan','vel@gmail.com','12345','madurai','7904435022');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `currentdate` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `bookingdate` varchar(45) NOT NULL,
  `moviename` varchar(77) NOT NULL,
  `moviewatchers` varchar(75) NOT NULL,
  `totalceats` varchar(45) NOT NULL,
  `ceatnames` varchar(75) NOT NULL,
  `totalcost` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'15-04-2022','Arunprasad','arun@gmail.com','9976885147','2022-04-17','Master','vel','1','F6','1000'),(2,'15-04-2022','Arunprasad','arun@gmail.com','9976885147','2022-04-22','Master','aaa','2','D4,D5','2000'),(3,'15-04-2022','Arunprasad','arun@gmail.com','9976885147','2022-04-20','Master','vel,prithivi,praveen','3','A1,A2,A3','3000'),(8,'16-04-2022','Harshith','harshith@gmail.com','6679086590','2022-04-17','Master','ajith,arun','2','A1,B2','2000');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movieceats`
--

DROP TABLE IF EXISTS `movieceats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movieceats` (
  `idmovieceats` int NOT NULL AUTO_INCREMENT,
  `bookingdate` varchar(45) NOT NULL,
  `moviename` varchar(75) NOT NULL,
  `ceatnames` varchar(45) NOT NULL,
  PRIMARY KEY (`idmovieceats`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movieceats`
--

LOCK TABLES `movieceats` WRITE;
/*!40000 ALTER TABLE `movieceats` DISABLE KEYS */;
INSERT INTO `movieceats` VALUES (6,'2022-04-17','Master','A1,B2');
/*!40000 ALTER TABLE `movieceats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movieimageurl` varchar(500) NOT NULL,
  `movievideourl` varchar(500) NOT NULL,
  `moviename` varchar(70) NOT NULL,
  `ticketcost` varchar(45) NOT NULL,
  `moviedescription` varchar(500) NOT NULL,
  `actorname` varchar(45) NOT NULL,
  `directorname` varchar(45) NOT NULL,
  `startdate` varchar(45) NOT NULL,
  `enddate` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7euE2RJXaeMlHQsj2BO0fYH3vcCyfnybFGSFKDsnICEkfr__ykNjMb9FnzU8ZejFK-A&usqp=CAU','https://www.youtube.com/watch?v=0E1kVRRi6lk','https://www.youtube.com/embed/0E1kVRRi6lk','800','Vijay\'s \'best and most notorious\' super spy will save a mall from terrorists with so much style. Watch','Vijay','Nelson','2022-04-16','2022-04-30'),(4,'https://cdn.99images.com/photos/wallpapers/bollywood/master-vijay%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-vicnk.jpg','https://www.youtube.com/embed/1_iUFT3nWHk','Master','1000','Master is a 2021 Indian Tamil-language action film[7] written and directed by Lokesh Kanagaraj. ','Vijay','Lokesh kanagaraj','2022-04-17','2022-04-23');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'velmurugan','mvel1620r@gmail.com','123456','iyer bungalow,madurai','7904435022'),(2,'velmurugan','mvel1620r@gmail.com','123456','iyer bungalow,madurai','7904435022'),(3,'velmurugan','mvel1620r@gmail.com','123456','iyer bungalow,madurai','7904435022'),(4,'velmurugan','startupprojects01@gmail.com','123456','iyer bungalow,dindigul','7904435022'),(5,'nesamani','nesamani@gmail.com','nesa1234','chinnalapatty, dindigul','chinnalapatty, dindigul'),(6,'nesamani','nesamani@gmail.com','nesa1234','chinnalapatty, dindigul','4687239078'),(7,'nesamani','nesamani@gmail.com','nesa1234','chinnalapatty, dindigul','4687239078'),(8,'tirupathi','tirupathi@gmail.com','nesa1234','pannapatty, dindigul','4687239078'),(9,'tirupathi','tirupathi@gmail.com','nesa1234','pannapatty, dindigul','4687239078'),(10,'nesamani','nesamani@gmail.com','nesa1234','chinnalapatty, dindigul','4687239078'),(11,'tirupathi','tirupathi@gmail.com','nesa1234','pannapatty, dindigul','4687239078'),(12,'tirupathi','tirupathi@gmail.com','nesa1234','pannapatty, dindigul','4687239078'),(13,'velu','tirupathi@gmail.com','nesa1234','pannapatty, dindigul','4687239078'),(14,'Arunprasad','arun@gmail.com','arun123','madurai','9976885147'),(15,'velmurugan','startupprojects01@gmail.com','123456','vadipatty','7904435022'),(16,'velmurugan','startupprojects01@gmail.com','123456','vadipatty','7904435022'),(17,'velmurugan','vel@gmail.com','1234','madurai','7904435022'),(18,'velmurugan','vel@gmail.com','1234','madurai','7904435022'),(19,'Harshith','harshith@gmail.com','harshith','Thendral nagar,Paul street,iter bungalow,madurai','6679086590'),(20,'ammu','ammu@gmail.com','ammu','madurai','6789453670'),(21,'Jeevanantham','jeeva@gmail.com','jeeva','Chinnamanur, Theni','8879652390');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16 18:12:35
