package database

import (
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {

	dsn := "root@tcp(localhost:3306)/go_with_react_redux"
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	} else {
		log.Println("Database Successfully Connected....!")
	}

	DB = connection

	/* connection.AutoMigrate(
		&models.User{},
		&models.Blog{},
		&models.Mail{},
		&models.Commodity{},
	) */
}
