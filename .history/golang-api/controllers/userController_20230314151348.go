package controllers

import "github.com/gofiber/fiber/v2"

func CreateUser(c *fiber.Ctx) error {
	return c.SendString("createUser")
}

func AllUsers(c *fiber.Ctx) error {
	return c.SendString("AllUsers")
}

func DeleteUser(c *fiber.Ctx) error {
	return c.SendString("deleteUser")
}
