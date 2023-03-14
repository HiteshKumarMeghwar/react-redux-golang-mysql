package controllers

import (
	"github.com/gofiber/fiber/v2"
)

func SingleUser(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	/* id, err := jwtToken.ParseJwt(cookie)
	if err != nil {
		panic(err)
	}
	var user models.User
	database.DB.Where("id = ?", id).First(&user) */
	return c.JSON(cookie)
}

func AllUsers(c *fiber.Ctx) error {
	return c.SendString("AllUsers")
}

func DeleteUser(c *fiber.Ctx) error {
	return c.SendString("deleteUser")
}
