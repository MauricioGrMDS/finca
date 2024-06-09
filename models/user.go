package models

import (
	configs "fincaBackend/config"
	"fincaBackend/database"
	"time"

	"github.com/jinzhu/gorm"
)

// User represents the user entity with its attributes
type User struct {
	UserId    uint      `gorm:"primary_key;auto_increment" json:"id"`
	FirstName string    `json:"first_name"`
	LastName  string    `json:"last_name"`
	Role      int       `json:"role"`
	Email     string    `json:"email"`
	Phone     int       `json:"phone"`
	CreatedAt time.Time `json:"created_at,omitempty"`
}

func init() {
	configs.InitEnvConfigs()
	database.Connect()
	db = database.GetDB()
	// db.AutoMigrate(&User{})
}

// GetAllUsers retrieves all users from the database
func GetAllUsers() []User {
	var User []User
	db.Find(&User)
	return User
}

// GetAllUsers retrieves all users from the database
func GetUserById(id uint) (*User, *gorm.DB) {
	var getUser User
	db := db.Where("user_id=?", id).Find(&getUser)
	return &getUser, db
}

func (u *User) CreateUser() (*User, error) {
	if err := db.Create(u).Error; err != nil {
		return nil, err
	}
	return u, nil
}
