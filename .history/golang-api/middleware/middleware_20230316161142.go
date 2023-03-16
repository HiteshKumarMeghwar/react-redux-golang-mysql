package middleware

import (
	"log"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/gofiber/fiber/v2"
)

func IsAuthenticate(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	log.Println(cookie)
	if id, err := jwtToken.ParseJwt(c.Cookies("jwt")); err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message":          "unauthenticated",
			"id":               id,
			"Cookie_jwt_token": cookie,
		})
	}
	return c.Next()
}
