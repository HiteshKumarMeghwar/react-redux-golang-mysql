package controllers

import "github.com/gofiber/fiber/v2"

func CreatePost(c *fiber.Ctx) error {
	return c.SendString("Hello, World Routing!")
}
