package controllers

import "github.com/gofiber/fiber/v2"

func Login(c *fiber.Ctx) error {
	return c.SendString("login")
}

func Register(c *fiber.Ctx) error {
	return c.SendString("register")
}
