package controllers

import (
	"regexp"
	"strings"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/bcryptPassword"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/database"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/models"
	"github.com/gofiber/fiber/v2"
)

func validateEmail(email string) bool {
	Re := regexp.MustCompile(`[a-z0-9._%+\-]+@[a-z0-9._%+\-]+\.[a-z0-9._%+\-]`)
	return Re.MatchString(email)
}

func Login(c *fiber.Ctx) error {
	return c.SendString("login")
}

func Register(c *fiber.Ctx) error {
	var data map[string]string
	var userData models.User
	if err := c.BodyParser(&data); err != nil {
		return err
	}

	// Check if password is less than 6 characters .......
	if len(data["password"]) <= 6 {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Password must be greater than 6 characters",
		})
	}

	// Validating Email Address .......
	if !validateEmail(strings.TrimSpace(data["email"])) {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Invalid Email Address",
		})
	}

	// Check if email already exist in database ........
	database.DB.Where("email = ?", strings.TrimSpace(data["email"])).First(&userData)
	if userData.Id != 0 {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Email already exist",
		})
	}

	pass, _ := bcryptPassword.HashPassword(data["password"])
	user := models.User{
		FirstName: data["first_name"],
		LastName:  data["last_name"],
		Email:     strings.TrimSpace(data["email"]),
		Password:  pass,
		Phone:     data["phone"],
		RoleId:    3,
	}
	database.DB.Create(&user)
	c.Status(200)
	return c.JSON(fiber.Map{
		"message": "Account has been created successfully ...!",
		"user":    user,
	})

}