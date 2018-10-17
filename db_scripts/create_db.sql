CREATE DATABASE janasenasevadal_db;
CREATE USER jspuser IDENTIFIED BY 'jspSdal_DB@143';
GRANT SELECT ON *.* TO 'jspuser'@'localhost';
FLUSH PRIVILEGES; 


CREATE USER 'jspuser'@'%' IDENTIFIED WITH mysql_native_password BY 'jspSdal_DB@143';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'jspSdal_DB@143';