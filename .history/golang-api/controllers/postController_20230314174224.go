package controllers

import (
	"math/rand"

	"github.com/gofiber/fiber/v2"
)

var letters = []rune("abcdefghijklmnopqrstuvwxyz")

func randLetter(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	return string(b)
}

func ShowAllPosts(c *fiber.Ctx) error {
	return c.SendString("ShowAllPosts")
}

func CreatePost(c *fiber.Ctx) error {

}

func UpdatePost(c *fiber.Ctx) error {
	return c.SendString("Update Post")
}

func DeletePost(c *fiber.Ctx) error {
	return c.SendString("Delete Post")
}
