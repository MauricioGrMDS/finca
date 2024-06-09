package database

import (
	configs "fincaBackend/config"
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type DBConfig struct {
	DatabaseUser     string
	DatabasePassword string
	DatabaseName     string
	DatabaseUrl      string
	DatabasePort     string
}

// Initialize environment configurations
// configs.InitEnvConfigs()

// Set up database configuration using environment variables
// databaseConfig := database.DBConfig{
// 	DatabaseUser:     configs.EnvConfigs.DatabaseUser,
// 	DatabasePassword: configs.EnvConfigs.DatabasePassword,
// 	DatabaseName:     configs.EnvConfigs.DatabaseName,
// 	DatabaseUrl:      configs.EnvConfigs.DatabaseUrl,
// 	DatabasePort:     configs.EnvConfigs.DatabasePort,
// }

var (
	db *gorm.DB
)

// ConnectMySQL- Connect to MySQL database
func Connect() {
	databaseURI := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local",
		configs.EnvConfigs.DatabaseUser,
		configs.EnvConfigs.DatabasePassword,
		configs.EnvConfigs.DatabaseUrl,
		configs.EnvConfigs.DatabasePort,
		configs.EnvConfigs.DatabaseName)
	d, err := gorm.Open("mysql", databaseURI)

	if err != nil {
		panic(err)
	}
	db = d
	fmt.Println("Successfully connected to database:", configs.EnvConfigs.DatabaseName)
}

// CloseDB - closes the database connection.
func CloseDB(db *gorm.DB) {
	if db != nil {
		db.Close()
		fmt.Printf("Database connection closed.")
	}
}

func GetDB() *gorm.DB {
	return db
}
