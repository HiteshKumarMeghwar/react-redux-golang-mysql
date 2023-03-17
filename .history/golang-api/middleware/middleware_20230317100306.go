package middleware

import (
	"log"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/gofiber/fiber/v2"
)

func IsAuthenticate(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	log.Println(cookie)
	if _, err := jwtToken.ParseJwt(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIxIiwiZXhwIjoxNjc5MTE0NjQzfQ.CPRjvqumigS-RQUZ7fpc31AJEYxQHlCi0G5sUiFxzFQ`); err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "unauthenticated",
		})
	}
	return c.Next()
}
