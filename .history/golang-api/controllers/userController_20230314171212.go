package controllers

import (
	"strconv"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/database"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/models"
	"github.com/gofiber/fiber/v2"
)

func SingleUser(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	id, err := jwtToken.ParseJwt(cookie)
	if err != nil {
		return c.JSON(fiber.Map{
			"message": "Unauthenticated",
		})
	}
	user_id, _ := strconv.Atoi(id)
	var user models.User
	database.DB.Where("id = ?", user_id).First(&user)
	return c.JSON(user)
}

func AllUsers(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	id, err := jwtToken.ParseJwt(cookie)
	if err != nil {
		return c.JSON(fiber.Map{
			"message": "Unauthenticated",
		})
	}

	var user models.User
	var users []models.User
	database.DB.Where("id = ?", id).First(&user)
	if user.RoleId == 1 {
		database.DB.Where("id != ?", id).Find(&users)
	} else if user.RoleId == 2 {
		database.DB.Where("id != ?", id).Where("role_id != ?", 1).Find(&users)
	} else {
		return c.JSON(fiber.Map{
			"users": "",
		})
	}
	return c.JSON(fiber.Map{
		"users": users,
	})
}

func DeleteUser(c *fiber.Ctx) error {
	return c.SendString("deleteUser")
}
