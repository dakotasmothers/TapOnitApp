DROP DATABASE IF EXISTS `ecomm`;
CREATE DATABASE `ecomm`;
USE `ecomm`;

SET NAMES utf8;
SET character_set_client = utf8mb4;

CREATE TABLE `products` (
	`ProductId` INT,
    `ProductTitle` VARCHAR(25),
    `ProductDescription` VARCHAR(100),
    `ImageURL` VARCHAR(500),
    `Price` FLOAT,
    `Likes` INT,
    PRIMARY KEY (`ProductId`)
);

INSERT INTO `products` VALUES (1, 'T-Shirt', 'Dallas Cowboys NFL Navy X-Ray Men', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBL4FjWdQdA_1uCvaX_FB9wngNv6__xcCgWGWj-gk9ImP4cbLib3z3hc2WNcuHQf4L7tCqSJI&usqp=CAc', 37.99, 0);
INSERT INTO `products` VALUES (2, 'Mask', 'Dallas Cowboys Face Covering 3-Pack', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzYj_DXf1BxihmNKLh-uQ0TqxDzccxlWUw6b-ENwjvMJs61UiPOpgK12O1zLnyskQwjlr8fk2e&usqp=CAc', 24.99, 0);
INSERT INTO `products` VALUES (3, 'Jacket', 'Dallas Cowboys Hooded Jacket', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6nq9yZ_CG3FxaUsBcPu08YLD_zPaWPriBbFcWldKnN2qK_-dE13C_CxqHBtlsvSrtRYCvnTvl&usqp=CAc', 23.99, 0);
INSERT INTO `products` VALUES (4, 'Jersey', 'Dallas Cowboys CeeDee Lamb Jersey', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpQcywDn5G4yQkcp7nN3jLPhFDXhP-oocYy4Z7eE4sHsrpUdWOHdjUWrqRcfvjagPct6MeThav&usqp=CAc', 79.99, 0);
INSERT INTO `products` VALUES (5, 'Jersey', 'Dallas Cowboys Ezekiel Ellioy Jersey', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj1jIYmoYMBclKiJwmrlrTAXuXDc2MKm6-PayNoUQnkj1HUQFZC5hXEbEgSw&usqp=CAc', 99.99, 0);
INSERT INTO `products` VALUES (6, 'Hoodie', 'Dallas Cowboys Hoodie', 'https://cdn.shopify.com/s/files/1/1227/9454/products/Cowboys_lightweight_hoody_787387_HDLSAJ18004_large.jpg?v=1571574579', 49.99, 0);
INSERT INTO `products` VALUES (7, 'T-Shirt', 'Dallas Cowboys Dri-FIT Women', 'https://s7d2.scene7.com/is/image/DCMEcommerce/190220069_primary_navy-white?wid=2000&hei=2000&$productmain$&defaultImage=noimagemedium&resMode=sharp2&op_sharpen=1', 19.99, 0);
INSERT INTO `products` VALUES (8, 'Helmet', 'Dallas Cowboys Full Size Replica Helmet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBvzwowhxWMAlm3oN982AG3W5MZfVhZcTglrwDm-tkLOOBYM0niA6_kjzrdNU&usqp=CAc', 149.99, 0);
INSERT INTO `products` VALUES (9, 'Jersey', 'Dallas Cowboys Dak Prescott Jersey', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUY8L5dpo80A0OdrR0u4BgnHONlr8cBOSYRQ&usqp=CAU', 99.99, 0);
INSERT INTO `products` VALUES (10, 'Shoes', 'Dallas Cowboys Low Top Shoes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz9aPrZ7961afq3vP5dKGNI5yUxADpNvgPB04Hdxd0tW4Q_GqHNplxOJGe6Wk&usqp=CAc', 39.99, 0);