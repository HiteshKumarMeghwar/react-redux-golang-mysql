package middleware

import (
	"log"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/gofiber/fiber/v2"
)

func IsAuthenticate(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	log.Panicln(cookie)
	if cookie != "" {
		if _, err := jwtToken.ParseJwt(cookie); err != nil {
			c.Status(fiber.StatusUnauthorized)
			return c.JSON(fiber.Map{
				"message": "unauthenticated",
			})
		}
		return c.Next()
	}
	c.Status(fiber.StatusUnauthorized)
	return c.JSON(fiber.Map{
		"message": "Your Cookie Not Found/Empty",
	})
}
