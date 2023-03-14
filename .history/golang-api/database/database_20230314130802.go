package database

import (
	"fmt"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type PostgresConfig struct {
	Host     string
	Port     string
	User     string
	Password string
	Database string
	SSLMode  string
}

func (cfg PostgresConfig) String() string {
	return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s", cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Database, cfg.SSLMode)
}

var DB *gorm.DB

func Connect() {

	/* cfg := PostgresConfig{
		Host:     os.Getenv("HOST"),
		Port:     os.Getenv("PORT"),
		User:     os.Getenv("USER"),
		Password: os.Getenv("PASSWORD"),
		Database: os.Getenv("DATABASE"),
		SSLMode:  os.Getenv("SSMODE"),
	} */
	cfg := PostgresConfig{
		Host:     "localhost",
		Port:     "5432",
		User:     "postgres",
		Password: "Hitesh@1230",
		Database: "go_final_project",
		SSLMode:  "disable",
	}

	connection, err := gorm.Open(mysql.Open(cfg.String()), &gorm.Config{})
	if err != nil {
		panic(err)
	} else {
		log.Println("Database Successfully Connected....!")
	}

	DB = connection
}
