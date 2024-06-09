package models

import (
	configs "fincaBackend/config"
	"fincaBackend/database"

	"github.com/jinzhu/gorm"
)

var db *gorm.DB

// User represents the user entity with its attributes
type AuthLogin struct {
	UserId   uint
	Email    string
	Password string
}
type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// LoginResponse represents the JSON response body
type LoginResponse struct {
	Token string `json:"token"`
	User  *User  `json:"user"`
}

func init() {
	configs.InitEnvConfigs()
	database.Connect()
	db = database.GetDB()
	// db.AutoMigrate(&User{})
}

// GetAllUsers retrieves all users from the database
func GetUserByEmail(email string) (*AuthLogin, *gorm.DB) {
	var getUser AuthLogin
	db := db.Where("email=?", email).Find(&getUser)
	return &getUser, db
}
