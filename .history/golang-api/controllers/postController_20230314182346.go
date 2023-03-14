package controllers

import (
	"math/rand"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/database"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/models"
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
	var all_posts []models.Blog
	database.DB.Preload("User").Find(&all_posts)
	return c.JSON(fiber.Map{
		"posts": all_posts,
	})
}

func CreatePost(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	id, _ := jwtToken.ParseJwt(cookie)

	form, err := c.MultipartForm()
	if err != nil {
		return err
	}
	files := form.File["image"]
	fileName := ""

	for _, file := range files {
		fileName = randLetter(5) + "_" + file.Filename
		if err := c.SaveFile(file, "./uploads/"+fileName); err != nil {
			return nil
		}
	}
	image := "http://localhost:3000/api/upload/" + fileName

	var createPost models.Blog
	if err := c.BodyParser(&createPost); err != nil {
		return err
	}

	data := models.Blog{
		Title:  createPost.Title,
		Desc:   createPost.Desc,
		Image:  image,
		UserID: id,
	}

	if err := database.DB.Create(&data).Error; err != nil {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Invalid payload",
		})
	}
	return c.JSON(fiber.Map{
		"message": "Congratulations!, Your post is live",
	})
}

func UpdatePost(c *fiber.Ctx) error {
	return c.SendString("Update Post")
}

func DeletePost(c *fiber.Ctx) error {
	return c.SendString("Delete Post")
}
