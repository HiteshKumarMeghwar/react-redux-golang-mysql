package controllers

import (
	"regexp"

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
	return c.SendString("register")
}
