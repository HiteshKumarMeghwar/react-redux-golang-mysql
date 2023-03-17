package middleware

import (
	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/gofiber/fiber/v2"
)

func IsAuthenticate(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	a := cookie
	if _, err := jwtToken.ParseJwt(a); err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "unauthenticated",
		})
	}
	return c.Next()
}
