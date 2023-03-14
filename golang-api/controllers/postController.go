package controllers

import "github.com/gofiber/fiber/v2"

func ShowAllPosts(c *fiber.Ctx) error {
	return c.SendString("ShowAllPosts")
}

func CreatePost(c *fiber.Ctx) error {
	return c.SendString("Create Posts")
}

func UpdatePost(c *fiber.Ctx) error {
	return c.SendString("Update Post")
}

func DeletePost(c *fiber.Ctx) error {
	return c.SendString("Delete Post")
}
