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

// User represents a user in the system
type User struct {
	FirstName: string
	LastName:  string
	Email:     string
	Password:  string
	Phone:     string
	RoleId:    int
	IsVerified  bool
	VerificationToken string
}

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

	user := models.User{
		FirstName: data["first_name"],
		LastName:  data["last_name"],
		Email:     strings.TrimSpace(data["email"]),
		Password:  pass,
		Phone:     data["phone"],
		RoleId:    3,
	}
	user := User{
		FirstName: data["first_name"],
		LastName:  data["last_name"],
		Email:     strings.TrimSpace(data["email"]),
		Password:  pass,
		Phone:     data["phone"],
		RoleId:    3,
	}

	// Send an email to the user's email address ................
	err := sendVerificationEmail(user)
	if err != nil {
		return c.JSON(fiber.Map{
			"error": "Error sending email: " + err.Error(),
		})
	}


	database.DB.Create(&user)

	c.Status(200)
	return c.JSON(fiber.Map{
		"message": "Account has been created successfully ...!",
		"user":    user,
	})

}

func sendVerificationEmail(user User) error {
	// Create a new message using gomail
	msg := gomail.NewMessage()
	msg.SetHeader("From", "hiteshkumarkunri@gmail.com")
	msg.SetHeader("To", user.Email)
	msg.SetHeader("Subject", "Registration Confirmation Mail!")
	msg.SetBody("text/html", "<h1>Welcome "+user.FirstName+" "+user.LastName+"!</h1><p>Thank you for registering with Web.</p><br /><h6>'Please click the following link to verify your email address: http://localhost:3000/verify?email="+user.Email+"&token="+user.VerificationToken+"'</h6>")

	// Create a new email sending client
	d := gomail.NewDialer("smtp.gmail.com", 587, "hiteshkumarkunri@gmail.com", "onrqhkudckxmmxku")

	// Send the message using the email sending client
	if err := d.DialAndSend(msg); err != nil {
		// Handle error sending email
		return err
	}
	return nil
}

func VerifyEmail(c *fiber.Ctx) error {
	// Parse the email and verification token from the request parameters
	email := c.Params("email")
	token := c.Params("token")

	// Find the user with the given email address in the database
	user := findUserByEmail(email)

	// Verify the user's email address if the verification token matches
	if user != nil && user.VerificationToken == token {
		user.IsVerified = true

		// Update the user in the database

		return c.SendString("Email verified successfully!")
	}

	return c.SendString("Invalid email or token!")
}

// findUserByEmail finds a user with the given email address in the database
func findUserByEmail(email string) *User {
	// Find the user with the given email address in the database

	// Return the user if found, or nil if not found
	return nil
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
