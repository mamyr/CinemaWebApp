CREATE DATABASE  IF NOT EXISTS `cinema` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cinema`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: cinema
-- ------------------------------------------------------
-- Server version	5.6.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_bookinfo`
--

DROP TABLE IF EXISTS `t_bookinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_bookinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_seat` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_bookinfo`
--

LOCK TABLES `t_bookinfo` WRITE;
/*!40000 ALTER TABLE `t_bookinfo` DISABLE KEYS */;
INSERT INTO `t_bookinfo` VALUES (1,22,'2015-02-12 06:00:00'),(2,23,'2015-02-12 06:00:00'),(3,18,'2015-02-12 06:00:00'),(4,20,'2015-02-12 06:00:00'),(5,19,'2015-02-12 06:00:00'),(6,3,'2015-02-12 06:00:00'),(7,6,'2015-02-12 06:00:00'),(8,2,'2015-02-12 06:00:00'),(9,7,'2015-02-12 06:00:00'),(10,5,'2015-02-12 06:00:00'),(11,9,'2015-02-12 06:00:00'),(12,4,'2015-02-12 06:00:00'),(13,10,'2015-02-12 06:00:00'),(14,8,'2015-02-12 06:00:00'),(15,13,'2015-02-12 06:00:00'),(16,14,'2015-02-12 06:00:00'),(17,1,'2015-02-12 06:00:00'),(18,11,'2015-02-12 06:00:00'),(19,1,'2015-12-02 06:00:00'),(20,2,'2015-12-02 06:00:00'),(21,3,'2015-12-02 06:00:00'),(22,4,'2015-12-02 06:00:00'),(23,5,'2015-12-02 06:00:00'),(24,6,'2015-12-02 06:00:00'),(25,7,'2015-12-02 06:00:00'),(26,8,'2015-12-02 06:00:00'),(27,9,'2015-12-02 06:00:00'),(28,10,'2015-12-02 06:00:00'),(29,11,'2015-12-02 06:00:00'),(30,12,'2015-12-02 06:00:00'),(31,13,'2015-12-02 06:00:00'),(32,14,'2015-12-02 06:00:00'),(33,15,'2015-12-02 06:00:00'),(34,16,'2015-12-02 06:00:00'),(35,17,'2015-12-02 06:00:00'),(36,18,'2015-12-02 06:00:00'),(37,19,'2015-12-02 06:00:00'),(38,20,'2015-12-02 06:00:00'),(39,22,'2015-12-02 06:00:00'),(40,21,'2015-12-02 06:00:00');
/*!40000 ALTER TABLE `t_bookinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_map`
--

DROP TABLE IF EXISTS `t_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `width` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_map`
--

LOCK TABLES `t_map` WRITE;
/*!40000 ALTER TABLE `t_map` DISABLE KEYS */;
INSERT INTO `t_map` VALUES (1,'red',6,5),(2,'blue',2,3),(6,'green',1,1),(52,'w',3,1);
/*!40000 ALTER TABLE `t_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_seatmap`
--

DROP TABLE IF EXISTS `t_seatmap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_seatmap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_map` int(11) NOT NULL,
  `width_no` int(11) DEFAULT NULL,
  `length_no` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_seatmap`
--

LOCK TABLES `t_seatmap` WRITE;
/*!40000 ALTER TABLE `t_seatmap` DISABLE KEYS */;
INSERT INTO `t_seatmap` VALUES (1,1,1,1,1500),(2,1,2,1,1500),(3,1,3,1,1500),(4,1,4,1,1500),(5,1,5,1,1500),(6,1,6,1,1500),(7,1,1,2,1200),(8,1,2,2,1200),(9,1,3,2,1200),(10,1,4,2,1200),(11,1,5,2,1200),(12,1,6,2,1200),(13,1,1,3,1000),(14,1,2,3,1000),(15,1,3,3,1000),(16,1,4,3,1000),(17,1,5,3,1000),(18,1,6,3,1000),(19,1,1,4,700),(20,1,2,4,700),(21,1,3,4,700),(22,1,4,4,700),(23,1,5,4,700),(24,1,6,4,700),(25,1,1,5,700),(26,1,2,5,700),(27,1,3,5,700),(28,1,4,5,700),(29,1,5,5,700),(30,1,6,5,700),(31,2,1,1,1700),(32,2,2,1,1700),(33,2,1,2,1200),(34,2,2,2,1200),(35,2,1,3,800),(36,2,2,3,800);
/*!40000 ALTER TABLE `t_seatmap` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-12-28  6:03:06
