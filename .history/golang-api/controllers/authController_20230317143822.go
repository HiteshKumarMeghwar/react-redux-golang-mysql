package controllers

import (
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/bcryptPassword"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/database"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/models"
	"github.com/gofiber/fiber/v2"
	"gopkg.in/gomail.v2"
)

func validateEmail(email string) bool {
	Re := regexp.MustCompile(`[a-z0-9._%+\-]+@[a-z0-9._%+\-]+\.[a-z0-9._%+\-]`)
	return Re.MatchString(email)
}

func Login(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var user models.User
	database.DB.Where("email = ?", data["email"]).First(&user)
	if user.Id == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "Email Address doesn't exist, Kindly  create an account ... !",
		})
	}

	match := bcryptPassword.CheckPasswordHash(user.Password, data["password"])
	if !match {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "incorrect password",
		})
	}

	// Creating Token ...............................
	token, err := jwtToken.GenerateJwt(strconv.Itoa(int(user.Id)))
	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return nil
	}
	// Initialization Cookie ........................
	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}
	// Creating Cookie ......................
	c.Cookie(&cookie)
	return c.JSON(fiber.Map{
		"message": "you have successfully login",
		"user":    user,
		"token":   token,
	})
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

	// Create a new message using gomail
	msg := gomail.NewMessage()
	msg.SetHeader("From", "hk119892@gmail.com")
	msg.SetHeader("To", data["email"])
	msg.SetHeader("Subject", "Registration Confirmation Mail!")
	msg.SetBody("text/html", "<h1>Welcome "+data["first_name"]+" "+data["last_name"]+"!</h1><p>Thank you for registering with Web.</p>")

	// Create a new email sending client
	d := gomail.NewDialer("smtp.gmail.com", 587, "hk119892@gmail.com", "Karrish1230")

	// Send the message using the email sending client
	if err := d.DialAndSend(msg); err != nil {
		// Handle error sending email
		return c.Render("register.html", fiber.Map{
			"error": "Error sending email: " + err.Error(),
		})
	}

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

func Logout(c *fiber.Ctx) error {

	// Initialization of Cookie with negative time .................
	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}

	// Removing Cookie .......................
	c.Cookie(&cookie)
	return c.JSON(fiber.Map{
		"message": "Logout Successfully ... !",
	})
}
