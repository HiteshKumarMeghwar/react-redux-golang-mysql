package middleware

import (
	"log"

	"github.com/HiteshKumarMeghwar/react-redux-golang-mysql/tree/main/golang-api/jwtToken"
	"github.com/gofiber/fiber/v2"
)

func IsAuthenticate(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	log.Println(token)
	if id, err := jwtToken.ParseJwt(cookie); err != nil {
		c.Status(fiber.StatusUnauthorized)
		log.Println(id)
		log.Println(err)
		return c.JSON(fiber.Map{
			"message":          "unauthenticated",
			"id":               id,
			"Cookie_jwt_token": cookie,
		})
	}
	return c.Next()
}
