#!/bin/bash

# Define variables
DB_USER=SamLProgrammer
DB_NAME=churchbillboard
SQL_FILE=/home/SamLProgrammer/church-billboard/back/abcd.sql

# Import SQL file into MySQL database
mysql -u "$DB_USER" -p "$DB_NAME" < "$SQL_FILE"