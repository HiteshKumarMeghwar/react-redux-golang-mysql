package models

type User struct {
	Id                uint   `json:"id"`
	FirstName         string `json:"first_name"`
	LastName          string `json:"last_name"`
	Email             string `json:"email" gorm:"unique"`
	Password          string `json:"-"`
	Phone             string `json:"phone"`
	RoleId            int    `json:"role_id"`
	IsVerified        bool   `json:"is_verified:"`
	VerificationToken string `json:"verification_token"`
}
